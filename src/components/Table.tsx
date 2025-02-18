import {ReactNode} from 'react';

type TableOptions = {
  readonly width?: number[],
  readonly headers?: string[],
  readonly children: ReactNode[]
};

export default function Table({width, headers, children}: TableOptions) {
  return (
      <table className={'pe--table'}>
        <colgroup>
          {(width || [20, 20, 60]).map((w, i) => <col key={i} width={w}/>)}
        </colgroup>
        {headers && <thead> {headers.map((h, j) => <th key={j}>{h}</th>)} </thead>}
        {children}
      </table>
  );
}
