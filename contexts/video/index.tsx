import { createContext, useState, ReactNode, useEffect } from "react";

export const VideoContext = createContext({
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
  const [chapters, setChapters] = useState({
    1: { step: 1, input: { 1: "", 2: "", 3: "", 4: "" } },
    2: { step: 1, input: { 1: "", 2: "", 3: "", 4: "" } },
    3: { step: 1, input: { 1: "", 2: "", 3: "", 4: "" } },
  });
  const value = { chapters, setChapters };

  return (
    <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
  );
};
