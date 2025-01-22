import styles from "./button.module.css";
export default function Button({ title, className }) {
  return (
    <button className={`${styles.btn} ${className || ""}`}>{title}</button>
  );
}
