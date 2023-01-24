import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { itemsList } from '../app/configs';
import { Button } from '../components/Button';
import { types } from '../mockups/home';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <StyledHome>
      <h2>Datasets</h2>
      <div className="itemsContainer">
        {itemsList.map((item) => {
          const { id } = item;
          return (
            <div className="itemContainer" key={item.id}>
              <div className="item">
                <img src={types[id - 1]?.url} />
                <span className="type">Type: {types[id - 1]?.type}</span>
              </div>
              <div className="item">
                <div className="itemInfo">
                  <h3>{item.title}</h3>
                  <span>Last update:</span>
                  <span>17.02.2022</span>
                  <span>14:02:15+01:00</span>
                </div>
                <div className="buttonContainer">
                  <Button onClick={() => navigate(item.url)}>
                    {item.title}
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  background-color: #403b37;
  height: 100vh;
  padding: 5vh;

  h2 {
    color: #fff;
    margin: 0 2vw;
    font-size: 2em;
  }

  img {
    border-radius: 50%;
    height: 20vw;
    width: 20vw;

    @media (min-width: 850px) {
      height: 10vw;
      width: 10vw;
    }
  }

  .itemsContainer {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media (min-width: 850px) {
      flex-direction: row;
    }

    .itemContainer {
      background-color: #fff;
      border-radius: 8px;
      display: flex;
      margin: 2vw;
      width: 100%;

      @media (min-width: 850px) {
        width: 45%;
      }

      :hover {
        background-color: #ccbeb4;
        box-shadow: 5px 5px 5px #292523;
        transition: all ease-in-out 300ms;
      }

      .type {
        margin: 1vw 0;
      }

      .item {
        display: flex;
        flex-direction: column;
        padding: 2vw;
        justify-content: space-between;
        width: 50%;

        .itemInfo {
          display: flex;
          flex-direction: column;

          h3 {
            text-transform: capitalize;

            @media (min-width: 850px) {
              font-size: 1.6em;
            }
          }
        }

        .buttonContainer {
          display: flex;
          justify-content: right;
        }
      }
    }
  }
`;
