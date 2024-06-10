import styles from "./DropDown.module.scss";
import { DropDownProps } from "./DropDown.types.ts";
import React, { useState } from "react";
interface DropdownProps {
  options: { value: string; label: string }[];
  onSelect: (value: string) => void;
}

// const DropDown = ({}: DropDownProps) => {};

// export default DropDown;

// Dropdown.tsx

const Dropdown = ({ options, onSelect }: DropdownProps) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <div className={styles.DropDown}>
      <select
        className={styles.Select}
        value={selectedValue}
        onChange={handleChange}
      >
        <option className={styles.Option} value="">
          Select
        </option>
        {options.map((option) => (
          <option
            className={styles.Option}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
