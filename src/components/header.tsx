import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { SlEnvolope } from "react-icons/sl";
import { MotionDiv } from ".";

export const Header = (props: { animate?: boolean }) => {
  const { animate = true } = props;

  return (
    <header className="bg-default sticky top-0 z-50 mx-auto flex max-w-7xl items-start justify-between p-5 pt-8 xl:items-center">
      <MotionDiv
        {...(animate && {
          initial: { opacity: 0, x: -500 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 1.5 },
        })}
        className="flex items-center"
      >
        <Link href="/#me">
          <FaHome
            className="h-10 w-10 cursor-pointer fill-gray-400 p-2 text-2xl transition-colors hover:fill-gray-300"
            title="Go home"
          />
        </Link>

        <a href="https://github.com/celso-patiri" target="_blank">
          <SiGithub
            className="h-10 w-10 cursor-pointer fill-gray-400 p-2 text-2xl transition-colors hover:fill-gray-300"
            title="Github"
          />
        </a>
        <a href="https://www.linkedin.com/in/celso-patiri/" target="_blank">
          <SiLinkedin
            className="h-10 w-10 cursor-pointer fill-gray-400 p-2 text-2xl transition-colors hover:fill-gray-300"
            title="LinkedIn"
          />
        </a>
      </MotionDiv>

      <MotionDiv
        {...(animate && {
          initial: { opacity: 0, x: 500 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 1.5 },
        })}
        className="flex items-center"
      >
        <Link
          href="/#final-words"
          className="group flex cursor-pointer items-center"
        >
          <SlEnvolope className="h-10 w-10 cursor-pointer fill-gray-400 p-2 text-2xl transition-colors group-hover:fill-gray-300" />
          <span className="font-cal hidden text-sm uppercase text-gray-400 group-hover:text-gray-300 md:inline-flex">
            Contact
          </span>
        </Link>
      </MotionDiv>
    </header>
  );
};
