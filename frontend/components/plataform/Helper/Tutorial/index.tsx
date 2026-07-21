"use client";

import { useState } from "react";
import BtnG from "../../BtnG";
import styles from "./Tutorial.module.scss";

interface IBtns {
  text: string;
  step: number;
}

const Tutorial = () => {
  const [step, setStep] = useState(1);

  const btns: IBtns[] = [
    { text: "Primeiros Passos", step: 1 },
    { text: "Features", step: 2 },
    { text: "Campanha", step: 3 },
  ];

  const embeds = [
    {
      step: 1,
      src: "ac9dc7bb-9818-4854-82e3-c641addf7375",
    },
    {
      step: 2,
      src: "ffb54da3-81dd-408d-9e89-9f2f06656822",
    },
    {
      step: 3,
      src: "bc0abb49-0948-4ca4-8829-9c491a66394e",
    },
  ];

  const currentEmbed = embeds.find((embed) => embed.step === step);
  const iframeName = currentEmbed
    ? `{"campaign": "${currentEmbed.src}"}`
    : undefined;

  return (
    <div className={styles.tutorial}>
      <div className={styles.btns}>
        {btns.map((btn) => (
          <div key={btn.step} className={styles.btn}>
            <BtnG
              text={btn.text}
              goClick={() => setStep(btn.step)}
              disabled={step === btn.step}
            />
          </div>
        ))}
      </div>

      <div className={styles.videoContainer}>
        {currentEmbed && (
          <div className={styles.tutorialVideo}>
            <iframe
              key={currentEmbed.src}
              src="https://api.interactiplay.com.br/widget/index.html"
              name={iframeName}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                overflow: "hidden",
                display: "block",
              }}
              scrolling="no"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tutorial;
