import dayjs from "dayjs";

import styles from "./styles.module.css";

const UserInfo = ({ user }) => {
  const { avatar, firstName, joinDate } = user;
  const formattedDate = dayjs(joinDate).format("MMM YYYY");
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.name}>{firstName}</p>
        <p className={styles.joinDateText}>Joined {formattedDate}</p>
      </div>
      <div className={styles.avatarContainer}>
        <img src={avatar} className={styles.image} />
      </div>
    </div>
  );
};

export default UserInfo;
