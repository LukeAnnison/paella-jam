import { useContext, useEffect } from "react";
import { VideoContext } from "../../contexts/video";
import { InputChapter } from "./InputChapter";

interface Props {
  chapter: number;
}

export default function ServiceBox({ chapter }: Props) {
  const { chapters, setChapters } = useContext(VideoContext);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setChapters({
      ...chapters,
      [chapter]: {
        ...chapters[chapter],
        input: {
          ...chapters[chapter].input,
          [name]: value,
        },
      },
    });
  };

  const handleNext = () => {
    if (chapters[chapter].step < 4) {
      setChapters({
        ...chapters,
        [chapter]: {
          ...chapters[chapter],
          step: chapters[chapter].step + 1,
        },
      });
    } else {
      setChapters({
        ...chapters,
        [chapter]: {
          ...chapters[chapter],
          step: 1,
        },
      });
      handleSubmit();
    }
  };

  const handlePrev = () => {
    setChapters({
      ...chapters,
      [chapter]: {
        ...chapters[chapter],
        step: chapters[chapter].step - 1,
      },
    });
  };

  const handleSubmit = () => {
    console.log("first, second, third");
  };

  return (
    <InputChapter
      chapter={chapter}
      handleChange={handleChange}
      handlePrev={handlePrev}
      handleNext={handleNext}
      chapters={chapters}
    />
  );
}
