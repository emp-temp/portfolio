import styles from 'styles/skills.module.css'

export default function Skills() {
  return (
    <div className={styles.box1}>
      <div className={styles.box2}>
        <h3>
          Frontend
        </h3>
        <p>HTML5</p>
        <p>CSS</p>
        <p>React</p>
        <p>TypeScirpt</p>
        <p>Next.js</p>
      </div>
      <div className={styles.box2}>
        <h3>Backend</h3>
        <p>Golang</p>
        <p>Django</p>
        <p>Node.js</p>
        <p>Rust</p>
      </div>
      <div className={styles.box2}>
        <h3>Embedded</h3>
        <p>Arduino</p>
        <p>Python</p>
      </div>
      <div className={styles.box2}>
        <h3>Other</h3>
        <p>Git</p>
        <p>Github</p>
        <p>Docker</p>
        <p>AWS(EC2)</p>
      </div>
    </div>
  )
}
