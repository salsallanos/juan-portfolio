import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Spotlight } from "@/components/ui/spotlight-new";
import { skills } from '@/data'
import Marquee from "react-fast-marquee";
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="pb-10 pt-36">
      <Spotlight />
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>
          <TextGenerateEffect
            words="Hi, I&apos;m Camilo Llanos"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            A Software Engineer based in USA.
          </p>
          <Marquee
            className="mt-20"
            direction="right"
          >
            {skills.map((item, idx) => (
              <Image key={idx} src={`https://skillicons.dev/icons?i=${item.name}`} className='px-5' alt={item.name}/>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Hero;
