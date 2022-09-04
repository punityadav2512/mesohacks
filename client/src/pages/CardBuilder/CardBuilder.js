import React from 'react'
import styles from "./CardBuilder.module.css";
import { MDBInput, MDBTextArea, MDBFile } from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { createCard } from '../../actions/card';




function CardBuilder() {

  const [formValues, setFormValues] = React.useState({
    question: '',
    qdescription: '',
    qimage: '',

    answer: '',
    adescription: '',
    aimage: '',
  });

  const dispatch = useDispatch();



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCard(formValues))
    
  };


  return (
    <>
      <div className={styles.card}>
        <span className={styles.deckHeading}>Deck heading</span>
        <div className={styles.builder}>

          <div className={styles.questionc}>
            <span className={styles.question}>Question Heading:</span>
            <MDBInput
              label='Text input'
              name='question'
              id='typeText'
              type='text'
              size='lg'
              onChange={handleChange}
            />
          </div>

          <div className={styles.qdescc}>
            <span className={styles.qdesc}>Question Description:</span>
            <MDBTextArea
              label='Message'
              name='qdescription'
              id='textAreaExample'
              rows={6}
              onChange={handleChange}
            />
          </div>

          <div className={styles.qimagec}>
            <span className={styles.qimage}>Question Image:</span>
            <MDBFile
              id='customFile'
              name='qimage'
              value={formValues.qimage}
              size='lg'
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.builder}>

          <div className={styles.questionc}>
            <span className={styles.question}>Solution Heading:</span>
            <MDBInput
              label='Text input'
              name='answer'
              id='typeText'
              type='text'
              size='lg'
              value={formValues.answer}
              onChange={handleChange}
            />
          </div>

          <div className={styles.qdescc}>
            <span className={styles.qdesc}>Solution Description:</span>
            <MDBTextArea
              label='Message'
              name='adescription'
              id='textAreaExample'
              rows={6}
              value={formValues.adescription}
              onChange={handleChange}
            />
          </div>

          <div className={styles.qimagec}>
            <span className={styles.qimage}>Solution Image:</span>
            <MDBFile
              id='customFile'
              name='aimage'
              size='lg'
              value={formValues.aimage}
              onChange={handleChange}
            />
          </div>
        </div>

        <button className={styles.done} onClick={handleSubmit}>
          Add Card
        </button>
      </div>
    </>
  )
}

export default CardBuilder