import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faAddressCard, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import DevpostIcon from "./components/DevpostIcon";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 sm:p-8">
      <div className="w-full max-w-2xl space-y-6 text-white">
        <h1 className="text-5xl sm:text-6xl font-bold text-center">
          Krish Chopra
        </h1>
        <p className="mb-4 pt-6 text-lg sm:text-[19px]">
          Hey there! I&apos;m Krish — a Computer Science student at the {" "}
          <a
            href="https://uwaterloo.ca/"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            University of Waterloo
          </a>
          , passionate about emerging technologies and entrepreneurship.
        </p>
        <p className="mb-6 text-lg sm:text-[19px]">
          I love developing innovative, scalable solutions to real-world
          problems through software projects, hackathons, and pitch/case
          competitions. I&apos;m particularly interested in building products
          that have a positive social impact in the education and sustainability
          space.
        </p>
        <p className="mb-6 text-lg sm:text-[19px]">
          Most recently, I was a software engineer intern at{" "}
          <a
            href="https://birdseyepost.com"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            BirdseyePost
          </a>
          , building AI-powered marketing tools to reinvent the way that direct
          mail is sent. My past experience also includes working as a full-stack
          engineer intern at{" "}
          <a
            href="https://www.ycombinator.com/companies/garage-2"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Garage
          </a>{" "}
          (a seed stage YC-backed startup in New York), as well as at{" "}
          <a
            href="https://www.rbc.com/about-rbc.html"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            RBC
          </a>
          .
        </p>
        <p className="mb-6 text-lg sm:text-[19px]">
          When I&apos;m not coding, you can usually find me singing karaoke,
          playing badminton, or practicing magic tricks. If you&apos;d like to
          connect about potential opportunities or even just chat, feel free to
          reach out anytime at:{" "}
          <a
            href="mailto:krish.chopra@uwaterloo.ca"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            krish.chopra@uwaterloo.ca
          </a>
          .
        </p>
        <div
          className="flex justify-center space-x-5 sm:space-x-8 pt-6"
          style={{
            containerType: "inline-size",
            containerName: "icon-container",
          }}
        >
          <Link
            href="/files/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faAddressCard}
              className="icon text-gray-300 hover:text-white transition-all duration-200 ease-in-out hover:scale-110"
            />
          </Link>
          <Link
            href="https://github.com/krishchopra"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="icon text-gray-300 hover:text-white transition-all duration-200 ease-in-out hover:scale-110"
            />
          </Link>
          <Link
            href="https://linkedin.com/in/krish-chopra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="icon text-gray-300 hover:text-white transition-all duration-200 ease-in-out hover:scale-110"
            />
          </Link>
          <Link
            href="https://devpost.com/krish-chopra23"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DevpostIcon className="icon text-gray-300 hover:text-white transition-all duration-200 ease-in-out hover:scale-110" />
          </Link>
          <Link
            href="mailto:krish.chopra@uwaterloo.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="icon text-gray-300 hover:text-white transition-all duration-200 ease-in-out hover:scale-110"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
