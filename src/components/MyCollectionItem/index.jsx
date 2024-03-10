
import { Link } from 'react-router-dom';
import styles from './mycollectionitem.module.css';

export default function MyCollectionItem({ mycollection }) {
   return (
      <div className={styles.item}>
        <Link to={`/mycollections/id/${mycollection.id}`}>
            <img
               style={{ width: '100%' }}
               src={mycollection.image}
               alt={mycollection.name} />
         </Link>
         <div className={styles.info}>
            <h6 className={styles.category}>
               {mycollection.category}
            </h6>
            <h2 className={styles.name}>
               {mycollection.name}
            </h2>
            <p className={styles.description}>
               {mycollection.description}
            </p>

         </div>
      </div>
   );
}
