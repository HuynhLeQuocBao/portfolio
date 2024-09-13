import Header from "@/components/it-portfolio/header";
import React from "react";
import "../../styles/it-portfolio.css";
import AboutMe from "@/components/it-portfolio/about-me";
import Skills from "@/components/it-portfolio/skills";
import MyProjects from "@/components/it-portfolio/my-projects";

const PortfolioPage = () => {
    return (
        <div  >
            <Header/>
            <AboutMe/>
            <Skills/>
            <MyProjects/>
        </div>
    );
}
export default PortfolioPage;