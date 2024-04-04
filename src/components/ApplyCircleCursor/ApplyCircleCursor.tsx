import "./style.css";
import applyText from "@/assets/apply-text.svg";
import Image from 'next/image';
import Link from "next/link";
import { useState } from "react";

export const ApplyCircleCursor = () => {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
            e.preventDefault();
            window.open("https://docs.google.com/forms/d/e/1FAIpQLScf02TNYT3CF0XrXDI0jOz17yYFbTBp-2TncXRzOh9qeG4BpA/viewform", "_blank");
    };
    return (
            <div className="cursor absolute" onClick={handleClick}>
                <div className={`flex justify-center items-center ball`}>
                    <div className="insideText">
                        <Image src={applyText} alt="Apply" width={66} height={63} />
                    </div>
                </div>
            </div>
    )
}