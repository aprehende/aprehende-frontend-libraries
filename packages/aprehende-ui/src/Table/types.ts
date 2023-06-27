import React from 'react';

type ColsByName<Data> = {
  [key in keyof Data]: {
    key: keyof Data;
    title: string;
    render?: (
      value: Data[key],
      index: number
    ) => React.ReactNode | boolean | '' | null;
    isActions?: boolean;
  };
};

type Column<TData> = ColsByName<TData>[keyof ColsByName<TData>];

export interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  widthFirstRow?: string;
  isSticky?: boolean;
}
