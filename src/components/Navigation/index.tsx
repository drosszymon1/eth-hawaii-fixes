"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Logo from "@/assets/logo.svg";
import "./style.css";
import Image from "next/image";
import { PrimaryButton } from "../Button";
import SoundOn from "../icons/sound-on";


export const Navigation = () => {
  const [isOn, setIsOn] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  const handleOpenModal = () => {
    const applySection = document.getElementById("ticket-button");
    applySection?.click();
  }

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    const iframe = iframeRef.current;
    if (audio) {
      if (isOn) {
        audio.volume = 0.25;
        audio.play();
      } else {
        audio.volume = 0.25;
        audio.pause();
      }
    }
  }, [isOn]);

  useEffect(() => {
    setIsRendered(true);

    const timer = setTimeout(() => {
      const audio = audioRef.current;
      if (audio) {
        setIsOn(true);
        audio.volume = 0.25;
        audio.play();
        audio.loop = true;
        audio.muted = false;
        document.body.click();
      }
    }, 3000)

    return () => clearTimeout(timer);

  }, [iframeRef.current]);

  return (
    <nav className="container mx-auto navigation">
      <div className="logo-container">
        <figure>
          <Image src={Logo} alt="Logo" width={21.6} height={48} />
        </figure>
        <span className="divider"></span>
        <div className="logo-details">
          <p className="title">OAHU, HAWAII</p>
          <p className="subtitle">Q4 2024</p>
        </div>
      </div>
      {isRendered ? (

          <audio ref={audioRef} id="myAudio" className="hidden" autoPlay loop muted>
            <source src="/hawaii.mp3" type="audio/mpeg" />
          </audio>

      ) : null
      }
      <div className="button-group">
        <PrimaryButton id="audio-button" className="footer-circle-button" variant="secondary" onlyIcon onClick={() => setIsOn(!isOn)}>
          <SoundOn isOn={isOn} />
        </PrimaryButton>
        <PrimaryButton className="ticket-btn" onClick={handleOpenModal}>Get tickets</PrimaryButton>
      </div>
    </nav>
  );
};

export default Navigation;
