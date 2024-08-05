import React from "react";
import styles from "./index.module.css";
import RoleCard from "../RoleCard/RoleCard";

const TechnologyCards = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.techMainCon}>
        <h1 className={styles.techMainConHead}>Learn 4.0 Technologies</h1>
        <p className={styles.techMainConPara}>
          Get trained by alumni of IITs and top companies like Amazon, Flipkart,
          Microsoft, Intel, Nvidia, Qualcomn etc. Learn directly from
          professionals involved in Product Development.
        </p>
        <div className={styles.cardsWrapper}>
          {cardsData.map((card, index) => {
            return <RoleCard card={card} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TechnologyCards;

const cardsData = [
  {
    id: 1,
    Role: "Data Scientist",
    about:
      "Data Scientists gather and analyze large sets of structured and unstructured data",
    borderColor: "#ff4f64",
    icon: "https://cdn3.iconfinder.com/data/icons/big-data-57/64/data-scientist-analyst-expert-programmer-1024.png",
  },
  {
    id: 2,
    Role: "IoT Developer",
    about:
      "IoT Developers are professionals who can develop, manage and monitor IoT Devices.",
    borderColor: "#00a8e7",
    icon: "https://cdn.vectorstock.com/i/1000v/49/64/iot-development-icon-concept-smart-cloud-vector-28974964.jpg",
  },
  {
    id: 3,
    Role: "VR Developer",
    about:
      "A VR developer creates completely new digital environments that people can see",
    borderColor: "#44c4a1",
    icon: "https://www.clipartkey.com/mpngs/m/300-3001409_graphic-ar-vr-game-development-ar-vr-technology.png",
  },
  {
    id: 4,
    Role: "ML Engineer",
    about:
      "Machine learning engineers feed data into models defined by data scientists.",
    borderColor: "#fcc200",
    icon: "https://static.vecteezy.com/system/resources/previews/013/899/429/original/machine-learning-icon-artificial-intelligence-smart-machine-logo-template-illustration-free-vector.jpg",
  },
];
