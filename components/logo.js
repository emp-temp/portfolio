import Link from 'next/link';
import styles from 'styles/logo.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBone } from '@fortawesome/free-solid-svg-icons'

export default function Logo({ iconOn = false, boxOn = false }) {
  return (
    <Link href="/">
      <a className={boxOn ? styles.box : styles.basic}>
        {iconOn && <span className={styles.icon}><FontAwesomeIcon icon={faBone} /></span>}
        EMP-TEMP
        {iconOn && <span className={styles.icon}><FontAwesomeIcon icon={faBone} /></span>}
      </a>
    </Link>
  );
}
