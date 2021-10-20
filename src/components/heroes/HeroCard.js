import React from 'react';
import { Link } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';

import './HeroCard.css';

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <Link
      className="card-item animate__animated animate__fadeIn"
      to={`../hero/${id}`}
    >
      <img src={heroImages(`./${id}.jpg`).default} alt={superhero} />
      <div className="description-profile">
        <h5 className="profile-superhero">{superhero}</h5>
        <p className="profile-name">{alter_ego}</p>
      </div>
      <div className="profile-overview">
        <h3>{publisher}</h3>
        <p>
          Primera aparición: <br />
          <span>{first_appearance}</span>
        </p>
        {alter_ego !== characters && <p>{characters}</p>}
      </div>
    </Link>
  );
};
