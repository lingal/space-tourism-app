import React, { useState } from 'react';
import {
  TechnologyContainer,
  StyledMain,
  StyledSectionTitle
} from '../components/styles';
import { sections } from '../utils/constants';

const TechnologyPage = ({ data }) => {
  const [{ technology }] = sections;
  const [index, setIndex] = useState(0);

  const { name, description } = technology[index];

  const [word1, word2] = name.split(' ');

  return (
    <StyledMain>
      <TechnologyContainer>
        <StyledSectionTitle>
          <span>03</span> space launch 101
        </StyledSectionTitle>

        <img
          src={require(`../assets/technology/image-${
            word2
              ? word1.toLocaleLowerCase() + '-' + word2.toLocaleLowerCase()
              : word1.toLocaleLowerCase()
          }-${data ? 'landscape' : 'portrait'}.jpg`)}
          alt={name}
        />

        <div className="numbered-indicators">
          {technology.map((_, idx) => {
            return (
              <button
                key={idx}
                onClick={() => setIndex(idx)}
                className={index === idx ? 'selected' : ''}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
        <article>
          <h2>the terminology...</h2>
          <p>{name}</p>
          <p>{description}</p>
        </article>
      </TechnologyContainer>
    </StyledMain>
  );
};

export default TechnologyPage;
