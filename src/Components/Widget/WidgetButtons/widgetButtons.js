import React from "react";
import styles from "./widgetButtons.module.css";

const WidgetButtons = ({ updateStatistic }) => {
  return (
    <div>
      <button className={styles.button} name="good" onClick={updateStatistic}>
        Good
      </button>
      <button
        className={styles.button}
        name="neutral"
        onClick={updateStatistic}
      >
        Neutral
      </button>
      <button className={styles.button} name="bad" onClick={updateStatistic}>
        Bad
      </button>
    </div>
  );
};

export default WidgetButtons;
