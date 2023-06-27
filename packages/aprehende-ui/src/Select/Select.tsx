import { useSelect } from 'downshift';
import { useEffect } from 'react';
import { BsChevronDown } from 'react-icons/bs';

import {
  LabelOptionHide,
  LabelOptionSelected,
  ListOfOptions,
  SelectContainer,
} from './Select.styles';

interface SelectProps<T> {
  items: T[];
  onChange?: (item: T | null) => void;
  renderItem: (item: T) => React.ReactNode;
}

function Select<T>({ items, renderItem, onChange }: SelectProps<T>) {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
  } = useSelect({
    items,
  });

  useEffect(() => {
    onChange && onChange(selectedItem);
  }, [selectedItem]);

  return (
    <SelectContainer>
      <LabelOptionSelected
        {...getToggleButtonProps()}
        data-testid="apr-select-button"
      >
        {selectedItem && renderItem(selectedItem)}
        {!selectedItem && (
          <LabelOptionHide {...getLabelProps()}>
            Seleccione un país
          </LabelOptionHide>
        )}
        <BsChevronDown />
      </LabelOptionSelected>
      <ListOfOptions
        {...getMenuProps()}
        isOpen={isOpen}
        data-testid="apr-select-menu"
      >
        {isOpen &&
          items.map((item, index) => (
            <div key={index} {...getItemProps({ item, index })}>
              {renderItem(item)}
            </div>
          ))}
      </ListOfOptions>
    </SelectContainer>
  );
}

export default Select;
