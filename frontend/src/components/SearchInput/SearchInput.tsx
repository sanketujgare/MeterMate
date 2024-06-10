import styles from "./SearchInput.module.scss";
import { SearchInputProps } from "./SearchInput.types.ts";
// import { FiSearch } from "react-icons/fir"
const SearchInput = ({}: SearchInputProps) => {
  return (
    <div className={styles.SearchField}>
      <input
        type="search"
        placeholder="search"
        className={styles.SearchInput}
      />

      <button className={styles.SearchButton} type="submit">
        🔎
      </button>
    </div>
  );
};

export default SearchInput;
