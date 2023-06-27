import { useSelect } from 'downshift';
import { BsChevronDown } from 'react-icons/bs';

import {
  LabelOptionHide,
  LabelOptionSelected,
  ListOfOptions,
  SelectContainer,
} from './Select.styles';

interface SelectProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function Select<T>({ items, renderItem }: SelectProps<T>) {
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
