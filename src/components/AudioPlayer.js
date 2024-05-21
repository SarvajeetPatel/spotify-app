import Controls from "./Controls";
import DisplayTrack from "./DisplayTrack";
import ProgressBar from "./ProgressBar";
import { tracks } from "../data/tracks";
import { useRef, useState } from "react";

const AudioPlayer = () => {
    const [timeProgress, setTimeProgress] = useState(0)
    const [duration, setDuration] = useState(0)
    const [trackIndex, setTrackIndex] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex])

    const audioRef = useRef()
    const progressBarRef = useRef()

    const handleNext = () => {
        if (trackIndex >= tracks.length - 1) {
            setTrackIndex(0)
            setCurrentTrack(tracks[0])
        } else {
            setTrackIndex((prev) => prev + 1)
            setCurrentTrack(tracks[trackIndex + 1])
        }
    }

    return (
        <div className="audio-player">
            <div className="inner">
                <DisplayTrack {...{ currentTrack, audioRef, setDuration, progressBarRef, handleNext }} />
                <Controls {...{
                    audioRef, progressBarRef, duration, setTimeProgress, tracks,
                    trackIndex,
                    setTrackIndex,
                    setCurrentTrack,
                    handleNext
                }} />
                <ProgressBar {...{ progressBarRef, audioRef, timeProgress, duration }} />
            </div>
        </div>
    );
};
export default AudioPlayer;