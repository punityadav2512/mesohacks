import React from "react";
import styles from "./Deck.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteDeck } from "../../actions/Deck";
// import { DELETEDECK } from "../../constants/actionTypes";

const Deck = ({ name, count, onDelete, id }) => {
  const dispatch = useDispatch();

  const handelDelete = (e) => {
    e.preventDefault();
    //Temporary Code
    onDelete(id);
    //Proper Code
    // dispatch(deleteDeck());
  };

  return (
    <div className={styles.deck}>
      <h3 className={styles.heading} style={{ cursor: "pointer" }}>
        {name}
      </h3>

      <div className={styles.functions}>
        <Link to="/card-builder">
          <AiOutlinePlus
            style={{ fontSize: "2rem", cursor: "pointer", color: "#333" }}
          />
        </Link>
        <div className={styles.countCard}>
          <p className={styles.count}>{count}</p>
          <p className={styles.text}>Cards</p>
        </div>
        <RiDeleteBin6Line
          onClick={handelDelete}
          style={{ fontSize: "2rem", cursor: "pointer" }}
        />
      </div>
      <div className={styles.btn}>
        <Link
          to="/qa"
          style={{
            textDecoration: "none",
            width: "80%",
          }}
        >
          <button className={styles.start}>Start</button>
        </Link>
      </div>
    </div>
  );
};

export default Deck;
