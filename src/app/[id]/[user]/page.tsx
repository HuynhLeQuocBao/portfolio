"use client";
import React, { useEffect, useState } from "react";
import AboutMe from "@/components/it-portfolio/about-me";
import Skills from "@/components/it-portfolio/skills";
import Education from "@/components/it-portfolio/education";
// import WorkExperience from "@/components/it-portfolio/work-experience";
import MyProjects from "@/components/it-portfolio/my-projects";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import "../../../styles/it-portfolio.css";
import { MyFormData } from "@/interfaces";

const PortfolioPage = () => {
  const params = useParams()
  const router = useRouter()
  const [userInfo, setUserInfo] = useState<MyFormData>()
  useEffect(()=>{
    getData(params.user)
  },[])
  const getData = async(userInfoId: string| string[])=>{
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
      <AboutMe name={userInfo?.profile?.name} bio={userInfo?.profile?.bio} image={userInfo?.profile?.image} contact={userInfo?.contact}/>
      <Education education ={userInfo?.education} />
      <Skills  technicalSkills = {userInfo?.technicalSkills}/>
      {/* <WorkExperience projects ={userInfo?.workExperience} /> */}
      <MyProjects projects ={userInfo?.projects} />
    </div>
  );
};
export default PortfolioPage;
