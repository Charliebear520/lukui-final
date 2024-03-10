import styles from "./editscheduleitem.module.css";
import {DeleteOutlined, HeartFilled} from "@ant-design/icons";

export default function EditScheduleItem({ schedule }) {
  return (
    <div>
      <div>
        <h2 className={styles.date}>{schedule.date}</h2>
      </div>
      <div className={styles.edit_bar}>
        <h2 className={styles.time}>{schedule.start_time}</h2>
      </div>
      <div className={styles.item}>
        {/* <div className={styles.photo}>
          <Link to={`/schedules/id/${schedule.id}`}>
            <img
              style={{ width: "100%" }}
              src={schedule.image}
              alt={schedule.name}
            />
          </Link>
        </div> */}
        <div className={styles.action_bar}>
          <DeleteOutlined style={{color:'black',fontSize:'30px'}} />
          <HeartFilled style={{color:'black',fontSize:'30px'}} />
        </div>

        <div className={styles.info}>
          <p className={styles.description}>{schedule.description}</p>
          <h2 className={styles.name}>{schedule.name}</h2>

          {/* <div className={styles.more}>
            <span className={styles.textGray}>{schedule.description_long}</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
