import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,Section,
  Link,Row,Column,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

export const Resume = () => (
  <Html>
    <Head />
    <Tailwind>
      <Preview>Let me be a part of your team</Preview>
      <Body
        style={{
          backgroundColor: "white",
          color: "black",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        }}
      >
        <Container className="mx-auto p-4 rounded-lg shadow">
          <Heading className="text-4xl font-bold mb-0 leading-tight text-center tracking-wide">
            Albin Antony
          </Heading>

          <Text className="text-gray-700 font-medium text-center  mb-4 ">
            Fullstack Developer
          </Text>
       

          <Text>
            I am Developer adept at building web apps end-to-end. Proficient in
            JavaScript, React, Node.js and cloud databases. Passionate about
            crafting modern UX with latest web technologies. Eager to join your
            dynamic team on innovative solutions.
          </Text>

          <code className="inline-block p-4 bg-gray-100 rounded border border-gray-300 text-gray-900">
            <Text className="text-center text-xl">EXPERIENCE</Text>
            <Text className="w-full flex justify-between mt-0">
              <strong className="text-xs">
                Moonhive Pvt Ltd, Software Developer
              </strong>
              <span className="text-xs">Sept/2022 - March/2023</span>
            </Text>
            <Text>
              <strong>Development Experience: </strong>
              Developed extensive React apps following <strong>
                SDLC
              </strong> and <strong>agile/scrum</strong> methodologies in
              professional settings
            </Text>
            <Text>
              <strong>Team Collaboration:</strong>
              Collaborated with 5 developers to enrich system metrics through
              optimized logic
            </Text>

            <Text>
              <strong>Code Optimization:</strong>
              Optimized legacy code implementations, accelerating front-end
              compile using technologies such as{" "}
              <strong>Redux, Redux-toolkit </strong>
              and <strong> React-Router</strong>.
            </Text>

            <Text>
              <strong>Database Management:</strong>
              Maintained the database of an image editor web app using
              <strong> WinSCP and SQL</strong> . Wrote SQL queries to add files
              to the database and display them on the UI.
            </Text>

            <Text>
              <strong> UI Development:</strong>
              Built UI features like <strong>paginated tables</strong>,
              <strong>event management with validation</strong>, and landing
              pages, refined UIs for polished user experience
            </Text>
          </code>

          <Text className="text-gray-500 mt-2 mb-4">
            I would welcome the opportunity to further discuss how i can add
            value to your engineering team.
          </Text>

          <Link
            href="https://drive.google.com/file/d/104Vbs6N_ILgbqWISfbFo6Bwqa0LPBeBs/view?usp=drivesdk"
            className="bg-[#2138c6] text-center text-white border-0 font-medium px-3 py-3 text-sm leading-snug cursor-pointer rounded"
            download
          >
            Download Resume
          </Link>
          <Section className="mt-4"> { " "}

          <Text
            className="text-xs  text-gray-500  text-center
        leading-normal
        mt-6"
          >
            Disclaimer
          </Text>

          <Text
            className="
        text-xs text-gray-500  text-center
        leading-normal
        mb-4"
          >
            {" "}
            so i made this template as sending generic email was not working, me
            being a developer thought this might get me a call, so..... did it
            work
          </Text>

          <Text className="text-xs text-center">
            {" "}
            <Link
              className="underline text-xs "
              href="https://rejected-email.netlify.app"
            >
             no job
            </Link>
          </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default Resume;

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
  borderRadius: "15px",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  width: "100%",
  textAlign: "center",
  padding: "0",
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const footer = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};

const code = {
  display: "inline-block",
  padding: "16px 4.5%",
  width: "90.5%",
  backgroundColor: "#f4f4f4",
  borderRadius: "5px",
  border: "1px solid #eee",
  color: "#333",
};
