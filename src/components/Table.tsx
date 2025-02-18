import {ReactNode} from 'react';

type TableOptions = {
  readonly width?: number[],
  readonly children: ReactNode[]
};

export default function Table({width, children}: TableOptions) {
  return (
      <table className={'pe--table'}>
        <colgroup>
          {(width || [20, 60, 20]).map((w, i) => <col key={i} width={w}/>)}
        </colgroup>
        {children}
      </table>
  );
}
