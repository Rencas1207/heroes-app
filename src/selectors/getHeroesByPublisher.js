import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {
  const validPublishers = ['DC Comics', 'Marvel Comics'];

  // Si no encuentra el publisher entonces =>
  if (!validPublishers.includes(publisher)) {
    throw new Error(`Publisher ${publisher} no encontrado`);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};
