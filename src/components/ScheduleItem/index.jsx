import { Link } from "react-router-dom";
import styles from "./scheduleitem.module.css";
import { EditFilled, DollarOutlined ,LoginOutlined,LogoutOutlined} from "@ant-design/icons";

export default function ScheduleItem({ schedule }) {
  return (
    <div>
      <div>
        <h2 className={styles.date}>{schedule.date}</h2>
      </div>
      <div className={styles.edit_bar}>
        <h2 className={styles.time}>{schedule.start_time}</h2>
      </div>
      <div className={styles.item}>
        <div className={styles.photo}>
          <Link to={`/schedules/id/${schedule.id}`}>
            <img
              style={{ width: "100%" }}
              src={schedule.image}
              alt={schedule.name}
            />
          </Link>
        </div>

        <div className={styles.info}>
          <p className={styles.description}>{schedule.description}</p>
          <h2 className={styles.name}>{schedule.name}</h2>

          <div className={styles.more}>
            <span className={styles.textGray}>{schedule.description_long}</span>
          </div>
        </div>
      </div>
      <div className={styles.edit_bar}>
        <h2 className={styles.time}>{schedule.end_time}</h2>
        <div className={styles.edit_list}>
          <div className={styles.edit_item}>
            <LoginOutlined style={{color:'black'}}/>
            <p className={styles.edit}>抵達時間</p>
          </div>
          <hr className={styles.box}/>
          <div className={styles.edit_item}>
            <LogoutOutlined style={{color:'black'}}/>
            <p className={styles.edit}>離開時間</p>
          </div>
          <hr className={styles.box}/>
          <div className={styles.edit_item}>
            <DollarOutlined style={{ color: "black" }} />
            <p className={styles.edit}>開銷</p>
          </div>
          <hr className={styles.box}/>
          <div className={styles.edit_item}>
            <EditFilled style={{ color: "black" }} />
            <p className={styles.edit}>備註</p>
          </div>
        </div>
      </div>
    </div>
  );
}
