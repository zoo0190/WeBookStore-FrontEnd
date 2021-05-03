import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';
import styled from 'styled-components';

const arr: Array<number> = [1, 2, 3, 4, 5, 6, 7];

const cardinalNumberMenu = (
  <Menu>
    {arr.map((value) => (
      <Menu.Item
        key={value}
        onClick={(e) => {
          console.log(e.key);
        }}
      >
        <div>{value}기</div>
      </Menu.Item>
    ))}
  </Menu>
);

const endMenu = (
  <Menu>
    <Menu.Item>
      <div>Front</div>
    </Menu.Item>
    <Menu.Item>
      <div>Back</div>
    </Menu.Item>
  </Menu>
);

const DropMenu: React.FC = () => (
  <DropdownWrapper>
    <Dropdown overlay={cardinalNumberMenu}>
      <CardinalNumberTitle>기수</CardinalNumberTitle>
    </Dropdown>
    <Dropdown overlay={endMenu}>
      <EndTitle>프/백</EndTitle>
    </Dropdown>
  </DropdownWrapper>
);

export default DropMenu;

const DropdownWrapper = styled.div`
  margin-top: 42px;
`;

const CardinalNumberTitle = styled.span`
  margin-right: 17px;
  font-family: AppleSDGothicNeo;
  font-size: 24px;
  font-weight: bold;
  color: #000000;
`;

const EndTitle = styled.span`
  font-family: AppleSDGothicNeo;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
`;
