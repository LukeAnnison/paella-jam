import styles from "../../styles/Home.module.css";

interface Chapter {
  step: number;
  input: {
    [key: number]: string;
  };
}

interface Props {
  chapter: number;
  handleChange: (e: any) => void;
  handleNext: () => void;
  handlePrev: () => void;
  chapters: any;
}

export const InputChapter = ({
  chapter,
  handlePrev,
  handleNext,
  chapters,
  handleChange,
}: Props) => {
  return (
    <div className={styles.inputChapter}>
      <h3 className={styles.inputHeader}>Chapter {chapter}</h3>
      <h4 className={styles.inputHeader}>Step {chapters[chapter].step}</h4>
      <button
        disabled={chapters[chapter].step === 1}
        className={styles.inputButton}
        onClick={handlePrev}
      >
        Back
      </button>
      <div className={styles.formGroup}>
        <input
          type="text"
          placeholder="Input"
          className={styles.inputForm}
          name={chapters[chapter].step}
          value={chapters[chapter].input[chapters[chapter].step]}
          onChange={handleChange}
        />
      </div>
      <button
        disabled={chapters[chapter].input[chapters[chapter].step] === ""}
        onClick={handleNext}
        className={styles.inputButton}
      >
        Next
      </button>
    </div>
  );
};
