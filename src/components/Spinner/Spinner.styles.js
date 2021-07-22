import styled from 'styled-components';

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid var(--grey-color);
  border-top: 5px solid var(--secondary-color);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 70px auto;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
