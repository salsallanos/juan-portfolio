import { socialMedia } from "@/data";
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="w-full pb-10" id="contact">
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Camilo Llanos
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-5 lg:mt-0">
          {socialMedia.map((info) => (
            <a
              href={info.link}
              key={info.id}
              target="_blank"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-neutral-950 rounded-lg border border-neutral-800"
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;