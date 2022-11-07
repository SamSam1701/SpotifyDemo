import styles from './ListSong.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { Songs } from '../../Context';
import { useState } from 'react';
import clsx from 'clsx'
import { useEffect } from 'react';

function ListSong() {
    
    const {Datasources, handleSetSong, song} = useContext(Songs)

    const [idSong, setidSong] = useState(0);

    const HandlePlaySong = (idSong) =>{
        setidSong(idSong);
        handleSetSong(idSong);
    }


    useEffect(() => {
        setidSong(song.id)
      }, [song])

    return (
        <div className={styles.listsong}>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th className={styles.ndth}>Title</th>
                        <th className={styles.rdth}>Author</th>
                        <th className={styles.dlicon}> <FontAwesomeIcon icon={faDownload} /> </th>
                    </tr>
                </thead>

                <tbody>
                    {
                       
                        Datasources.map((song, index)=>(
                            <tr key={index}  className={clsx( styles.SongBoard,song.id === idSong ? styles.playing : '')} onClick={()=>HandlePlaySong(song.id) }>
                            <td>{song.id + 1}</td>
                            <td className={styles.ndtd}>{song.name}</td>
                            <td>{song.author}</td>
                            <td> <a className={styles.downloadbtn} href={song.url}> <FontAwesomeIcon icon={faDownload} /> </a> </td>
                        </tr>
                        ))
                    }
                   
                </tbody>
            </table>
        </div>
    );
}

export default ListSong;