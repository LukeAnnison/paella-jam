import { useEffect, useRef } from 'react';
const LyricsDisplay = ( {lyrics, currentTime, duration} ) => {
  const lyricsElement = useRef(null);

  useEffect(() => {
    // change scroll position
    const lyricsElementCurrent = lyricsElement.current;
    const scrollHeight = lyricsElementCurrent.scrollHeight;
    const clientHeight = lyricsElementCurrent.clientHeight;
    const scrollPosition = (currentTime / duration) * scrollHeight;
    lyricsElementCurrent.scrollTop = scrollPosition - clientHeight / 2;
  }, [currentTime]);

  return (
    <div className="lyrics-display">
      <p ref={lyricsElement}>{lyrics}</p>
    </div>
  );
};

export default LyricsDisplay;
