import { configureStore } from '@reduxjs/toolkit';
import testReducer from '../feauchers/test/testSlise';

const addIdMiddleware = (store) => (next) => (action) => {
  if (action.type === 'test/addFilm') {
    const id = Math.random().toString(16).slice(2, 6);
    action.payload.id = id;
  }
  return next(action);
};

const checkYearMiddleware = (store) => (next) => (action) => {
  if (action.type === 'test/addFilm') {
    const { year } = action.payload;
    const currentYear = new Date().getFullYear();
    if (year < 1950 || year > currentYear) {
      alert('Year must be between 1950 and', currentYear);
      return;
    }
  }
  return next(action);
};

const checkRatingMiddleware = (store) => (next) => (action) => {
  if (action.type === 'test/addFilm') {
    const { rating } = action.payload;
    if (rating < 1 || rating > 10) {
      alert('Rating must be between 1 and 10');
      return;
    }
  }
  return next(action);
};

const checkFilmExistenceMiddleware = (store) => (next) => (action) => {
  if (action.type === 'test/addFilm') {
    const { title, year, rating } = action.payload;
    const films = store.getState().test;
    const filmExists = films.some(
      (film) => film.title === title && film.year === year && film.rating === rating
    );
    if (filmExists) {
      alert('Film already exists');
      return;
    }
  }
  return next(action);
};



export default configureStore({
  reducer: {
    test: testReducer,
  },
  middleware: [
    addIdMiddleware,
    checkYearMiddleware,
    checkRatingMiddleware,
    checkFilmExistenceMiddleware,
  ],
});
