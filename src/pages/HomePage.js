import React from 'react';
import { HomeContainer } from '../components/styles/Home.styled';
import { StyledMain } from '../components/styles/Main.styled';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <StyledMain>
      <HomeContainer>
        <div>
          <h1>
            So, you want to travel to <br />
            <span>Space</span>
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <button>
          <Link to="/destination">Explore</Link>
        </button>
      </HomeContainer>
    </StyledMain>
  );
};

export default HomePage;
