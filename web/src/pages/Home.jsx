import { useNavigate } from "react-router-dom";
import imageBg from "../assets/main_bg.jpg";
import AcceptTerms from "../components/AcceptTerms";
import Button from "../components/Button";
import styles from "../styles/pages/Home.module.css";
import { FaGoogle } from  'react-icons/fa'

function Home() {
  const navigate = useNavigate();


  return (
    <div
      className={styles.container}
    >
      <div className={styles.imageContainer}>
        <img src={imageBg} alt="Estatueta do instinct awards iluminada por luzes azuis e vermelhas em um estilo moderno" />
      </div>
      <div className={styles.content}>
        <h1>
          Vote nos <br />
          melhores <br />
          momentos
        </h1>
        <p>
          Compartilhe sua lista com amigos<br/>
          e deixe registrado seu voto nos momentos<br/>
          da IF do ano
        </p>
        <Button>
          <FaGoogle size={20} color="#FFF"/> Entrar com Google
        </Button>
      </div>
      <AcceptTerms />
    </div>
  );
}

export default Home;
