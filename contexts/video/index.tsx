import { createContext, useState, ReactNode, useEffect } from "react";

export const VideoContext = createContext({
  progress: 0,
  setProgress: (progress: number) => {},
  chapters: {
    1: { step: 1, input: { 1: "", 2: "", 3: "", 4: "" } },
    2: { step: 1, input: { 1: "", 2: "", 3: "", 4: "" } },
    3: { step: 1, input: { 1: "", 2: "", 3: "", 4: "" } },
  },
  setChapters: (chapters: any) => {},
});

interface Props {
  children: ReactNode;
}

export const VideoProvider = ({ children }: Props) => {
  const [progress, setProgress] = useState(0);
  const [chapters, setChapters] = useState({
    1: { step: 1, input: { 1: "", 2: "", 3: "", 4: "" } },
    2: { step: 1, input: { 1: "", 2: "", 3: "", 4: "" } },
    3: { step: 1, input: { 1: "", 2: "", 3: "", 4: "" } },
  });
  const value = { progress, setProgress, chapters, setChapters };

  useEffect(() => {
    console.log(progress);
  }, [progress]);

  return (
    <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
  );
};
