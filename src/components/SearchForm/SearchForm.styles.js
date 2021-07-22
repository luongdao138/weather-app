import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: var(--secondary-color);
  transition: all 0.3s ease-in-out;
  transform: ${({ isOpenSearchForm }) =>
    isOpenSearchForm ? 'scaleX(1)' : 'scaleX(0)'};
  transform-origin: 0 0;
`;
export const Content = styled.div`
  padding: 60px 30px;

  @media (max-width: 1000px) {
    padding: 60px 18px;
  }
`;

export const CloseIcon = styled.span`
  position: absolute;
  top: 15px;
  right: 40px;
  color: var(--white-color);
  font-size: 24px;
  cursor: pointer;
`;

export const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  position: relative;
`;

export const SearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 14px;
  color: #616475;
  @media (max-width: 1000px) {
    left: 8px;
  }
`;

export const Input = styled.input`
  flex: 1;
  margin-right: 10px;
  background-color: transparent;
  border: 1px solid #e7e7eb;
  padding: 12px 12px 12px 40px;
  color: var(--white-color);
  font-weight: 500;

  @media (max-width: 1000px) {
    padding: 6px 6px 6px 30px;
  }

  @media (max-width: 800px) {
    padding: 4px 4px 4px 30px;
  }
`;

export const Button = styled.button`
  background-color: #3c47e9;
  color: var(--white-color);
  font-size: 12px;
  font-weight: 500;
  padding: 12px 15px;
`;

export const Locations = styled.div`
  width: 100%;
  margin-top: 30px;
  overflow-y: auto;
  max-height: 400px;
  padding-right: 10px;

  &::-webkit-scrollbar {
    display: block;
  }
  &::-webkit-scrollbar-track {
    background-color: #616475;
    border-radius: 40px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--primary-color);
    border-radius: 10px;
  }
`;

export const Location = styled.div`
  margin-bottom: 20px;
  padding: 18px 12px;
  border: 1px solid transparent;
  transition: all 0.25s;
  color: var(--white-color);
  font-size: 14px;
  font-weight: 500;
  border-radius: 2px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  :hover {
    border: 1px solid #616475;
  }

  :hover svg {
    opacity: 1;
    visibility: visible;
  }

  svg {
    opacity: 0;
    visibility: hidden;
    transition: all 0.25s;
  }

  :last-child {
    margin-bottom: 0;
  }
`;

export const NoResult = styled.p`
  text-align: center;
  color: var(--white-color);
  margin-top: 40px;
  font-size: 14px;
  font-weight: 500;
`;
