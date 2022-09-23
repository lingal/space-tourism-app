import React, { useState } from 'react';
import { sections } from '../utils/constants';
import { CrewContainer, StyledSectionTitle } from '../components/styles';

const CrewPage = () => {
  const [{ crew }] = sections;
  const [index, setIndex] = useState(0);

  const { name, role, bio } = crew[index];

  const [firstName, lastName] = name.split(' ');

  return (
    <main>
      <CrewContainer>
        <StyledSectionTitle>
          <span>02</span> meet your crew
        </StyledSectionTitle>
        <div>
          <img
            src={require(`../assets/crew/image-${firstName.toLocaleLowerCase()}-${lastName.toLocaleLowerCase()}.png`)}
            alt=""
          />
        </div>

        <div className="dot-indicators">
          {crew.map((_, idx) => {
            return (
              <button
                key={idx}
                onClick={() => setIndex(idx)}
                className={index === idx ? 'selected' : ''}
              ></button>
            );
          })}
        </div>

        <article>
          <h2>{role}</h2>
          <p>{name}</p>

          <p>{bio}</p>
        </article>
      </CrewContainer>
    </main>
  );
};

export default CrewPage;
