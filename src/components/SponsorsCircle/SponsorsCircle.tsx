import "./style.css";
import Image from 'next/image';
import shellLogo from "@/assets/shell-logo.svg";
import shellIcon from "@/assets/shell-icon.svg";
import shellSmallLogo from "@/assets/shell-small-logo.svg";
import shellSmallIcon from "@/assets/shell-small-icon.svg";
import allohaBorder from "@/assets/aloha-big-border.svg";
import allohaMobileBorder from "@/assets/aloha-mobile-round.svg";

interface SponsorCircleProps {
    active?: boolean;
    className?: string;
}

export const SponsorCircle = ({ active, className }: SponsorCircleProps) => {
    return (
        <div className={`flex justify-center items-center circle-box flex-4 ${active ? "active" : "inactive"} relative ${className}`}>
            {active ? (
                <div className="flex justify-center items-center gap-[13px]">
                    <Image src={shellIcon} className="desktop-icon" alt="Shell Icon" width={34} height={44} />
                    <Image src={shellLogo} className="desktop-logo" alt="Shell Logo" width={161} height={20} />
                    <Image src={shellSmallIcon} className="mobile-icon" alt="Shell Icon" width={21.85} height={28.18} />
                    <Image src={shellSmallLogo} className="mobile-logo" alt="Shell Logo" width={103.3} height={12.69} />
                </div>
            ) : (
                <>
                    <Image className="absolute desktop-aloha" src={allohaBorder} alt="Shell Icon" width={234} height={246} />
                    <Image className="absolute mobile-aloha" src={allohaMobileBorder} alt="Shell Icon" width={150.26} height={157.87} />
                    <div className="flex justify-center items-center">
                        <div className="absolute">
                        </div>
                        <p className="heading4 active-text">TBA</p>
                    </div>
                </>
            )}
        </div>
    )
}