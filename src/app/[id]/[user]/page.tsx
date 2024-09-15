"use client";
import React, { useEffect, useState } from "react";
import AboutMe from "@/components/it-portfolio/about-me";
import Skills from "@/components/it-portfolio/skills";
import Education from "@/components/it-portfolio/education";
import MyWorkExperience from "@/components/it-portfolio/my-work-experience";
import MyProjects from "@/components/it-portfolio/my-projects";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import "../../../styles/it-portfolio.css";
import { MyFormData } from "@/interfaces";
import Header from "@/components/it-portfolio/header";
import Footer from "@/components/it-portfolio/footer";

const API_URL = "https://ldnam-staging.selab.edu.vn";
const PortfolioPage = () => {
  const params = useParams()
  const router = useRouter()
  const [userInfo, setUserInfo] = useState<MyFormData>()
  useEffect(()=>{
    getData(params.user)
  },[])
  const getData = async(userInfoId: string| string[])=>{
    try {

      const res =  await axios.get(API_URL+"/api/get-user?user="+userInfoId)
      setUserInfo(res.data)
      console.log(res)
    } catch (error) {
      console.log(error)
      //router.replace("/software-engineer")
    }
  }
  return (
    <div className="w-full">
      <Header/>
      <AboutMe name={userInfo?.profile?.name} bio={userInfo?.profile?.bio} image={userInfo? "https://ldnam-staging.selab.edu.vn" + userInfo.profile?.image : ""} contact={userInfo?.contact}/>
      <Education education ={userInfo?.education} />
      <Skills  technicalSkills = {userInfo?.technicalSkills}/>
      <MyWorkExperience experience ={userInfo?.workExperience} />
      <MyProjects projects ={userInfo?.projects} />
      <Footer/>
    </div>
  );
};
export default PortfolioPage;
