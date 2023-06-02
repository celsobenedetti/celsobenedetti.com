import "swiper/css/bundle";
import "swiper/css/scrollbar";
import Image from "next/image";
import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, FreeMode, Mousewheel, Scrollbar } from "swiper";
import { MotionDiv } from ".";

import {
  workExperiences,
  educationExperiences,
  type Experience,
} from "./experiencesData";

type ExperienceType = "Work" | "Education";

export function ExperiencesSection({ id }: { id: string }) {
  const [isWorkSelected, setIsWorkSelected] = useState(true);

  return (
    <section id={id}>
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex min-h-screen max-w-full flex-col items-center gap-10 px-4 py-24 text-left md:px-10"
      >
        <h3 className="font-cal text-2xl uppercase tracking-[15px] text-subtext md:tracking-[20px]">
          Experience
        </h3>

        <div className="flex w-2/3 justify-evenly ">
          <ExperienceTypeButton
            isSelected={isWorkSelected}
            onClick={() => setIsWorkSelected(true)}
            text="Work"
          />
          <ExperienceTypeButton
            isSelected={!isWorkSelected}
            onClick={() => setIsWorkSelected(false)}
            text="Education"
          />
        </div>
        <div className="mx-auto max-w-sm  overflow-hidden sm:max-w-xl sm:overflow-visible md:max-w-2xl md:p-10">
          {isWorkSelected ? (
            <ExperienceCardSlider experiences={workExperiences} />
          ) : (
            <ExperienceCardSlider experiences={educationExperiences} />
          )}
        </div>
      </MotionDiv>
    </section>
  );

  function ExperienceCardSlider(props: { experiences: Experience[] }) {
    const { experiences } = props;
    return (
      <Swiper
        effect={"cards"}
        centeredSlides={true}
        slidesPerView={"auto"}
        grabCursor={true}
        modules={[EffectCards]}
      >
        {experiences.map((experience, i) => {
          return (
            <SwiperSlide key={i} className="mr-5">
              <ExperienceCard key={experience.title} {...experience} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }

  function ExperienceTypeButton(props: {
    text: ExperienceType;
    onClick: () => void;
    isSelected: boolean;
  }) {
    const { text, onClick, isSelected } = props;
    return (
      <button
        onClick={onClick}
        className={`border-b  px-2 py-2 text-sm uppercase tracking-widest  transition-all
                           hover:border-text/40 hover:text-text/40  ${
                             isSelected
                               ? "border-text/70 text-text"
                               : "border-crust text-subtext"
                           }`}
      >
        {text}
      </button>
    );
  }
}

export function ExperienceCard(props: Experience) {
  const { icon: Icon } = props;
  return (
    <article className="mx-auto flex flex-col items-center space-y-7 overflow-auto break-normal rounded-2xl bg-base p-10">
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
          className="min-w-[10rem] self-stretch object-contain object-center lg:max-w-[150px]"
        />
      </MotionDiv>
      {Icon && (
        <div className=" absolute right-10 top-0 flex h-10 w-10 rounded-lg p-2 ">
          <Icon className="min-h-full min-w-full" />
        </div>
      )}
      <div className="px1 flex min-w-full max-w-full flex-col md:px-10">
        <h2 className="text-3xl font-medium md:text-4xl">{props.title}</h2>
        <p className="mt-1 text-lg font-bold md:text-2xl">{props.subtitle}</p>
        <Swiper
          nested={true}
          slidesPerView={10}
          breakpoints={{
            640: { slidesPerView: 11 },
          }}
          modules={[Scrollbar]}
          className="z-1 my-2 flex w-full shrink-0 space-x-2 overflow-auto pb-2 scrollbar-thin scrollbar-track-gray-400/20"
        >
          {props.technologiesIcons?.map((Icon, index) => (
            <SwiperSlide key={index}>
              <Icon className="h-6 w-6 shrink-0 md:h-8 md:w-8" />
            </SwiperSlide>
          ))}
        </Swiper>

        <p className="py-5 text-sm uppercase text-text">
          Start: {props.period[0]} | End: {props.period[1]}
        </p>

        <Swiper
          direction={"vertical"}
          nested={true}
          slidesPerView={"auto"}
          freeMode={true}
          scrollbar={true}
          mousewheel={true}
          modules={[FreeMode, Scrollbar, Mousewheel]}
          className="ml-5 max-h-56 list-disc space-y-4 text-text md:text-lg"
        >
          <ul>
            {props.bullets.map((bullet) => (
              <SwiperSlide key={bullet}>
                <li className="py-2 text-[17px]">{bullet}</li>
              </SwiperSlide>
            ))}
          </ul>
        </Swiper>
      </div>
    </article>
  );
}
