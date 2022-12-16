import { useState, useEffect, useContext, useRef, useMemo } from "react";

import styles from "../styles/Home.module.css";
import ServiceBox from "../components/ServiceBox";
import Chapter from "../components/Chapter";
import ReactPlayer from "react-player";

export default function Home() {
  const [playing, setPlaying] = useState(false);
  const [chapter, setChapter] = useState(1);
  const [seeking, setSeeking] = useState(false);
  const [time, setTime] = useState({ duration: 181, currentTime: 0 });
  const player = useRef(null) as any;

  // Hydrates for React Player
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  const seek = (p: number) => {
    setSeeking(true);
    if (player.current !== null) {
      console.log("seeking to", p);
      player.current.seekTo(p);
      setPlaying(true);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    setTimeout(() => setSeeking(false), 800);
  };

  const displayChapter = useMemo(() => chapter, [chapter, seeking]);

  const handleProgress = (data: {
    played: number;
    loaded: number;
    playedSeconds: number;
    loadedSeconds: number;
    duration: number;
  }) => {
    if (!seeking) {
      setTime({
        ...time,
        currentTime: data.playedSeconds,
      });
      if (data.playedSeconds > 0 && data.playedSeconds < 82) {
        setChapter(1);
      } else if (data.playedSeconds > 82 && data.playedSeconds < 115) {
        setChapter(2);
      } else if (data.playedSeconds > 115) {
        setChapter(3);
      }
    }
  };

  useEffect(() => {
    setPlaying(true);
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.video}>
            {hasWindow && (
              <ReactPlayer
                url="https://www.youtube.com/watch?v=xhnqO-c2s5U"
                onProgress={handleProgress}
                playing={playing}
                autoPlay={true}
                progressInterval={1}
                onSeek={(e: number) => console.log("seek", e)}
                height="300px"
                width="500px"
                ref={player}
              />
            )}
          </div>
          <div className={styles.grid}>
            <Chapter
              time={time}
              setChapter={setChapter}
              chapter={chapter}
              seek={seek}
              chapterInstance={1}
            />
            <Chapter
              time={time}
              setChapter={setChapter}
              chapter={chapter}
              seek={seek}
              chapterInstance={2}
            />
            <Chapter
              time={time}
              setChapter={setChapter}
              chapter={chapter}
              seek={seek}
              chapterInstance={3}
            />
          </div>
        </div>
      </main>
      <div className={styles.side}>
        <ServiceBox chapter={displayChapter} />
      </div>
    </div>
  );
}
