import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const handleSearch = (values, actions) => {
    if (values.query.trim() === "") return toast.error("Please enter a prompt");;
    onSearch(values.query);
    actions.resetForm();
  };

  return (
    <>
      <header className={css.header}>
        <Formik initialValues={{ query: "" }} onSubmit={handleSearch}>
          <Form className={css.form}>
            <Field
              className={css.input}
              type="text"
              name="query"
              autoComplete="off"
              autoFocus
              placeholder="Night sky..."
            />
            <button className={css.btn} type="submit">
              Search
            </button>
          </Form>
        </Formik>
      </header>

      <div>
        <Toaster />
      </div>
    </>
  );
}