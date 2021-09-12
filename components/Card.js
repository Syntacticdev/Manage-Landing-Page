import datas from "../public/faq.json";
import styles from "../styles/Card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      {datas.map(({ id, title, content }) => (
        <div className={styles.card_wrapper} key={id}>
          <div className={styles.card_head}>
            <span className={styles.card_badge}>{id}</span>
            <h3 className={styles.card_title}>{title}</h3>
          </div>

          <div className={styles.card_body}>
            <p>{content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
