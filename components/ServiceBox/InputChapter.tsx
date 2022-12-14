import styles from "../../styles/Home.module.css";

interface Chapter {
  step: number;
  input: {
    [key: number]: string
  };
}

interface Props {
  chapter: number;
  handleChange: (e: any) => void;
  handleNext: () => void;
  handlePrev: () => void;
  handleSubmit: () => void;
  chapters: Chapter[];
}

export const InputChapter = ({
  chapter,
  handlePrev,
  handleNext,
  chapters,
  handleChange,
}: Props) => {
  return (
    <div className={styles.sideBar}>
      <h3>Chapter {chapter}</h3>
      <h3>Step {chapters[chapter].step}</h3>
      {chapters[chapter].step > 1 && (
      <button onClick={handlePrev}>Back</button>
      )}
      <input
        type="text"
        name={chapters[chapter].step}
        value={chapters[chapter].input[chapters[chapter].step]}
        onChange={handleChange}
      />
      <button
        disabled={chapters[chapter].input[chapters[chapter].step] === ""}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};
