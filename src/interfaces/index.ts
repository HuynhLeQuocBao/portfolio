import { ReactNode } from "react";

// types.ts
export interface PortfolioTemplate {
  background: string;
  name: string;
  description: string;
  active: boolean;
}

export interface Profile {
  name: string;
  image: string;
  bio: string;
}

export interface TechnicalSkill {
  description: string;
  title: string;
}

export interface IEducation {
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
  technologies: string;
  demoLink: string;
  image: string;
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

export interface MyFormData {
  portfolioId: string;
  profile: Profile;
  technicalSkills: TechnicalSkill[];
  education: IEducation[];
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
