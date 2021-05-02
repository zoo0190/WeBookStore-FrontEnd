import React from 'react';
import styled from 'styled-components';
import { PlusCircleOutlined } from '@ant-design/icons';

const Header: React.FC = () => (
  <HeaderWrapper>
    <SignButton>로그인 / 회원가입</SignButton>
    <Title>위코드 책방</Title>
    <RegisterButton>
      <PlusCircleOutlined />
    </RegisterButton>
  </HeaderWrapper>
);

export default Header;

const HeaderWrapper = styled.div``;

const SignButton = styled.button`
  display: flex;
  margin-left: auto;
  padding: 0;
  width: 139px;
  height: 24px;
  font-size: 20px;
  color: #fe707b;
  border: none;
  outline: none;
  background-color: white;
  cursor: pointer;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  width: 200px;
  height: 43px;
  font-weight: 900;
  font-size: 36px;
  color: #d0021b;
`;

const RegisterButton = styled.div`
  display: flex;
  margin-left: auto;
  width: 30px;
  height: 30px;
  font-size: 30px;
  color: #fe707b;
  cursor: pointer;
`;
