"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const TextSection = ({
  name,
  bio,
}: {
  name: string | undefined;
  bio: string | undefined;
}) => (
  <div className="flex flex-col items-center md:w-1/2 xl:w-2/3 box-border">
    <div className="flex flex-col w-full h-auto box-border">
      <div className="flex flex-col w-full h-auto box-border">
        <p
          data-aos="fade-down"
          className="text-2xl font-semibold tracking-wider font-poppins"
        >
          Hi I am
        </p>
        <p
          data-aos="fade-down"
          className="my-4 highlight-text text-[32px] leading-8 font-semibold tracking-wide font-poppins"
        >
          {name}
        </p>
        <p
          data-aos="fade-up"
          className="text-6xl xl:text-[100px] xl:leading-[120%] font-bold tracking-wider font-poppins"
        >
          Software
        </p>
        <p
          data-aos="fade-up"
          className="md:ml-40 text-6xl xl:text-[100px] xl:leading-[120%] font-bold tracking-wide font-poppins"
        >
          Engineer
        </p>
      </div>
    </div>
    <p
      data-aos="fade-up"
      data-aos-duration="1500"
      className="mt-6 md:text-xl leading-6 font-normal tracking-wide font-poppins text-justify"
    >
      {bio}
    </p>
  </div>
);

const ContactInfo = ({ contact }: { contact: any }) => (
  <>
    {contact?.email && (
      <div className="flex items-center space-x-2">
        <a
          href={`mailto:${contact.email}`}
          className="p-2 text-blue-500 shadow shadow-orange-500 rounded-lg hover:bg-orange-200"
        >
          <Image
            src="/assets/images/mail.png"
            alt="Email"
            width={24}
            height={24}
          />
        </a>
      </div>
    )}
    {contact?.phone && (
      <div className="flex items-center space-x-2">
        <a
          href={`tel:${contact.phone}`}
          className="p-2 text-blue-500 shadow shadow-orange-500 rounded-lg hover:bg-orange-200"
        >
          <Image
            src="/assets/images/smartphone-call.png"
            alt="Phone"
            width={24}
            height={24}
          />
        </a>
      </div>
    )}
    {contact?.linkedin && (
      <div className="flex items-center space-x-2">
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-blue-500 shadow shadow-orange-500 rounded-lg hover:bg-orange-200"
        >
          <Image
            src="/assets/images/linkedin-big-logo.png"
            alt="LinkedIn"
            width={24}
            height={24}
          />
        </a>
      </div>
    )}
    {contact?.github && (
      <div className="flex items-center space-x-2">
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-blue-500 shadow shadow-orange-500 rounded-lg hover:bg-orange-200"
        >
          <Image
            src="/assets/images/github.png"
            alt="GitHub"
            width={24}
            height={24}
          />
        </a>
      </div>
    )}
  </>
);

const ImageSection = ({
  image,
  contact,
}: {
  image: string | undefined;
  contact: any;
}) => (
  <div
    data-aos="flip-left"
    className="flex flex-col items-center mt-10 md:mt-0 md:ml-10"
  >
    <img
      src={image ? image : ""}
      alt="Not Found"
      width={500}
      height={500}
      className="h-auto rounded-xl"
      loading="lazy"
    />
    <div className="flex justify-center gap-x-5 w-full mt-4">
      <ContactInfo contact={contact} />
    </div>
  </div>
);

const AboutMe = ({
  name,
  bio,
  image,
  contact,
}: {
  name: string | undefined;
  bio: string | undefined;
  image: string | undefined;
  contact: any;
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="home" className="max-w-[1600px] mx-auto mt-10 xl:mt-20 px-4 py-10 md:p-10 xl:p-20 w-full h-auto">
      <div className="flex flex-col w-full pb-px box-border">
        <div className="flex flex-col md:flex-row justify-between items-center w-full h-auto pb-px box-border">
          <TextSection name={name} bio={bio} />
          <ImageSection image={image} contact={contact} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
