import { useState, useEffect, useRef } from "react";

import styles from "../../styles/Home.module.css";

interface Props {
  chapter: number;
  chapterInstance: number;
  seek: (progress: number) => void;
  setChapter: (chapterInstance: number) => void;
  time: {
    currentTime: number;
    duration: number;
  };
}

const descriptionContent = {
  1: "I said we're all God's children, products of the ghetto, Momma cooked the soup, daddy did the yelling, Uncle was a drunk, cousin was a felon, When he got pinched, he told them he wasn't tellin', Auntie was a cook, her husband was a crook, Cause every job he had they be payin' him off the books, Ghetto University, knowledge is all it took, In the tenement I was listenin' to the hook, Change gon' come, the spirit of Sam Cooke, When the Feds coming, everybody be shook, Now we doing life like Eddie Murphy and Martin, On the chain gang, I was singing into the coffin, The roaches and the rats, heroin and the crasp, Couldn't blame me, I'm just giving the facts, Tryna hit the top, the bottom ain't where it's at, Everybody got a path but you could never go back, Oh, oh, oh, oh, Oh, oh, oh, oh, Sing yeah, yeah, yeah, yeah, Sing yeah, yeah, yeah, yeah, Sing yeah, yeah, yeah, yeah, Sing yeah, yeah, yeah, yeah, I'm telling you like it is, how we ever gon' live? If we ain't gettin' money, how we feedin' the kids?, It's a revolving door, when brothers be doing bids, I know it sound wrong but the dope'll be what it is",
  2: "Survival of the fittest, this poor girl the illest,  Broke mirrors and black cats give me heebie-geebies, Life seems hard, nothing ever comes easy, Whatever's in the dark, won't always become the light, If you ain't in a battle, how you gon' win the fight?, Gotta speak the truth when I'm up in the booth, The streets be flyin' birds but they don't be on the roof, Poverty is a pain like you pulling a tooth, Told the streets don't let me go like I'm bishop and juice, The roaches and the rats, heroin and the cracks, Couldn't blame me, I'm just giving the facts, Tryna hit the top, the bottom ain't where it's at, Everybody got a path but you could never go back, Oh, oh, oh, oh, Oh, oh, oh, oh, Sing yeah, yeah, yeah, yeah, Sing yeah, yeah, yeah, yeah, Sing yeah, yeah, yeah, yeah, Sing yeah, yeah, yeah, yeah",
  3: "Oh, oh, oh, oh, Oh, oh, oh, oh, Sing yeah, yeah, yeah, yeah, Sing yeah, yeah, yeah, yeah, (Sing), Yeah, yeah, yeah, yeah, Yeah, yeah, yeah, yeah, (Gotta sing), Yeah, yeah, yeah, yeah, Yeah, yeah, yeah, yeah, (She's a king), Yeah, yeah, yeah, yeah (yeah), Yeah, yeah, yeah, yeah (yeah), And they sing New York City, Yeah, yeah, yeah, yeah, Yeah, yeah, yeah, yeah, Yeah, yeah, yeah, yeah, Yeah, yeah, yeah, yeah, Yeah, yeah, yeah, yeah, Yeah, yeah, yeah, yeah",
};

export default function Chapter({
  chapter,
  chapterInstance,
  seek,
  setChapter,
  time,
}: Props) {
  const [description, setDescription] = useState("");
  const lyricsElement = useRef(null);

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

  useEffect(() => {
    if (chapterInstance == chapter) {
      console.log("firing", time);
      const lyricsElementCurrent = lyricsElement.current;
      // set scroll based on time elapsed - each chapter should start with a scroll position of one and work to the end of it's position
      const scrollHeight = lyricsElementCurrent.scrollHeight;
      const startOfSection1 = 10;
      const startOfSection2 = 80;
      const startOfSection3 = 120;
      let scrollPosition;
      switch (chapterInstance) {
        case 1:
          scrollPosition =
            ((time.currentTime - startOfSection1) / 70) * scrollHeight;
          break;
        case 2:
          scrollPosition =
            ((time.currentTime - startOfSection2) / 80) * scrollHeight;
          break;
        case 3:
          scrollPosition =
            ((time.currentTime - startOfSection3) / 80) * scrollHeight;
          break;
        default:
      }
      lyricsElementCurrent.scrollTo(0, scrollPosition);
    }
  }, [time.currentTime]);

  useEffect(() => {
    const lyricsElementCurrent = lyricsElement.current;
    lyricsElementCurrent.scrollTo({ top: 0, behavior: "smooth" });
  }, [chapter, seek]);

  return (
    <div
      ref={lyricsElement}
      onClick={handleClick}
      className={
        chapter === chapterInstance ? styles.chapterActive : styles.chapter
      }
    >
      <div
        className={
          chapter === chapterInstance
            ? styles.chapterTextActive
            : styles.chapterText
        }
      >
        <h3 className={styles.chapterNumber}>
          Chapter {chapterInstance} &rarr;
        </h3>
        <p className={styles.chapterDescription}>{description}</p>
      </div>
    </div>
  );
}
