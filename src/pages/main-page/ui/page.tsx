'use client';

import "@/app/styles/globals.scss";
import MainSlider from "@features/sliders/main-slider";
import Heading from "@shared/ui/heading/heading";
import Layout from "@widgets/layout/ui/layout";
import Messengers from "@widgets/messengers/ui/messengers";
import { useRef } from "react";
import { VscFoldDown } from "react-icons/vsc";
import OurValues from "./our-values";
import AskUs from "./ask-us";
import ProjectShowcase from "./project-showcase";
import ClientPartners from "./client-wrap";
import SomeFacts from "./some-facts-and-figures";

const MainPage = () => {
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const scrollNextBlock = () => galleryRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Layout>
      {/* <HeadComponent text="Главная" /> */}
        <Heading text="Кто я" />
        <div className="relative h-full">
          <img 
            src="/main.jpg"
            alt="Main picture"
          />
          <div  
            onClick={scrollNextBlock}  
            className="absolute cursor-pointer bottom-20 left-1/2 flex flex-col items-center text-white">
          <VscFoldDown className=" text-5xl" />
          <span className="text-lg">Далее</span>
          </div>
        </div>
        <div ref={galleryRef}>
          <Heading text="Фотогаллерея" />
          <MainSlider />
        </div>
        <OurValues />
        <AskUs />
        <ProjectShowcase />
        <ClientPartners />
        <SomeFacts />

        <Messengers />
      </Layout>
    </>
  );
}
export default MainPage