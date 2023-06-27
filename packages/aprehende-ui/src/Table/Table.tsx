import { useEffect, useRef, useState } from 'react';

import {
  ContainerRow,
  TableStyled,
  TBody,
  TD,
  TH,
  THead,
  THeader,
} from './Table.styles';
import { TableProps } from './types';

function Table<TableData>({
  data,
  columns,
  widthFirstRow,
  isSticky,
}: TableProps<TableData>) {
  const tableRef = useRef<HTMLTableElement>(null);

  const [top, setTop] = useState<string>('0px');

  useEffect(() => {
    setTop(`${tableRef.current?.getBoundingClientRect().top}px`);
  }, []);

  return (
    <TableStyled ref={tableRef}>
      <THead isSticky={isSticky} top={top}>
        <THeader>
          {columns.map((column, idx) => (
            <TH
              customWidth={widthFirstRow}
              key={idx}
              isActions={column.isActions}
            >
              {column.title}
            </TH>
          ))}
        </THeader>
      </THead>
      <TBody>
        {data.map((row, idx) => (
          <ContainerRow key={idx}>
            {columns.map(({ key, render, isActions }, idxColumn) => (
              <TD
                customWidth={widthFirstRow}
                key={`${idx}-${idxColumn}`}
                isActions={isActions}
              >
                {!render && (row[key] as string)}
                {render && render(row[key], idx)}
              </TD>
            ))}
          </ContainerRow>
        ))}
      </TBody>
    </TableStyled>
  );
}

export default Table;
