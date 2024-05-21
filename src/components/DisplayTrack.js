import { BsMusicNoteBeamed } from 'react-icons/bs'

const DisplayTrack = ({ currentTrack, audioRef, setDuration, progressBarRef, handleNext }) => {
    const onLoadedMetadata = () => {
        const seconds = audioRef.current.duration
        setDuration(seconds)
        progressBarRef.current.max = seconds
    }
    const LyricsText = currentTrack?.lyrics?.split("  ") || []

    return (
        <div>
            <audio
                src={currentTrack.src}
                ref={audioRef}
                onLoadedMetadata={onLoadedMetadata}
                onEnded={handleNext}
            />
            <div className="audio-info">
                <div className="audio-image">
                    {currentTrack.thumbnail ? (
                        <img src={currentTrack.thumbnail} alt="audio avatar" />
                    ) : (
                        <div className="icon-wrapper">
                            <span className="audio-icon">
                                <BsMusicNoteBeamed />
                            </span>
                        </div>
                    )}
                </div>
                <div className='audio-summary'>
                    <p className="title">{currentTrack.title}</p>
                    <p className="text">{currentTrack.author}</p>
                    <div className='lyrics-main'>
                        {LyricsText.length > 0 ?
                            LyricsText.map(lyricText => (
                                <p className="lyrics-text"> {lyricText} </p>
                            )) :
                            <p className='lyrics-text'> No lyrics. </p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayTrack