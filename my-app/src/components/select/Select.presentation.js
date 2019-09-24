import React from "react";
import styled from "styled-components";
import Select from "react-select";

const StyledSelect = styled(Select)`
  width: 100%;
`;

export const SelectComponent = ({ handleChange, options, value }) => {
  return (
    <StyledSelect value={value} onChange={handleChange} options={options} />
  );
};
