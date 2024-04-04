import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./style.css";

const carouselItems = [
    "ukulele",
    "poke",
    "cocktails",
    "chill",
    "relaxation",
    "calmness",
    "ecology",
    "nature",
    "honolulu",
];

export const BannerCarousel = () => {
    return (
        <div id="carousel" className="bannerCarousel">
            <div className="carousel">
                {carouselItems.map((item, index) => (
                    <div key={index} className="carouselItem">
                        <p className="heading4">
                            {item}
                        </p>
                    </div>
                ))}
            </div>
            <div className="carousel">
                {carouselItems.map((item, index) => (
                    <div key={index} className="carouselItem">
                        <p className="heading4">
                            {item}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
};