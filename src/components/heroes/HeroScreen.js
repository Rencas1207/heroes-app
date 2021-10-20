import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';
import { getHeroById } from '../../selectors/getHeroById';

// import batman from '../../assets/heroes/dc-batman.jpg'; // Estático
import './HeroScreen.css';

export const HeroScreen = ({ history }) => {
  // Aplicamos el custom hook de react-router-dom (useParams)
  // Va extraer los parametros del url
  const params = useParams();
  const { heroeId } = params;

  // Aplicamos useMemo
  // const hero = getHeroById(heroeId);
  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

  // Manejar el error, lo que hago es redireccionarme a MarvelScreen
  if (!hero) {
    return <Redirect to="/" />;
  }

  const handleReturn = () => {
    // Validamos tambien que regrese a su pagina anterior
    if (history.length <= 2) {
      // history.push(`${heroeId.split('-')[0]}`);
      hero.publisher === 'Marvel Comics' && history.push('/');
      hero.publisher === 'DC Comics' && history.push('/dc');
    } else {
      history.goBack();
    }
  };

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  return (
    <div className="hero-container">
      <div className="hero-container-image">
        <img
          // src={`../assets/heroes/${heroeId}.jpg`} // desde public/assets
          // src={batman} // import
          src={heroImages(`./${heroeId}.jpg`).default}
          className="img-thumbnail animate__animated animate__fadeInLeft"
          alt={superhero}
        />
      </div>
      <div className="hero-container-description animate__animated animate__fadeInRight">
        <h3 className="hero-description-title">{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Nombre original:</b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Editor:</b> {publisher}
          </li>
          <li className="list-group-item">
            <b>Primera aparición:</b> {first_appearance}
          </li>
        </ul>

        <h3 className="hero-description-title mt-3">Personajes</h3>
        <p>{characters}</p>
        <div className="btn-container">
          <button className="btn-hero" onClick={handleReturn}>
            Regresar
          </button>
        </div>
      </div>
    </div>
  );
};
