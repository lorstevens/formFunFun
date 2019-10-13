import React from "react";
import styled from "styled-components";

const StyledCheckbox = styled.input``;

const Checkbox = props => {
  return <StyledCheckbox id={props.id} type="checkbox" />;
};

export default Checkbox;
