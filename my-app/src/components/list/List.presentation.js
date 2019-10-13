import React, { forwardRef } from "react";
import { FixedSizeList as List } from "react-window";

import Checkbox from "../form/Checkbox.presentation";

const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
));

function handleOnWheel({ deltaY }) {
  // Your handler goes here ...
  console.log("handleOnWheel()", deltaY);
}

export const ListComponent = fucku => {
  const { data } = fucku;

  const Row = ({ index, style }) => {
    return (
      <div>
        <Checkbox />
        <label style={{ cursor: "pointer" }}>
          {data[index] && data[index].program}
        </label>
      </div>
    );
  };

  return (
    <List
      className="List"
      height={150}
      itemCount={data.length}
      itemSize={35}
      margin={20}
      outerElementType={outerElementType}
    >
      {data ? Row : null}
    </List>
  );
};
