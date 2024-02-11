import React from 'react';
import Card from './components/Card';
import useElementSize from './hooks/useElementSize';
import cardData, { fetchMore } from './assets/cardData';
import useThrottle from './hooks/useThrottle';

const OVERSCAN_ROWS = 20;
let OVERSCAN_HEIGHT_AT = 1;

function App() {
  const [scrollTop, setScrollTop] = React.useState(0);
  const { height, ref } = useElementSize<HTMLUListElement>();
  const throttledScrollTop = useThrottle(scrollTop, 50);
  const [data, setData] = React.useState(cardData);

  let ROW_HEIGHT = height ?? window.innerHeight;

  const { startIndex, endIndex, start, end } = React.useMemo(() => {
    const startIndex = Math.max(
      0,
      Math.ceil(throttledScrollTop / (ROW_HEIGHT - OVERSCAN_HEIGHT_AT)) -
        OVERSCAN_ROWS
    );
    const endIndex = Math.min(
      startIndex +
        Math.ceil(height / ROW_HEIGHT + OVERSCAN_HEIGHT_AT) +
        OVERSCAN_ROWS,
      data.length
    );

    const start = Math.max(0, startIndex * ROW_HEIGHT);
    const end = (data.length - endIndex) * ROW_HEIGHT;

    return { startIndex, endIndex, start, end };
  }, [throttledScrollTop, height, data.length]);

  React.useEffect(() => {
    if (end <= ROW_HEIGHT) {
      fetchMore().then((newData) => {
        setData((prevData) => [...prevData, ...newData]);
      });
    }
  }, [throttledScrollTop]);

  const visibleRows = data.slice(startIndex, endIndex);

  return (
    <div className="relative flex bg-slate-100 dark:bg-slate-900">
      <div className="fixed bottom-5 right-5 z-10 grid grid-cols-2 gap-x-3 rounded-md bg-slate-900/20 p-3 text-end text-xs shadow-md">
        <p>scroll-top:</p> <p>{`${scrollTop}`}</p>
        <p>(throttled)scr-top:</p> <p>{`${throttledScrollTop}`}</p>
        <p>item height:</p> <p>{`${height}`}</p>
        <p>total height:</p> <p>{`${height}`}</p>
        <p>start:</p> <p>{`${startIndex}`}</p>
        <p>end:</p> <p>{`${endIndex}`}</p>
        <p>h-start</p> <p>{`${start}`}</p>
        <p>h-end</p> <p>{`${end}`}</p>
        <p>visible rows:</p>
        <p>{`${visibleRows.length}`}</p>
        <p>total rows:</p> <p>{`${data.length}`}</p>
      </div>
      <ul
        onScroll={async (event: React.UIEvent<HTMLUListElement>) => {
          const element = event.target as HTMLUListElement;

          setScrollTop(element.scrollTop);
        }}
        className="grid h-screen w-full snap-y snap-mandatory overflow-y-scroll"
        ref={ref}>
        <li
          className="col-span-full w-full bg-transparent"
          style={{
            height: `${start}px`,
            overflowAnchor: 'none',
          }}
        />
        {visibleRows.map((card) => (
          <li
            key={card.id}
            className="animate-fade-in flex w-full snap-end overflow-hidden text-center"
            style={{
              height: `${ROW_HEIGHT}px`,
              overflowAnchor: 'none',
            }}>
            <Card
              id={card.id}
              color={card.color}
              title={`${card.title}`}
              description={card.description}
            />
          </li>
        ))}
        <li
          className="col-span-full w-full"
          style={{
            height: `${end}px`,
            overflowAnchor: 'none',
          }}
        />
      </ul>
    </div>
  );
}

export default App;
