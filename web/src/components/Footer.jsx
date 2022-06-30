import logoImg from "../assets/logo_white.png";
import styles from "../styles/components/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <img src={logoImg} alt="IF Awards" />
        <p>&copy; {new Date(Date.now()).getFullYear()} - IF Awards</p>
        <p>Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
