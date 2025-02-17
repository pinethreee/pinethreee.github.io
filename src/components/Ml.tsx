import {ReactNode, useEffect, useRef} from 'react';

type MlOptions = {
  readonly diagram: string
};

const defaultShape = `#bendSize: 0.2
#fill: transparent
#fillArrows: true
#fontSize: 14
#gravity: 2
#gutter: 20
#ranker: longest-path
#spacing: 40
`

export default function Ml({diagram}: MlOptions): ReactNode {
  const canvas = useRef(null)
  useEffect(() => {
    // @ts-ignore
    window.nomnoml.draw(canvas.current, defaultShape + diagram)
  }, [])


  return (
      <div className={'pe--ml'}>
        <canvas ref={canvas}/>
      </div>
  );
}
