import React, { forwardRef } from "react";
import { FixedSizeList as List } from "react-window";

const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
));

function handleOnWheel({ deltaY }) {
  // Your handler goes here ...
  console.log("handleOnWheel()", deltaY);
}

const Row = ({ index, style }) => (
  <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
    Row {index}
  </div>
);

export const ListComponent = () => (
  <List
    className="List"
    height={150}
    itemCount={1000}
    itemSize={35}
    margin={20}
    outerElementType={outerElementType}
  >
    {Row}
  </List>
);
