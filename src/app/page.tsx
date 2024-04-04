"use client"

import { PrimaryButton } from "@/components/Button";
import HeadBackground from "../components/HeadBackground";
import { BannerCarousel } from "@/components/BannerCarousel/BannerCarousel";
import { SponsorCircle } from "@/components/SponsorsCircle/SponsorsCircle";
import Logo from "@/assets/logo.svg";
import LogoText from "@/assets/logo-text.svg";
import ShellLogo from "@/assets/shell-footer-logo.svg";
import Arrow from "@/assets/arrow.svg";
import "./sponsors.css";
import "./apply.css";
import { SponsorsBackground } from "@/components/SponsorsBackground/SponsorsBackground";
import { ApplyBackground } from "@/components/ApplyBackground/ApplyBackground";
import Image from "next/image";
import Discord from "@/components/icons/discord";
import TwitterX from "@/components/icons/twitter-x";
import Telegram from "@/components/icons/telegram";
import { useState } from "react";
import Modal from "@/components/Modal/Modal";
import { ButtonArrow } from "@/components/icons/ButtonArrow";
import applyText from "@/assets/apply-text.svg";
import smallSubtitleIcon from "@/assets/small-subtitle-icon.svg";
import Link from "next/link";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onHandleOpenModal = () => {
    console.log("open modal");
    setIsModalOpen(true);
  };

  const onHandleCloseModal = () => {
    const modal = document.getElementById("modal");
    const modalBg = document.getElementById("modal-bg");
    modal?.classList.remove("open");
    modal?.classList.add("close");
    modalBg?.classList.remove("open");
    modalBg?.classList.add("close");

    setTimeout(() => {
      setIsModalOpen(false);
    }, 500);
  };

  return (
    <main>
      <div id="first-section" className="first-section">
        <section className="container mx-auto h-fit">
          <div className="head-section lg:w-min">
            <div className="pin-banner">
              <div className="lg:mb-6 lg:w-min custom-container text-in-banner">
                <div className="mt-24 md:mt-36 flex justify-start items-center gap-3 pb-2">
                  <Image className="hidden md:block" src={smallSubtitleIcon} alt="Logo" width={24} height={24} />
                  <p className="title2">The most fun ETH event & Hackathon</p>
                </div>
                <h1 className="heading1 mt-4 md:mt-5 ">
                  ETH
                  <br />
                  HAWAII
                </h1>
                <div className="flex flex-col xl:flex-row justify-between items-center gap-8 lg:gap-36 mt-1 w-full">
                  <p className="bannerDesc text-wrap body1 lg:max-w-[400px]">
                    Conference no one wants to miss. ETH event in paradise. Suits are forbidden. Necktie free event.
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="w-full lg:hidden">
                      <PrimaryButton className="w-full" variant="primary" onClick={onHandleOpenModal}>Buy ticket</PrimaryButton>
                    </div>
                    <div className="flex justify-end items-center gap-4 banner-button">
                      <Link href="https://docs.google.com/forms/d/e/1FAIpQLScf02TNYT3CF0XrXDI0jOz17yYFbTBp-2TncXRzOh9qeG4BpA/viewform" target="_blank">
                        <PrimaryButton variant="secondary">
                          Apply as speaker
                          <div className="button-mark rounded-[50%]">
                            <ButtonArrow />
                          </div>
                        </PrimaryButton>
                      </Link>
                      <Link href="https://docs.google.com/forms/d/e/1FAIpQLScf02TNYT3CF0XrXDI0jOz17yYFbTBp-2TncXRzOh9qeG4BpA/viewform" target="_blank">
                        <PrimaryButton variant="secondary">
                          Apply as sponsor
                          <div className="button-mark rounded-[50%]">
                            <ButtonArrow />
                          </div>
                        </PrimaryButton>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <BannerCarousel />
            </div>
            <div id="spacer" />
          </div>
        </section>
        <HeadBackground />
      </div>
      <section id="sponsors" className="sponsors relative" style={{willChange: "transform"}}>
        <SponsorsBackground />
        <div className="container mx-auto">
          <div className="flex flex-col w-full justify-between items-center sponsors-wrapper">
            <h2 className="heading2 light-text">Sponsors</h2>
            <div className="flex lg:flex-col justify-center items-center">
              <div className="flex flex-col lg:flex-row justify-center items-center">
                <SponsorCircle active />
                <SponsorCircle />
                <SponsorCircle />
                <SponsorCircle className="hidden lg:flex" />
              </div>
              <div className="flex flex-col lg:flex-row justify-center items-center">
                <SponsorCircle />
                <SponsorCircle />
                <SponsorCircle />
                <SponsorCircle className="hidden lg:flex" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="apply" className="apply relative" style={{willChange: "transform", cursor: "none"}}>
        <ApplyBackground />
        <div className="w-full h-[calc(100dvh +100px)]" style={{cursor: "none"}}>
          <div className="flex flex-col justify-start items-start container custom-container mx-auto apply-text">
            <h1 className="heading2 ml-0 px-0">APPLY AS SPONSOR</h1>
            <h2 className="heading2 apply-text-light ml-0 px-0">AND HELP US RENT</h2>
            <h2 className="heading2 apply-text-light ml-0 px-0">MORE SURFBOARDS!</h2>
            <p className="title1 apply-text-light mt-4 ml-0 px-0">PS. Your own palm tree is waiting for you!</p>
          </div>
        </div>
        <div id="spacer2" style={{cursor: "none"}} />
        <div className="w-full" id="mobile-circle">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScf02TNYT3CF0XrXDI0jOz17yYFbTBp-2TncXRzOh9qeG4BpA/viewform" target="_blank" style={{zIndex: 99999}}>
            <div style={{ willChange: "transform" }} className="mobile-circle ball flex justify-center items-center">
              <div className="insideText" style={{ willChange: "transform" }}>
                <Image src={applyText} style={{ willChange: "transform" }} alt="Apply" width={66} height={63} />
              </div>
            </div>
          </Link>
        </div>
      </section>
      <footer id="footer" className="footer relative" style={{willChange: "transform"}}>
        <div className="h-full w-full flex flex-col justify-start items-start custom-container container mx-auto gap-10 md:gap-24">
          <div className="w-full flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0">
            <div className="flex justify-end flex-col items-start gap-6 max-w-[310px]">
              <div className="flex justify-start items-center gap-2">
                <figure>
                  <Image src={Logo} alt="Logo" width={18} height={40} />
                </figure>
                <figure>
                  <Image src={LogoText} alt="Logo" width={170} height={18.52} />
                </figure>
              </div>
              <p className="caption1">Grab your surfboard and come to the most fun ETH event & Hackathon ever.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-start gap-5 md:gap-24">
              <div id="ticket-button" className="cursor-pointer" onClick={onHandleOpenModal}>
                <p id="call-to-action-ticket" className="body1 link-external">Get tickets</p>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex justify-start items-center gap-2 cursor-pointer">
                  <Link target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScf02TNYT3CF0XrXDI0jOz17yYFbTBp-2TncXRzOh9qeG4BpA/viewform" className="link-external">
                    <p className="body1">Apply to speak</p>
                  </Link>
                  <figure>
                    <Image src={Arrow} alt="Arrow" width={16} height={16} />
                  </figure>
                </div>
                <div className="flex justify-start items-center gap-2 cursor-pointer">
                  <Link target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScf02TNYT3CF0XrXDI0jOz17yYFbTBp-2TncXRzOh9qeG4BpA/viewform" className="link-external">
                    <p className="body1">Apply to sponsor</p>
                  </Link>
                  <figure>
                    <Image src={Arrow} alt="Arrow" width={16} height={16} />
                  </figure>
                </div>
              </div>
              <div>
                <div className="flex justify-start items-center gap-2 cursor-pointer">
                  <Link target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScf02TNYT3CF0XrXDI0jOz17yYFbTBp-2TncXRzOh9qeG4BpA/viewform" className="link-external">
                    <p className="body1">
                      Contact us
                    </p>
                  </Link>
                  <figure>
                    <Image src={Arrow} alt="Arrow" width={16} height={16} />
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-6 md:gap-0">
            <div className="flex justify-start items-center gap-2">
              <p className="caption1">Powered by</p>
              <figure>
                <Image src={ShellLogo} alt="Shell Logo" width={113.86} height={24} />
              </figure>
            </div>
            <div className="flex justify-end items-center gap-5">
              <PrimaryButton variant="secondary" onlyIcon className="footer-circle-button">
                <Discord />
              </PrimaryButton>
              <PrimaryButton variant="secondary" onlyIcon className="footer-circle-button">
                <TwitterX />
              </PrimaryButton>
              <PrimaryButton variant="secondary" onlyIcon className="footer-circle-button">
                <Telegram />
              </PrimaryButton>
            </div>
          </div>
        </div>
      </footer>
      <div id="spacer3" />
      <Modal isOpen={isModalOpen} closeModal={onHandleCloseModal} />
    </main>

  );
}
