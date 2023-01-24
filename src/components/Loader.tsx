import { FC } from 'react';
import styled from 'styled-components';

export const Loader = () => {
  return (
    <StyledLoader>
      <div className="container">
        <div className="loader" />
      </div>
    </StyledLoader>
  );
};

const StyledLoader = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    width: 100vw;
    position: absolute;

    .loader {
      border: 6px solid rgba(255, 255, 255, 0.7);
      border-top: 6px solid transparent;
      border-radius: 50%;
      width: 5rem;
      height: 5rem;
      animation: spin 0.5s linear infinite;

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
  }
`;
