import { useContext } from 'react';

import { VideoContext } from '../contexts/video';


export const useProgress = (data: {
    played: number;
    loaded: number;
    playedSeconds: number;
    loadedSeconds: number;
  }) => {
const { progress, setProgress } = useContext(VideoContext);
		console.log(data);
    setProgress(data.playedSeconds);
		return data;
	};
