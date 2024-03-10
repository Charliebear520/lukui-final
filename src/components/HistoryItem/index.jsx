import { Link } from 'react-router-dom';
import styles from "./historyitem.module.css";

export default function HistoryItem({ history }) {
  return (
    <div className={styles.item}>
      <Link to={`/historys/id/${history.id}`}>
        <img style={{ width: "100%" }} src={history.image} alt={history.name} />
      </Link>
      <div className={styles.info}>
        <p className={styles.name}>{history.name}</p>
        <h2 className={styles.description}>{history.description}</h2>
      </div>
    </div>
  );
}