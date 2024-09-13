import Header from "@/components/it-portfolio/header";
import React from "react";
import "../../styles/it-portfolio.css";
import AboutMe from "@/components/it-portfolio/about-me";
import Skills from "@/components/it-portfolio/skills";
import MyProjects from "@/components/it-portfolio/my-projects";
import Footer from "@/components/it-portfolio/footer";

const PortfolioPage = () => {
  return (
    <div className="w-full">
      <Header />
      <AboutMe />
      <Skills />
      <MyProjects />
      <Footer />
    </div>
  );
};
export default PortfolioPage;
