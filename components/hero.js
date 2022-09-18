import styles from 'styles/hero.module.css';
import Image from 'next/image';
import imgstyles from 'styles/img.module.css';

import gopher from 'images/gopherkun.gif';

export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <figure className={styles.image}>
          <Image
            src={gopher}
            alt=""
            layout="responsive"
            sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
            className={imgstyles.userdrag}
            priority
          />
        </figure>
      )}
    </div>
  );
}
