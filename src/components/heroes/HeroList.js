import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

import './HeroCard.css';

export const HeroList = ({ publisher }) => {
  // const heroes = getHeroesByPublisher(publisher);

  //Aplicamos useMemo (primer parametro la funcion y el segundo el publisher (DC, MARVEL))
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  // let extraClass = '';

  // const setFadeOut = (param) => {
  //   param
  //     ? (extraClass = 'animate__fadeOut')
  //     : (extraClass = 'animate__fadeIn');
  // };

  // setFadeOut(false);

  return (
    // <div className={'card-list animate__animated' + extraClass}>
    <div className="card-list animate__animated animate__fadeIn">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
        // <HeroCard key={hero.id} {...hero} setFadeOut={setFadeOut} />1
      ))}
    </div>
  );
};
