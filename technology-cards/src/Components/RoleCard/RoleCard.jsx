import React from "react";
import styles from "./RoleCard.module.css";

const RoleCard = ({ card }) => {
  return (
    <div
      style={{ borderTop: `6px solid ${card?.borderColor}` }}
      className={styles.cardCon}
    >
      <h1>{card?.Role}</h1>
      <p>{card?.about}</p>
      <img src={card?.icon} />
    </div>
  );
};

export default RoleCard;
