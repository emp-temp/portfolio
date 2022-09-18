import Container from 'components/container';
import Logo from 'components/logo';
import Nav from 'components/nav';
import styles from 'styles/header.module.css';

export default function Header() {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <span>
            <Logo iconOn boxOn />
          </span>
          <Nav />
        </div>
      </Container>
    </header>
  );
}
