import Meta from 'components/meta';
import Container from 'components/container';
import Hero from 'components/hero';

import eyecatch from 'images/about.jpg';
import imgstyles from 'styles/img.module.css';
import Image from 'next/image';

export default function Works() {
  return (
    <Container>
      <Meta />
      <Hero title="Works" subtitle="This is my main achievenment" />

      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="(min-width: 1152px) 1152px, 100vw"
          className={imgstyles.userdrag}
          priority
          placeholder="blur"
        />
      </figure>
    </Container>
  );
}