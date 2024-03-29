// import Link from "../Link";
import Link from "next/link";
import styles from "./reviewitem.module.css";
import Image from "next/image";

export default function ReviewItem({ review }) {
  return (
    <div className={styles.item}>
      <Link>
      {/* <Link to={`/reviews/id/${review.id}`}> */}
        <Image fill={true} src={review.image} alt={review.name} />
      </Link>
      {/* <div className={styles.info}>
        <h6 className={styles.category}>{product.category}</h6>
        <h2 className={styles.name}>{product.name}</h2>
        <p className={styles.description}>{product.description}</p>
      </div> */}
    </div>
  );
}