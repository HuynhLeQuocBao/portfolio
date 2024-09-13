"use client";
import Header from "@/components/it-portfolio/header";
import React, { useEffect } from "react";
import "../../styles/it-portfolio.css";
import AboutMe from "@/components/it-portfolio/about-me";
import Skills from "@/components/it-portfolio/skills";
import MyProjects from "@/components/it-portfolio/my-projects";
import Footer from "@/components/it-portfolio/footer";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

const PortfolioPreviewPage = () => {
  const params = useParams()
  const router = useRouter()
  useEffect(()=>{
    if (params.id !== "software-engineer"){
      router.replace("/")
    }
  },[])

  return (
    <div className="w-full">
     preview
    </div>
  );
};
export default PortfolioPreviewPage;
