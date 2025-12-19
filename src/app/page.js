"use client"
import { useState } from "react";
import Hero from "./components/Hero";
import ModalSelectCard from "./components/ModalSelectCard";
import Section1 from "./components/Section1";
import Section3 from "./components/Section3";


export default function Home() {
  const [isModalSelectCardOpen, setIsModalSelectCardOpen] = useState(false);
  return (
    <div className="bg-[#0A0A0A]">
      <Hero />
      <Section1 setIsModalSelectCardOpen={setIsModalSelectCardOpen} />
      <Section3 />

      {isModalSelectCardOpen && (<ModalSelectCard setIsModalSelectCardOpen={setIsModalSelectCardOpen} />)
      }
    </div>
  );
}
