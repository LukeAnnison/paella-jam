import { useState, useEffect } from "react";

import styles from "../../styles/Home.module.css";

interface Props {
  chapter: number;
  chapterInstance: number;
  seek: (progress: number) => void;
  setChapter: (chapterInstance: number) => void;
}

const descriptionContent = {
  1: "I said we're all God's children, products of the ghetto, Momma cooked the soup, daddy did the yelling",
  2: "Survival of the fittest, this poor girl the illest,  Broke mirrors and black cats give me heebie-geebies",
  3: "Oh, oh, oh, oh, Oh, oh, oh, oh, Sing yeah, yeah, yeah, yeah, Sing yeah, yeah, yeah, yeah"
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
