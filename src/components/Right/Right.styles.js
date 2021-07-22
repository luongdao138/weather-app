import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 2.1;
  background-color: var(--primary-color);

  @media (max-width: 1100px) {
    flex: 1;
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Forecast = styled.div`
  display: grid;
  padding: 40px 80px 0 80px;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  margin-bottom: 40px;

  @media (max-width: 700px) {
    padding: 40px;
    margin-bottom: 10px;
  }

  @media (max-width: 500px) {
    padding: 20px;
  }
`;

export const ForecastItem = styled.div`
  background-color: var(--secondary-color);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 12px;

  span {
    color: var(--white-color);
    font-size: 12px;
  }

  img {
    width: 40px;
    margin: 20px 0;
  }
`;

export const Title = styled.h4`
  color: var(--white-color);
  margin-bottom: 20px;
`;

export const Bottom = styled.div`
  padding: 0 80px 0px 80px;
  @media (max-width: 700px) {
    padding: 0 40px 40px 40px;
    grid-gap: 30px;
  }

  @media (max-width: 500px) {
    padding: 0 20px 20px 20px;
    grid-gap: 24px;
  }
`;

export const Hightlight = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));

  @media (max-width: 500px) {
    grid-gap: 24px;
  }
`;

export const HightlightItem = styled.div`
  background-color: var(--secondary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
`;

export const Footer = styled.p`
  color: #a09fb1;
  text-align: center;
  font-size: 11px;
  font-weight: 500;
  margin-top: 40px;

  a {
    color: var(--white-color);
  }
`;

export const SmallText = styled.span`
  color: #e7e7eb;
  font-size: 12px;
`;

export const Info = styled.p`
  font-size: 40px;
  font-weight: 600;
  color: var(--white-color);

  span {
    font-weight: 400;
    font-size: 20px;
  }
  margin: 10px 0;
`;

export const Note = styled.span`
  display: flex;
  align-items: center;
  svg {
    color: #e7e7eb;
    font-size: 22px;
    margin-right: 5px;
  }
`;

export const Percent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const Progress = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--white-color);
  border-radius: 30px;
  height: 7px;
  margin-top: 5px;

  span {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    display: block;
    width: ${({ width }) => width};
    background-color: #ffec65;
    border-radius: 30px;
  }
`;
