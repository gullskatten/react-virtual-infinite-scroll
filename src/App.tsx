import React from 'react';
import Card from './components/Card';
import useElementSize from './hooks/useElementSize';
import cardData from './assets/cardData';

const OVERSCAN_ROWS = 2;
const ROW_HEIGHT = 250;

function App() {
  const [scrollTop, setScrollTop] = React.useState(0);
  const { height, ref } = useElementSize<HTMLUListElement>();

  const startIndex = Math.max(
    0,
    Math.ceil(scrollTop / ROW_HEIGHT) - OVERSCAN_ROWS
  );

  // Add 1 to the visible rows height to account for the (potential) next row
  const endIndex = Math.min(
    startIndex + Math.ceil(height / ROW_HEIGHT + 1) + OVERSCAN_ROWS,
    cardData.length
  );

  const visibleRows = cardData.slice(startIndex, endIndex);
  const start = Math.max(0, startIndex * ROW_HEIGHT);
  const end = (cardData.length - endIndex) * ROW_HEIGHT;

  return (
    <div className="relative flex  bg-slate-100 dark:bg-slate-900">
      <div className="fixed bottom-5 right-5 grid grid-cols-2 gap-x-3 bg-slate-900 p-1 text-end text-xs">
        <p>scroll-top:</p> <p>{scrollTop}</p>
        <p>item height:</p> <p>{height}</p>
        <p>total height:</p> <p>{height}</p>
        <p>start:</p> <p>{startIndex}</p>
        <p>end:</p> <p>{endIndex}</p>
        <p>h-start</p> <p>{start}</p>
        <p>h-end</p> <p>{end}</p>
        <p>visible rows:</p>
        <p>{visibleRows.length}</p>
        <p>total rows:</p> <p>{cardData.length}</p>
      </div>

      <ul
        onScroll={(event: React.UIEvent<HTMLUListElement>) => {
          const element = event.target as HTMLUListElement;
          setScrollTop(element.scrollTop);
        }}
        className="grid h-screen w-full overflow-y-scroll"
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
            className="animate-fade-in flex w-full overflow-hidden text-center"
            style={{
              height: `${ROW_HEIGHT}px`,
              overflowAnchor: 'none',
            }}>
            <Card
              color={card.color}
              title={card.title}
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
