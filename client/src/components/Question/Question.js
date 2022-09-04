import React from 'react'
import styles from "./Question.module.css";

function Question(props) {

  const handleClick = () => {
    props.setQa(false);
  }

  return (
    <div className={styles.card}>
      <span className={styles.deckHeading}>{props.heading}</span>
      <span className={styles.ques}>{props.question}</span>
      <div className={styles.content}>
        <div className={styles.text}>
          {props.qdesc}
        </div>
        <div className={styles.image}>
          <img src={props.imgpath} alt="Question pic" />
        </div>
      </div>
      <button className={styles.showans} onClick={handleClick}>
        Show Answer
      </button>
    </div>
  )
}

export default Question