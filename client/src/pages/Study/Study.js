import React, { useState } from "react";
import Deck from "../../components/Deck/Deck";
import styles from "./Study.module.css";
import { useDispatch } from "react-redux";
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBBtn,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { createDeck } from "../../actions/Deck";

const DUMMY_ARRAY = [
  {
    id: 1,
    name: "LeetCode",
    count: 25,
  },
  {
    id: 2,
    name: "Geography",
    count: 39,
  },
  {
    id: 3,
    name: "English",
    count: 110,
  },
  {
    id: 4,
    name: "React",
    count: 59,
  },
  {
    id: 5,
    name: "JavaScript",
    count: 35,
  },
];

const Study = () => {
  const [collection, setCollection] = useState(DUMMY_ARRAY);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [deckName, setDeckName] = useState("");

  const toggleShow = () => {
    setShowModal((state) => !state);
  };

  const handleDeckName = (e) => {
    setDeckName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createDeck(deckName));
  };
  const onDelete = (deckid) => {
    const newCollection = collection.filter((deck) => deck.id !== deckid);
    setCollection(newCollection);
  };
  return (
    <div className={styles.study}>
      <div className={styles.deckContainer}>
        {collection.map((deck) => (
          <Deck
            name={deck.name}
            key={deck.id}
            count={deck.count}
            onDelete={onDelete}
            id={deck.id}
          />
        ))}
        <div className={styles.card}>
          <BsFillPlusCircleFill
            style={{
              fontSize: "3rem",
              cursor: "pointer",
              color: "var(--text-primary)",
            }}
            onClick={toggleShow}
          />
        </div>
      </div>
      <MDBModal show={showModal} setShow={setShowModal} tabIndex="-1">
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Give Deck Heading</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>

            <MDBModalBody>
              <MDBValidation>
                <MDBValidationItem required feedback="Invalid Input">
                  <MDBInput
                    label="Deck Heading"
                    id="validationCustom01"
                    required
                    value={deckName}
                    onChange={handleDeckName}
                  />
                </MDBValidationItem>
              </MDBValidation>
            </MDBModalBody>

            <MDBBtn
              onClick={handleSubmit}
              style={{ backgroundColor: "var(--accent)" }}
            >
              Save changes
            </MDBBtn>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
};

export default Study;
