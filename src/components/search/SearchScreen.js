import React, { useMemo } from 'react';
import queryString from 'query-string';

import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroByName } from '../../selectors/getHeroByName';

import './SearchScreen.css';
// import { heroes } from '../../data/heroes';

export const SearchScreen = ({ history }) => {
  // Custom hook de react-router-dom --> useLocation
  const location = useLocation();

  // Para parsear el location.search Fernando utilizo una libreria de react-router en npm
  // el queryString y desestructuramos solamente lo unico que nos interesa que el q (query)
  // Luego colocamos el q como string vacio para que no nos de el undefined
  const { q = '' } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  // NOTA: PARA REALIZAR LA SEGUNDO Y TERCERA FORMA TUVE QUE ASIGNARLE POR DEFECTO AL NAVBAR EL q = ''

  // SEGUNDA FORMA DE EXTRAER EL SEARCH DEL LOCATION O MEJOR DICHO DEL q
  // const useQuery = () => {
  //   return new URLSearchParams(useLocation().search);
  // };

  // const query = useQuery().get('q');

  // TERCERA FORMA (MENOS CODIGO) --
  // const parms = new URLSearchParams(useLocation().search);
  // const q = parms.get('q');

  // const [formValues, handleInputChange] = useForm({
  //   searchText: q,
  // });

  const { searchText } = formValues;

  const heroesFiltered = useMemo(() => getHeroByName(q), [q]);
  // const heroesFiltered = getHeroByName(searchText);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
    // reset({ searchText: '' });
  };

  return (
    <>
      <h1>Buscar Héroe</h1>
      <hr />

      <div className="search-container animate__animated animate__fadeIn">
        <div className="search-form">
          <h4>Formulario de búsqueda</h4>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Busca tu héroe favorito..."
              className="search-form-input"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn-hero">
              Buscar...
            </button>
          </form>
        </div>
        <div className="search-results">
          <h4>Resultados</h4>
          {q === '' && <div className="alert alert-search">Busca un héroe</div>}
          {q !== '' && heroesFiltered.length === 0 && (
            <div className="alert alert-error">
              No hay un héroe con "{q}", realiza otra búsqueda
            </div>
          )}

          {/* {heroesFiltered.map((hero) => {
            <HeroCard key={hero.id} {...hero} />;
          })} */}
          <div className="filtrado">
            {heroesFiltered.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
