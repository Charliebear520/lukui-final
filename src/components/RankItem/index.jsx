import Link from "../Link";
import styles from "./rankitem.module.css";

export default function RankItem({ rank }) {
  return (
    <div className={styles.item}>
      <Link to={`/ranks/id/${rank.id}`}>
        <img style={{ width: "100%" }} src={rank.image} alt={rank.name} />
      </Link>
      {/* <div className={styles.info}>
        <h6 className={styles.category}>{product.category}</h6>
        <h2 className={styles.name}>{product.name}</h2>
        <p className={styles.description}>{product.description}</p>
      </div> */}
    </div>
  );
}