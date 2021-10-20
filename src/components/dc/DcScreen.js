import React from 'react';
import { HeroList } from '../heroes/HeroList';

export const DcScreen = () => {
  return (
    <>
      <h1>Héroes de DC</h1>
      <hr />
      <HeroList publisher="DC Comics" />
    </>
  );
};
