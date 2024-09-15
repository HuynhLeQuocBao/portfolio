import React from "react";

const HeaderItem = ({ text, link }: { text: string; link: string }) => (
  <a
    href={"#" + link}
    className="block py-5 header-text text-xl font-poppins hover:text-orange-500 active:text-orange-500"
  >
    {text}
  </a>
);

const Header = () => {
  const headerItems = [
    { text: "Home", link: "home" },
    { text: "Education", link: "education" },
    { text: "Skill", link: "skills" },
    { text: "Experience", link: "experience" },
    { text: "Project", link: "projects" },
  ];

  return (
    <div className="flex items-center xl:justify-center w-full gap-x-10 fixed top-0 left-0 bg-white opacity-90 z-50 shadow-xl overflow-x-auto px-10">
      {headerItems.map((item, index) => (
        <HeaderItem key={index} text={item.text} link={item.link} />
      ))}
    </div>
  );
};

export default Header;
