import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  background-color: var(--secondary-color);
  position: relative;
  min-height: 100%;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1000px) {
    padding: 36px 18px;
  }
  @media (max-width: 500px) {
    padding: 18px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 11px 18px 10px 18px;
  background-color: var(--grey-color);
  color: var(--white-color);
  border-radius: 1px;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 1000px) {
    font-size: 14px;
    padding: 6px 12px 5px 12px;
  }

  @media (max-width: 750px) {
    font-size: 12px;
    padding: 4px 8px 3px 8px;
  }
`;

export const Icon = styled.span`
  display: block;
  width: 40px;
  height: 40px;
  background-color: var(--grey-color);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  svg {
    margin: auto;
    color: var(--white-color);
    font-size: 22px;
    @media (max-width: 1000px) {
      font-size: 18px;
    }
    @media (max-width: 750px) {
      font-size: 14px;
    }
  }

  @media (max-width: 1000px) {
    width: 30px;
    height: 30px;
  }
`;

export const Image = styled.img`
  width: 120px;
  margin-top: 60px;
`;

export const Temp = styled.h2`
  margin-top: 40px;
  font-size: 75px;
  color: #e7e7eb;
  font-weight: 500;

  span {
    font-size: 30px;
    color: #e7e7eb70;
  }
`;

export const Desc = styled.p`
  color: #a09fb1;
  font-size: 20px;
  margin: 50px 0;
  font-weight: 500;
`;

export const Text = styled.span`
  color: #88869d;
  font-size: 11px;
`;

export const Divider = styled.div`
  margin: 0 10px;
  width: 3px;
  height: 3px;
  background-color: #88869d;
  border-radius: 50%;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  color: #88869d;

  svg {
    margin-right: 6px;
  }
`;
