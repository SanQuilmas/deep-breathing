import { useContext, useState } from "react";
import { Menu, OptionList, OptionItem } from "./PaceInput.styles";
import { MainContext } from "../Window/Window";

export const PaceInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const {setPace} = useContext(MainContext);

  const handleSelect = (value: string) => {
    setSelected(value)
    switch(value){
      case 'Calm':
        setPace(10);
        break;
      case 'Balanced':
        setPace(6);
        break;
      case 'Active':
        setPace(2);
        break;
    }
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
