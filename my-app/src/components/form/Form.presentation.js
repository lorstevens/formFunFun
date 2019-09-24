import React from "react";
import styled from "styled-components";
import { SelectComponent } from "../select/Select.presentation";
import { Card } from "../card/Card.presentation";
import { ListComponent } from "../list/List.presentation";

const Container = styled.div`
  width: 600px;
  min-height: 500px;
  background-color: #f2f2f2;
  overflow-y: auto;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
`;

const Title = styled.h2`
  color: black;
`;

const Content = styled.div`
  border: 1px solid black;
  margin: 20px 0;
  padding: 10px;
`;

export const Form = () => {
  return (
    <Card>
      <Container>
        <Header>
          <Title>Lorna's Form</Title>
        </Header>
        <SelectComponent />

        <Content>
          <SelectComponent />
          <ListComponent />
        </Content>

        <Content>
          <SelectComponent />
          <ListComponent />
        </Content>
      </Container>
    </Card>
  );
};
