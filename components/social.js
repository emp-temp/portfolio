import styles from 'styles/social.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import {
  TbBrandGithub,
  TbBrandTwitter,
  TbBrandInstagram,
} from 'react-icons/tb';

export default function Social({ iconSize = 'initial' }) {
  return (
    <ul className={styles.list} style={{ '--icon-size': iconSize }}>
      <li>
        <a href="https://twitter.com/emptemp0000">
          <TbBrandTwitter />
          <span className="sr-only">Twitter</span>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/emp_temp/">
          <TbBrandInstagram />
          <span className="sr-only">Instagram</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/emp-temp">
          <TbBrandGithub />
          <span className="sr-only">GitHub</span>
        </a>
      </li>
    </ul>
  );
}
