
import { Link } from 'react-router-dom';
import styles from './nearbyitem.module.css';

export default function NearbyItem({ nearby }) {
   return (
      <div className={styles.item}>
        <Link to={`/nearbys/id/${nearby.id}`} className={styles.image_link}>
            <img
               style={{ width: '100%' }}
               src={nearby.image}
               alt={nearby.name} />
         </Link>
         <div className={styles.info}>
            <h6 className={styles.category}>
               {nearby.category}
            </h6>
            <h2 className={styles.name}>
               {nearby.name}
            </h2>
            <p className={styles.description}>
               {nearby.description}
            </p>
            <div className={styles.more}>
               <Link to={`/nearbys/id/${nearby.id}`} className={styles.link}>
                  See More ...
               </Link>
               <span
                  className={styles.textGray}>
                  USD {nearby.price}.00
               </span>
            </div>
         </div>
      </div>
   );
}
