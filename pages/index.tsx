import { useState, useContext, useRef, useMemo } from "react";

import styles from "../styles/Home.module.css";
import ServiceBox from "../components/ServiceBox";
import Chapter from "../components/Chapter";
import ReactPlayer from "react-player";
import { VideoContext } from "../contexts/video";
import { useProgress } from "../hooks/useVideo";

export default function Home() {
  const { progress, setProgress } = useContext(VideoContext);
  const [playing, setPlaying] = useState(false);
  const [chapter, setChapter] = useState(1);
  const [seeking, setSeeking] = useState(false);
  const player = useRef(null) as any;

  const seek = (p: number) => {
    setSeeking(true);
    if (player.current !== null) {
      console.log("seeking to", p);
      player.current.seekTo(p);
      setPlaying(true);
      // scroll to the top of the page slowly
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
  }) => {
    if (!seeking) {
      if (data.playedSeconds > 0 && data.playedSeconds < 10) {
        setChapter(1);
      } else if (data.playedSeconds > 70 && data.playedSeconds < 120) {
        setChapter(2);
      } else if (data.playedSeconds > 120) {
        setChapter(3);
      }
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.video}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=N0sDb169Ngg"
              onProgress={handleProgress}
              playing={playing}
              onSeek={(e: number) => console.log("seek", e)}
              height='300px'
              width='500px'
              ref={player}
              config={{
                youtube: {
                  playerVars: { showinfo: 1, start: progress },
                },
              }}
            />
          </div>

          <div className={styles.grid}>
            <Chapter seek={seek} chapter={1} />
            <Chapter seek={seek} chapter={2} />
            <Chapter seek={seek} chapter={3} />
          </div>
        </div>
      </main>
      <div className={styles.side}>
        <ServiceBox chapter={displayChapter} />
      </div>
    </div>
  );
}
