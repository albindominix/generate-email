import Resume from "@/app/emails/resume";
import { render } from "@react-email/render";
import { NextResponse } from "next/server";
import nodemailer from 'nodemailer'

// const emails =[
//   {
//     to: "info@forumintl.com"
//   },
//   {
//     to: "ftsgroup@emirates.net.ae"  
//   },
//   {
//     to: "careers@2futurementor.com"
//   },
//   {
//     to: "uae@goldenhcr.com"
//   }, 
//   {
//     to: "gold@emirates.net.ae"
//   },
//   {
//     to: "goldmat@emirates.net.ae"
//   },
//   {
//     to: "dxbadmin@grafton-group.com"
//   },
//   {
//     to: "dubai@gulfbankers.com"
//   },
//   {
//     to: "dubai@gulfmanagers.com"
//   },
//   {
//     to: "Jobs@headhuntersme.com"
//   },
//   {
//     to: "hemasco@emirates.net.ae" 
//   },
//   {
//     to: "hisyshr@emirates.net.ae"
//   },
//   {
//     to: "Pyramids@emirates.net.ae"
//   },
//   {
//     to: "lcontact@emirates.net.ae"
//   },
//   {
//     to: "imgmark@emirates.net.ae"
//   },
//   {
//     to: "cv@indigo.ae"
//   },
//   {
//     to: "profile@ingram-search.com"
//   },
//   {
//     to: "info@interfaceuae.com"
//   },
//   {
//     to: "intos@emirates.net.ae"
//   },
//   {
//     to: "info@intersearch.ae"
//   },
//   {
//     to: "cv@iqselection.com"
//   },
//   {
//     to: "jbsdubai@emirates.net.ae"
//   },
//   {
//     to: "jc@jcconseil.com"
//   },
//   {
//     to: "jicdubai@emirates.net.ae"
//   },
//   {
//     to: "apply@jobhuntdubai.com"
//   },
//   {
//     to: "jobline@emirates.net.ae"
//   },
//   {
//     to: "Joblink@emirates.net.ae"
//   },
//   {
//     to: "Jobs@emirates.net.ae"
//   },
//   {
//     to: "Jobscan2@emirates.net.ae" 
//   },
//   {
//     to: "sales@jobtrackme.com"
//   },
//   {
//     to: "kl@emirates.net.ae"
//   },
//   {
//     to: "Kmc2003@eim.ae"
//   },
//   {
//     to: "dubai@jrknowles.com"
//   },
//   {
//     to: "Lobomngt@emirates.net.ae"
//   },
//   {
//     to: "Lbe@emirates.net.ae" 
//   }, 
//   {
//     to: "me@mafoi.com"
//   },
//   {
//     to: "Madamcs@emirates.net.ae"
//   },
//   {
//     to: "mlss888@emirates.net.ae"
//   },
//   {
//     to: "mail@mawaride.com"
//   },
//   {
//     to: "info@millenniumsolutions.biz"
//   },
//   {
//     to: "admin@mindfieldresources.com"
//   },
//   {
//     to: "corporate@mosaic-careers.com"
//   }, 
//   {
//     to: "cV@mriwwuae.ae"
//   },
//   { 
//     to: "myhrdxb@eim.ae"
//   },
//   {
//     to: "recruitment@nadia-me.ae"
//   },
//   {
//     to: "oryx@emirates.net.ae"
//   }  
// ];
const emails=[{
  to:'albinsnit1344@gmail.com'
  // to:'recruitment@nadia-me.ae'
}]

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'albinantonydominic@gmail.com',
      pass:'cahy nunj qmie udqf'
    }
  });
export async function POST(req,res){

console.log(process.env.NEXT_PUBLIC_PASSWORD)
    const emailHtml = render(Resume());

    emails.forEach((email,index) => {
      let mailOptions = {
        from: '"Albin Antony" <albinantonydominic@gmail.com>',
        to: email.to,
        subject: "Application for Software Engineer",
        html: emailHtml
      };

      setTimeout(() => {
        sendmail();            
    }, 1000 * index);

    function sendmail() {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent' + info.response);
            }
        });
    }

        // res.send('Email sent successfully!');
      });
      return NextResponse.json({message:'successful'})

    }
