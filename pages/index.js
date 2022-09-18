import { getAllPosts } from 'lib/api';
import Meta from 'components/meta';
import Container from 'components/container';
import Hero from 'components/hero';
import Pagination from 'components/pagination';
import { getPlaiceholder } from 'plaiceholder';
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import PostBody from 'components/post-body'
import Accordion from 'components/accordion'
import Contact from 'components/contact'
import Skills from 'components/skills'

import styles from 'styles/home.module.css'

// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from 'lib/constants';

export default function Home() {
  return (
    <Container>
      <Meta />
      <Hero title="TEMP" subtitle="TEMP is Motivated Developer." imageOn />
      {/* たくやさんみたいなことを書く */}
      {/* あとはあっくんみたいにできることを書く */}
      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <h2 className={styles.title}><u>Work</u></h2>
            <p>
              TEMPは現在四国のとある高専に通っているエンジニアであり、
              データサイエンス、Webのバックエンド、フロントエンド開発
              などの開発を通し、自身のアイデアやサービスで世の中を
              少しでも楽しく便利にしようと、日々精進しています。
              現在はロボ研に所属しています。
            </p>
            <h2 className={styles.title}><u>Background</u></h2>
            <div className={styles.background}>
              <div>
                <p>2004</p>
              </div>
              <p>Born in Ehime</p>
            </div>
            <div className={styles.background}>
              <div>
                <p>2020</p>
              </div>
              <p>Entered Niihama National College of Technology & Joined RoboKen</p>
            </div>
            <div className={styles.background}>
              <div>
                <p>2004</p>
              </div>
              <p>While enjoying college life as a student, I devote myself to developing my own services and projects.</p>
            </div>
            <h2 className={styles.title}><u>Hobby</u></h2>
            <p>Service development, Music, Playing Guitar, Read, Working</p>
            <h2 className={styles.title}><u>Skills</u></h2>
            <Skills />

            <h2 className={styles.title}><u>FAQ</u></h2>

            <Accordion heading="学校での生活について">
              <p>
                情報系の学部に所属しています。学校生活はコロナなどの関係で行事などもこれまでほとんどなく大変ですが、日進月歩で1日1日大切にし充実した1日を過ごすことができています。
              </p>
            </Accordion>
            <Accordion heading="開発しているサービスについて">
              <p>
                現在学校関連のツールをグループを作り作成しております。具体的には寮の管理ツールや学科のWebサイトを作成させていただいている途中です。個人ではまだ別で自分の考えたアイデアを実現するために開発を行っております。
              </p>
            </Accordion>
            <Accordion heading="これまでの実務経験について">
              <p>
                とある会社でデータサイエンティストとして、データの加工、CNNでOCRなどの開発を行っていました。軽くVueなどでも開発のお手伝いをさせていただいていました。
              </p>
            </Accordion>
          </PostBody>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
      <Pagination nextUrl="/works" nextText="More About" />
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts(4);

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataURL = base64;
  }

  return {
    props: {
      posts: posts,
    },
  };
}
