import { useState } from "react";

interface SoundOnProps {
  isOn: boolean;
}

export const SoundOn = ({ isOn }: SoundOnProps) => !isOn ? (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 8.5V15.5M16.5 5.5V18.5M3 8.5V15.5M21 9V15M7.5 2V22"
      stroke="#022D22"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
) : (
  (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="#022D22" strokeWidth="2" strokeLinecap="round">
        <path d="M12 8.5V15.5">
          <animate
            attributeName="d"
            attributeType="XML"
            from="M12 8.5V15.5"
            to="M12 5V19"
            dur="1s"
            repeatCount="indefinite"
            begin="0s"
          />
        </path>
        <path d="M16.5 5.5V18.5">
          <animate
            attributeName="d"
            attributeType="XML"
            values="M16.5 5.5V18.5; M16.5 2V22; M16.5 5.5V18.5"
            dur="1s"
            repeatCount="indefinite"
            begin="0.25s"
          />
        </path>
        <path d="M3 8.5V15.5">
          <animate
            attributeName="d"
            attributeType="XML"
            values="M3 8.5V15.5; M3 5V19; M3 8.5V15.5"
            dur="1s"
            repeatCount="indefinite"
            begin="0.5s"
          />
        </path>
        <path d="M21 9V15">
          <animate
            attributeName="d"
            attributeType="XML"
            values="M21 9V15; M21 6V18; M21 9V15"
            dur="1s"
            repeatCount="indefinite"
            begin="0.75s"
          />
        </path>
        <path d="M7.5 2V22">
          <animate
            attributeName="d"
            attributeType="XML"
            values="M7.5 2V22; M7.5 3V21; M7.5 2V22"
            dur="1s"
            repeatCount="indefinite"
            begin="1s"
          />
        </path>
      </g>
    </svg>
  )
);

export default SoundOn;
