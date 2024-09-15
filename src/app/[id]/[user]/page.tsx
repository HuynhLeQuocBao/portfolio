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
import { MyFormData } from "@/interfaces";

const API_URL = "http://68.183.186.10:3005";
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
      router.replace("/software-engineer")
    }
  }
  return (
    <div className="w-full">
      <Header />
      <AboutMe name={userInfo?.profile?.name} bio={userInfo?.profile?.bio} image={userInfo? "http://68.183.186.10:3005" + userInfo.profile?.image : ""}/>
      <Skills  technicalSkills = {userInfo?.technicalSkills}/>
      <MyProjects projects ={userInfo?.projects} />
      <Footer />
    </div>
  );
};
export default PortfolioPage;
