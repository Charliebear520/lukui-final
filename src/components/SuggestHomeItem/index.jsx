import Link from "../Link";
import styles from "./suggestitem.module.css";

export default function SuggestItem({ suggest }) {
  return (
    <div className={styles.item}>
      <Link to={`/suggests/id/${suggest.id}`}>
        <img style={{ width: "100%" }} src={suggest.image} alt={suggest.name} />
      </Link>
      {/* <div className={styles.info}>
        <h6 className={styles.category}>{product.category}</h6>
        <h2 className={styles.name}>{product.name}</h2>
        <p className={styles.description}>{product.description}</p>
      </div> */}
    </div>
  );
}