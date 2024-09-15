"use client";
import { FC, useState } from "react";
import { PortfolioTemplate } from "../interfaces";
import Image from "next/image";
import ProfileForm from "@/components/portfolio-form";
import Modal from "@/components/modal";

const PorfolioTemplate: FC = () => {
  const portfolioData: Array<PortfolioTemplate> = [
    {
      background: "/assets/images/portfolio-template.jpg",
      name: "Software Engineer",
      description:
        "A sleek and modern Software Portfolio template designed to showcase your projects, skills, and experience. This template features a clean layout, responsive design, and easy customization options. Perfect for developers, engineers, and IT professionals looking to create an impressive online presence.",
      active: true,
    },
    {
      background: "/assets/images/hse.jpg",
      name: "Coming Soon...",
      description: "Stay tuned for more portfolio templates!",
      active: false,
    },
    {
      background: "/assets/images/marketing.jpg",
      name: "Coming Soon...",
      description: "Stay tuned for more portfolio templates!",
      active: false,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {portfolioData.map((item, index) => (
          <div
            className="w-full h-full bg-white rounded-lg border-2 border-orange-500"
            key={index}
          >
            <div className="w-full h-56">
              <Image
                src={item.background}
                width={500}
                height={500}
                alt="Picture of the author"
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div className="p-5 border-t-2 border-orange-500">
              <h2 className="font-bold text-left text-lg md:text-2xl xl:text-3xl text-orange-600">
                {item.name}
              </h2>
              <p className="my-5 text-black">{item.description}</p>

              {item.active && (
                <button
                  onClick={openModal}
                  className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-700"
                >
                  Getting Started
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h1 className="text-xl font-bold mb-4">Update Porfolio</h1>
        <ProfileForm />
      </Modal>
    </>
  );
};

export default PorfolioTemplate;
