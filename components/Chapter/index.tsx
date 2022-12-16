import { useState, useEffect } from "react";

import styles from "../../styles/Home.module.css";

interface Props {
  chapter: number;
  chapterInstance: number;
  seek: (progress: number) => void;
  setChapter: (chapterInstance: number) => void;
}

const descriptionContent = {
  1: "This is the first chapter of the first instance of the first chapter",
  2: "This is the second chapter of the first instance of the first chapter",
  3: "This is the third chapter of the first instance of the first chapter",
};

export default function Chapter({
  chapter,
  chapterInstance,
  seek,
  setChapter,
}: Props) {
const [description, setDescription] = useState("");

  const handleClick = () => {
    setChapter(chapterInstance);
    if (chapterInstance === 1) {
      seek(0);
    } else {
      seek(chapterInstance * 40);
      console.log({ chapterInstance });
    }
  };

  useEffect(() => {
    switch (chapterInstance) {
      case 1:
        setDescription(descriptionContent[1]);
        break;
        case 2:
        setDescription(descriptionContent[2]);
        break;
        case 3:
        setDescription(descriptionContent[3]);
        break;
        default:
        setDescription(descriptionContent[1]);
    }
  }, []);

  return (
    <div
      onClick={handleClick}
      className={chapter === chapterInstance ? styles.chapterActive : styles.chapter}
    >
      <div className={styles.chapterText}>
        <h3 className={styles.chapterNumber}>Chapter {chapterInstance} &rarr;</h3>
        <p className={styles.chapterDescription}>{description}</p>
      </div>
    </div>
  );
}
