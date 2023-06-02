import Image from "next/image";
import {
  FaAws,
  FaDocker,
  FaGitlab,
  FaJava,
  FaLinux,
  FaNodeJs,
} from "react-icons/fa";
import { type IconType } from "react-icons/lib";
import {
  SiAngular,
  SiAnsible,
  SiC,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRuby,
  SiRubyonrails,
  SiSpring,
  SiTypescript,
  SiVault,
  SiVuedotjs,
} from "react-icons/si";
import { FaUniversity } from "react-icons/fa";
import { ImDatabase } from "react-icons/im";
import { TbBinaryTree, TbLambda, TbMathIntegralX } from "react-icons/tb";
import { GiProcessor } from "react-icons/gi";
import { LuNetwork } from "react-icons/lu";
import { AiOutlineFieldBinary } from "react-icons/ai";

import { MotionDiv } from ".";
import { useRef, useState } from "react";
import { SlGraph } from "react-icons/sl";

export interface Experience {
  icon?: IconType;
  img: string;
  title: string;
  subtitle: string;
  technologiesIcons?: IconType[];
  period: [string, string];
  bullets: string[];
}

export const workExperiences: Experience[] = [
  {
    img: "https://companieslogo.com/img/orig/DELL-f7f7f0be.png?t=1634108492",
    title: "Dell Technologies",
    subtitle: "Software Engineer 2",
    technologiesIcons: [
      SiAngular,
      SiSpring,
      SiNodedotjs,
      FaJava,
      SiJavascript,
      SiTypescript,
      SiPython,
      FaDocker,
      SiVault,
      SiAnsible,
      FaGitlab,
      SiMicrosoftsqlserver,
    ],
    period: ["2022", "present"],
    bullets: ["I do this", "And that", "And the other thing"],
  },

  {
    img: "https://jera.com.br/images/logo-facebook.png",
    title: "Jera Apps",
    subtitle: "Web Developer",
    technologiesIcons: [
      SiVuedotjs,
      SiRubyonrails,
      SiNodedotjs,
      SiRuby,
      SiJavascript,
      SiTypescript,
      FaDocker,
      SiJest,
      SiMysql,
      FaGitlab,
    ],
    period: ["2022/1", "2022/11"],
    bullets: ["I do this", "And that", "And the other thing"],
  },
];

export const educationExperiences: Experience[] = [
  {
    icon: FaUniversity,
    img: "https://www.unifal-mg.edu.br/portal/wp-content/uploads/sites/52/2020/10/unifal-mg_logo_borda_02.png",
    title: "Universidade Federal de Alfenas",
    subtitle: "Bachelor in Computer Science",
    technologiesIcons: [
      SiC,
      GiProcessor,
      TbBinaryTree,
      TbLambda,
      TbMathIntegralX,
      SlGraph,
      LuNetwork,
      ImDatabase,
      FaLinux,
    ],
    period: ["2016", "2023"],
    bullets: ["I do this", "And that", "And the other thing"],
  },

  {
    img: "https://uploads-ssl.webflow.com/62235d098ddf9185c2d74422/622c0e0746587f694e5361b5_Driven_pink-p-500.png",
    title: "Driven Educattion",
    subtitle: "Full-Stack Web Development Bootcamp",
    technologiesIcons: [
      SiHtml5,
      SiCss3,
      SiJavascript,
      SiTypescript,
      SiReact,
      FaNodeJs,
      FaDocker,
      SiPrisma,
      SiMongodb,
      SiPostgresql,
      SiJest,
      FaAws,
    ],
    period: ["2022/1", "2022/10"],
    bullets: ["I do this", "And that", "And the other thing"],
  },
];

export function ExperiencesSection({ id }: { id: string }) {
  const [isWorkSelected, setIsWorkSelected] = useState(true);
  const toggleSelection = () => setIsWorkSelected(!isWorkSelected);

  // TODO: implement section scrollY event to highlight experience cards
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id={id} ref={sectionRef}>
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative mx-auto flex min-h-screen max-w-full flex-col items-center gap-12 overflow-hidden px-4 py-24 text-left md:px-10"
      >
        <h3 className="font-cal text-2xl uppercase tracking-[15px] text-subtext md:tracking-[20px]">
          Experience
        </h3>

        <div className="flex w-2/3 justify-evenly ">
          <ExperienceTypeButton isSelected={isWorkSelected} text="Work" />
          <ExperienceTypeButton isSelected={!isWorkSelected} text="Education" />
        </div>
        <div className="flex w-full snap-x snap-mandatory flex-col items-center gap-4 scrollbar-thin scrollbar-track-gray-400/20 md:p-10">
          {isWorkSelected ? <WorkExperiences /> : <EducationExperiences />}
        </div>
      </MotionDiv>
    </section>
  );

  function WorkExperiences() {
    return (
      <>
        {workExperiences.map((experience) => {
          return (
            <ExperienceCard
              isSelected={true} /* TODO: implement select on scroll: */
              key={experience.title}
              {...experience}
            />
          );
        })}
      </>
    );
  }

  function EducationExperiences() {
    return (
      <>
        {educationExperiences.map((experience) => {
          return (
            <ExperienceCard
              isSelected={true} /* TODO: implement select on scroll: */
              key={experience.title}
              {...experience}
            />
          );
        })}
      </>
    );
  }

  type ExperienceType = "Work" | "Education";

  function ExperienceTypeButton({
    isSelected,
    text,
  }: {
    isSelected: boolean;
    text: ExperienceType;
  }) {
    return (
      <button
        onClick={toggleSelection}
        className={`border-b  px-2 py-2 text-sm uppercase tracking-widest  transition-all
                            hover:border-text/40 hover:text-text/40  ${
                              isSelected
                                ? "border-text/70 text-text"
                                : "border-base text-subtext"
                            }`}
      >
        {text}
      </button>
    );
  }
}

export function ExperienceCard({
  icon: Icon,
  ...props
}: Experience & { isSelected: boolean }) {
  return (
    <article
      className={`content relative flex w-full flex-shrink-0 snap-center flex-col items-center space-y-7  break-normal rounded-2xl bg-mantle p-10  transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px] ${
        props.isSelected ? "" : "opacity-40"
      }`}
    >
      <MotionDiv
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative h-32 w-32 xl:h-[200px] xl:w-[200px]"
      >
        <Image
          src={props.img}
          fill
          alt={props.title}
          className="min-w-[10rem] self-stretch object-contain object-center"
        />
      </MotionDiv>

      {Icon && (
        <div className="absolute right-10 top-0 flex h-10 w-10 rounded-lg p-2 md:p-4 ">
          <Icon className="min-h-full min-w-full " width={30} />
        </div>
      )}

      <div className="px1 flex min-w-full max-w-full flex-col md:px-10">
        <h2 className="text-3xl font-medium md:text-4xl">{props.title}</h2>
        <p className="mt-1 text-lg font-bold md:text-2xl">{props.subtitle}</p>
        <div className="scroll scrollbar-thumb-accent-500/80 z-1 my-2 flex w-full shrink-0 space-x-2 overflow-auto pb-2 scrollbar-thin scrollbar-track-gray-400/20">
          {props.technologiesIcons?.map((Icon, index) => (
            <div key={index}>
              <Icon className="h-6 w-6 shrink-0 md:h-8 md:w-8" />
            </div>
          ))}
        </div>

        <p className="py-5 text-sm uppercase text-gray-300 md:text-base">
          Start: {props.period[0]} | End: {props.period[1]}
        </p>

        <ul className="ml-5 list-disc space-y-4 text-text md:text-lg">
          {props.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
