import React from 'react';
import styled from 'styled-components';

const BookCard: React.FC = () => {
  return (
    <BookCardWrapper>
      <CoverImg
        src="https://bookthumb-phinf.pstatic.net/cover/097/389/09738902.jpg?type=m1&udate=20201020"
        alt="coverImg"
      />
      <Info>
        <Title>파이썬 알고리즘 인터뷰</Title>
        <Recommend>추천 10명 (프론트 3 / 백엔드 7)</Recommend>
        <Rating>평점 4.5</Rating>
      </Info>
    </BookCardWrapper>
  );
};

export default BookCard;

const BookCardWrapper = styled.div`
  display: flex;
  margin-top: 73px;
`;

const CoverImg = styled.img`
  width: 138px;
  height: 156px;
  margin-right: 38px;
`;

const Info = styled.div``;

const Title = styled.h3`
  font-family: AppleSDGothicNeo;
  font-size: 18px;
  font-weight: 900;
  margin-top: 6px;
  margin-bottom: 29px;
`;

const Recommend = styled.span`
  display: block;
  font-family: AppleSDGothicNeo;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 21px;
`;

const Rating = styled.span`
  display: block;
  font-family: AppleSDGothicNeo;
  font-size: 18px;
  font-weight: bold;
`;
