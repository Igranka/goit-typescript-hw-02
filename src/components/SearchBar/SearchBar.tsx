import { Formik, Form, Field, FormikHelpers } from 'formik';
import css from './SearchBar.module.css';

interface Values {
  query: string;
}

interface SearchBarProps {
  onSearch: (prompt: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const handleSearch = (
    values: Values,
    actions: FormikHelpers<Values>
  ): void => {
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
    </>
  );
};

export default SearchBar;