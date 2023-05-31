import Image from "next/image";
import { FaDocker, FaGitlab, FaJava } from "react-icons/fa";
import { type IconType } from "react-icons/lib";
import {
  SiAngular,
  SiAnsible,
  SiJavascript,
  SiMicrosoftsqlserver,
  SiNodedotjs,
  SiPython,
  SiSpring,
  SiTypescript,
  SiVault,
} from "react-icons/si";
import { MotionDiv } from ".";
import { useState } from "react";

type ExperienceIcon = { Icon: IconType; desc: string };

export interface Experience {
  note?: string;
  img: string;
  title: string;
  subtitle: string;
  technologiesIcons?: ExperienceIcon[];
  period: [string, string];
  bullets: string[];
}

export const workExperiences: Experience[] = [
  {
    note: "Education",
    img: "https://companieslogo.com/img/orig/DELL-f7f7f0be.png?t=1634108492",
    title: "Dell Technologies",
    subtitle: "Software Engineer 2",
    technologiesIcons: [
      { Icon: SiAngular, desc: "Angular" },
      { Icon: SiSpring, desc: "" },
      { Icon: SiNodedotjs, desc: "" },
      { Icon: FaJava, desc: "" },
      { Icon: SiJavascript, desc: "" },
      { Icon: SiTypescript, desc: "" },
      { Icon: SiPython, desc: "" },
      { Icon: FaDocker, desc: "" },
      { Icon: SiVault, desc: "" },
      { Icon: SiAnsible, desc: "" },
      { Icon: FaGitlab, desc: "" },
      { Icon: SiMicrosoftsqlserver, desc: "" },
    ],
    period: ["2022", "present"],
    bullets: ["I do this", "And that", "And the other thing"],
  },

  {
    note: "Education",
    img: "https://companieslogo.com/img/orig/DELL-f7f7f0be.png?t=1634108492",
    title: "Dell Technologies",
    subtitle: "Software Engineer 2",
    technologiesIcons: [
      { Icon: SiAngular, desc: "Angular" },
      { Icon: SiSpring, desc: "" },
      { Icon: SiNodedotjs, desc: "" },
      { Icon: FaJava, desc: "" },
      { Icon: SiJavascript, desc: "" },
      { Icon: SiTypescript, desc: "" },
      { Icon: SiPython, desc: "" },
      { Icon: FaDocker, desc: "" },
      { Icon: SiVault, desc: "" },
      { Icon: SiAnsible, desc: "" },
      { Icon: FaGitlab, desc: "" },
      { Icon: SiMicrosoftsqlserver, desc: "" },
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
        // className="relative mx-auto flex min-h-screen max-w-full flex-col items-center gap-12 overflow-hidden px-4 py-24 text-left md:px-10"
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

  function ExperienceTypeButton({
    isSelected,
    text,
  }: {
    isSelected: boolean;
    text: string;
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
        <Image
          src={props.img}
          fill
          alt=""
          className="rounded-full object-cover object-center"
        />
      </MotionDiv>

      {props.note && (
        <div
          className={
            "bg-accent-500 absolute right-7 top-0 rounded-lg p-2 md:p-4"
            // props.note === "Education" && "bg-sky-800",
            // props.note === "Open Source" && "bg-red-900"
          }
        >
          {props.note}
        </div>
      )}

      <div className="max-w-full px-0 md:px-10">
        <h4 className="text-2xl font-medium md:text-4xl">{props.title}</h4>
        <p className="mt-1 text-lg font-bold md:text-2xl">{props.subtitle}</p>
        {/* <div className="scroll scrollbar-thumb-accent-500/80 my-2 flex w-full shrink-0 space-x-2 overflow-x-auto scrollbar-thin scrollbar-track-gray-400/20 "> */}
        <div className="scroll scrollbar-thumb-accent-500/80 z-1 my-2 flex w-full shrink-0 space-x-2 overflow-auto pb-2 scrollbar-thin scrollbar-track-gray-400/20">
          {props.technologiesIcons?.map(({ Icon }, index) => (
            <div key={index}>
              <Icon className="h-8 w-8 shrink-0" />
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
