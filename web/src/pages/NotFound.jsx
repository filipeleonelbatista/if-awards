import imageBg from "../assets/main_bg.jpg";
import styles from "../styles/pages/NotFound.module.css";

function NotFound() {
  return (
    <div
      className={styles.container}
    >
      <div className={styles.imageContainer}>
        <img src={imageBg} alt="Estatueta do instinct awards iluminada por luzes azuis e vermelhas em um estilo moderno" />
      </div>
      <div className={styles.content}>
        <h1>
          Não encontramos o que procura
        </h1>
        <p>
          A página procurada não foi encontrada.
        </p>
        <Button>
          <FaGoogle size={20} color="#FFF"/> Entrar com Google
        </Button>
      </div>
      <AcceptTerms />
    </div>
  );
}

export default NotFound;
