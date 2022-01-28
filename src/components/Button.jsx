import styles from "./Button.module.css";

const Button = ({ children, onClick, className, disabled }) => {
  console.log(className);
  return (
    <button className={styles.btn} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
export default Button;
