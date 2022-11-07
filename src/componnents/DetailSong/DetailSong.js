import { useContext } from 'react';
import { Songs } from '../../Context';
import styles from './DetailSong.module.scss';

function DetailSong() {
    const {song} = useContext(Songs)
 
    return (
        <div className={styles.infor}>
            <h4>Now Playing</h4>
            <h2>{song.name}</h2>
            <div className={styles.avatar}>
                <img src={song.links.images[0].url} alt="avatar" />
            </div>
            <div className={styles.avtsong}>
                <img src={song.links.images[1].url} alt="avatarsong"/>
                <span>{song.author}</span>
            </div>
        </div>
    )
}

export default DetailSong;