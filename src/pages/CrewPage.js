import React, { useState } from 'react';
import { sections } from '../utils/constants';
import { StyledSectionTitle } from '../components/styles';

const CrewPage = () => {
  const [{ crew }] = sections;
  const [index, setIndex] = useState(0);

  const { name, role, bio } = crew[index];

  const [firstName, lastName] = name.split(' ');

  return (
    <section>
      <StyledSectionTitle>
        <span>02</span> meet your crew
      </StyledSectionTitle>
      <img
        src={require(`../assets/crew/image-${firstName.toLocaleLowerCase()}-${lastName.toLocaleLowerCase()}.png`)}
        alt=""
      />
      <div className="dot-indicators"></div>
    </section>
  );
};

export default CrewPage;
