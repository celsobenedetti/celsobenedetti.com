import Image from "next/image";
import { FaDocker, FaGitlab, FaJava } from "react-icons/fa";
import { type IconType } from "react-icons/lib";
import {
  SiAngular,
  SiAnsible,
  SiJavascript,
  SiJest,
  SiMicrosoftsqlserver,
  SiMysql,
  SiNodedotjs,
  SiPython,
  SiRuby,
  SiRubyonrails,
  SiSpring,
  SiTypescript,
  SiVault,
  SiVuedotjs,
} from "react-icons/si";
import { MotionDiv } from ".";
import { useState } from "react";

export interface Experience {
  note?: string;
  img: string;
  url?: string;
  title: string;
  subtitle: string;
  technologiesIcons?: IconType[];
  period: [string, string];
  bullets: string[];
}

export const workExperiences: Experience[] = [
  {
    note: "Work",
    img: "https://companieslogo.com/img/orig/DELL-f7f7f0be.png?t=1634108492",
    title: "Dell Technologies",
    subtitle: "Software Engineer 2",
    url: "https://www.dell.com/en-us",
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
    note: "Work",
    img: "https://jera.com.br/images/logo-facebook.png",
    title: "Jera Apps",
    subtitle: "Web Developer",
    url: "https://jera.com.br/",
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
    period: ["2022", "present"],
    bullets: ["I do this", "And that", "And the other thing"],
  },
];

export function ExperiencesSection({ id }: { id: string }) {
  const [isWorkSelected, setIsWorkSelected] = useState(true);
  const toggleSelection = () => setIsWorkSelected(!isWorkSelected);

  const [selectedExperience, setSelectedExperience] = useState(0);

  return (
    <section id={id}>
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
          {workExperiences.map((experience, index) => (
            <ExperienceCard
              isSelected={index == selectedExperience}
              onClick={() => setSelectedExperience(index)}
              key={experience.title}
              {...experience}
            />
          ))}
        </div>
      </MotionDiv>
    </section>
  );

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

export function ExperienceCard(
  props: Experience & { isSelected: boolean; onClick: () => void }
) {
  return (
    <article
      onClick={props.onClick}
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
        <a href={props.url} target="_blank">
          <Image
            src={props.img}
            fill
            alt={props.title}
            className="cursor-pointer rounded-full object-contain object-center"
          />
        </a>
      </MotionDiv>

      {props.note && (
        <div
          className={
            "bg-accent-500 absolute right-7 top-0 rounded-lg p-2 md:p-4"
          }
        >
          {props.note}
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
