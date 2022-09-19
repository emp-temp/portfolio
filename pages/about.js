import Meta from 'components/meta';
import Container from 'components/container';
import Hero from 'components/hero';

import Image from 'next/image'

import temple from 'images/temple.jpg';
// import eyecatch from 'images/about.jpg'
import imgstyles from 'styles/img.module.css'


export default function About() {
  return (
    <Container>
      <Meta
        pageTitle="コンタクト"
        pageDesc="My Contact"
      />

      <Hero title="Contact" subtitle="My Contact" />

      <figure>
        <Image
          src={temple}
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
