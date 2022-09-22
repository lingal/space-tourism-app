import React, { useState } from 'react';

import {
  DestinationContainer,
  StyledSectionTitle
} from '../components/styles/';
import { sections } from '../utils/constants';

const DestinationPage = () => {
  const [{ destinations }] = sections;
  const [index, setIndex] = useState(0);

  const { name, description, distance, travel } = destinations[index];

  return (
    <main>
      <DestinationContainer>
        <StyledSectionTitle>
          <span>01</span> pick your destination
        </StyledSectionTitle>

        <img
          src={require(`../assets/destination/image-${name.toLocaleLowerCase()}.png`)}
          alt={name}
        />

        <div className="tabs-container">
          {destinations.map((tab, idx) => {
            return (
              <button key={idx}
                onClick={() => setIndex(idx)}
                className={index === idx ? 'selected' : ''}
              >
                {tab.name}
              </button>
            );
          })}
        </div>

        <article>
          <h2>{name}</h2>
          <p>{description}</p>

          <div>
            <div>
              <h3>avg. distance</h3>
              <p>{distance}</p>
            </div>
            <div>
              <h3>est. travel time</h3>
              <p>{travel}</p>
            </div>
          </div>
        </article>
      </DestinationContainer>
    </main>
  );
};

export default DestinationPage;
