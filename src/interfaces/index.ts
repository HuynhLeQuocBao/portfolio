import { ReactNode } from "react";

// types.ts
export interface PortfolioTemplate {
  background: string;
  name: string;
  description: string;
  active: boolean;
}

export interface Profile {
  title: string;
  image: string;
  summary: string;
}

export interface TechnicalSkill {
  description: string;
  skill: number;
  subname:string;
}

export interface Education {
  schoolName: string;
  degree: string;
  major: string;
}

export interface WorkExperience {
  companyName: string;
  position: string;
  duration: string;
  description: string;
}

export interface Project {
  projectName: string;
  description: string;
  technologies: string;
  demoLink: string;
  achievements: string;
}

export interface AwardCertificate {
  name: string;
  issuedBy: string;
  year: string;
}

export interface PublicationTalk {
  title: string;
  link: string;
}

export interface Contact {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface FormData {
  profile: Profile;
  technicalSkills: TechnicalSkill[];
  education: Education[];
  workExperience: WorkExperience[];
  projects: Project[];
  awardsCertificates: AwardCertificate[];
  publicationsTalks: PublicationTalk[];
  contact: Contact;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
