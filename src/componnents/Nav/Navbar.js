import styles from './Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';



function Navbar() {
    return ( 
        <div className={styles.nav}>
            <FontAwesomeIcon className={styles.icon} icon={faSpotify}/>
            Spotify
        </div>
     );
}

export default Navbar;