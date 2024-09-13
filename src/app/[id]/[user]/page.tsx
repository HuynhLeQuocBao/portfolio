"use client";
import Header from "@/components/it-portfolio/header";
import React, { useEffect, useState } from "react";
import AboutMe from "@/components/it-portfolio/about-me";
import Skills from "@/components/it-portfolio/skills";
import MyProjects from "@/components/it-portfolio/my-projects";
import Footer from "@/components/it-portfolio/footer";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import "../../../styles/it-portfolio.css";
import { FormData } from "@/interfaces";

const PortfolioPage = () => {
  const params = useParams()
  const router = useRouter()
  const [userInfo, setUserInfo] = useState<FormData>()
  useEffect(()=>{
    getData(params.user)
  },[])
  const getData = async(userInfoId: string)=>{
    try {
      console.log("/"+userInfoId+".json")
      const res =  await axios.get("/"+userInfoId+".json")
      setUserInfo(res.data)
      console.log(res)
    } catch (error) {
      console.log(error)
      router.replace("/software-engineer")
    }
  }
  return (
    <div className="w-full">
      <Header />
      <AboutMe name={userInfo?.profile?.name} bio={userInfo?.profile?.bio} image={userInfo?.profile?.image}/>
      <Skills  technicalSkills = {userInfo?.technicalSkills}/>
      <MyProjects projects ={userInfo?.projects} />
      <Footer />
    </div>
  );
};
export default PortfolioPage;
