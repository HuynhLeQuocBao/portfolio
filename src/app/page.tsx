"use client";
import Modal from "@/components/modal";
import ProfileForm from "@/components/portfolio-form";
import { FC, useState } from 'react';
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <main className="w-full h-full flex main-background">
      <div className="w-1/6 h-screen border-r-2 border-violet-800"></div>
      <div className="w-5/6 h-screen"><button
        onClick={openModal}
        className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
      >
        Open Form
      </button></div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h1 className="text-xl font-bold mb-4">Update Profile</h1>
        <ProfileForm />
      </Modal>
    
    </main>
  );
}
