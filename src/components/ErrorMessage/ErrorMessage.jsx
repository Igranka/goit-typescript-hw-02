import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <p className={css.alert}>Something went wrong... Please reload</p>
  );
}