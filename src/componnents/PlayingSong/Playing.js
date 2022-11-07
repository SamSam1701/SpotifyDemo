// import React from 'react';
import styles from './Playing.module.scss';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useContext } from 'react';
import { Songs } from '../../Context';

function PlayingSong() {

    const {song, handleSetSong} = useContext (Songs)

    const handleClickNext = () => {
        handleSetSong(song.id+1);
    }

    const handleClickPre = () => {
        handleSetSong(song.id -1)
    }
    
    return ( 
        <div>
            <AudioPlayer className={styles.audioplayer}
            src={song.url} showSkipControls={true} 
            showJumpControls={false} 
            onClickNext={handleClickNext}
            onClickPrevious={handleClickPre}></AudioPlayer>
        </div>
     );
}

export default PlayingSong;