import React, { useState } from "react";
import { Menu, OptionList, OptionItem } from "./PaceInput.styles";

export const PaceInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
  };

  return (
      <Menu onClick={() => setIsOpen(!isOpen)} tabIndex={0}>
        {selected || "Set Pace"}
        {isOpen && (
          <OptionList>
            <OptionItem onClick={() => handleSelect("Calm")}>Calm</OptionItem>
            <OptionItem onClick={() => handleSelect("Balanced")}>Balanced</OptionItem>
            <OptionItem onClick={() => handleSelect("Active")}>Active</OptionItem>
          </OptionList>
        )}
      </Menu>
  );
};
