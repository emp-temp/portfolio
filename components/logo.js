import Link from 'next/link';
import styles from 'styles/logo.module.css';
import { SiGoland } from 'react-icons/si';

export default function Logo({ iconOn = false, boxOn = false }) {
  return (
    <Link href="/">
      <a className={boxOn ? styles.box : styles.basic}>EMP-TEMP</a>
    </Link>
  );
}
