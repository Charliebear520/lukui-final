import { Link } from 'react-router-dom';
import styles from "./isplanningitem.module.css";

export default function IsPlanningItem({ plan }) {
  return (
    <div className={styles.item}>
      <Link to={`/plans/id/${plan.id}`}>
        <img style={{ width: "100%" }} src={plan.image} alt={plan.name} />
      </Link>
      <div className={styles.info}>
        <p className={styles.name}>{plan.name}</p>
        <h2 className={styles.description}>{plan.description}</h2>
      </div>
    </div>
  );
}