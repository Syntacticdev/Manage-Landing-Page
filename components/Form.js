import styles from "../styles/Form.module.css";

const Form = () => {
  return (
    <div className={styles.form}>
      <form action="/subscribe" method="post" className={styles.subForm}>
        <div className="form-group">
          <input
            type="email"
            name=""
            id=""
            className="form-control"
            placeholder="Updates in your inbox..."
          />
        </div>
        <button type="submit">Go</button>
      </form>
    </div>
  );
};

export default Form;
