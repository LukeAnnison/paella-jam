import styles from '../../styles/Home.module.css'

interface Props {
  chapter: number;
  seek: (progress: number) => void;
}

export default function Chapter({chapter, seek}: Props) {

  const handleClick = () => {
    if (chapter === 1) {
      seek(0);
    } else {
    seek(chapter * 40);
    console.log({chapter})
    }
  }

	return (
    <div onClick={handleClick} className={styles.chapter}>
            <h3>Chapter {chapter} &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
    </div>
	)
}
