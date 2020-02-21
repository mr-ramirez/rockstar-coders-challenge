import Constants from 'constants';
import HttpService from './httpService';

function determineRating(rating) {
  switch (rating) {
    case 1:
      return [0, 2];

    case 2:
      return [2, 4];

    case 3:
      return [4, 6];

    case 4:
      return [6, 8];
  
    default:
      return [8, 10];
  }
}

export default {
  getImagesConfiguration: () => {
    return HttpService.get(Constants.MovieService.ConfigurationRoute, {})
      .then((response) => ({
        baseUrl: response.images.base_url,
        posterSize: response.images.poster_sizes[5],
      }));
  },
  getGenresList: () => {
    return HttpService.get(Constants.MovieService.GenresRoute, {})
      .then((response) => response.genres);
  },
  discover: (parameters) => {
    const { sortBy, rating } = parameters;
    const ratingLimit = determineRating(rating);

    const query = {
      sort_by: sortBy !== Constants.MovieService.Filters.PopularityDesc
        ? Constants.MovieService.Filters.PopularityAsc
        : Constants.MovieService.Filters.PopularityDesc,

      'vote_average.gte': ratingLimit[0],
      'vote_average.lte': ratingLimit[1],
    };

    return HttpService.get(Constants.MovieService.DiscoverRoute, query)
      .then((response) => response.results.map((result) => ({
        title: result.title,
        description: result.overview,
        genreIds: result.genre_ids,
        image: result.poster_path,
        releaseDate: result.release_date,
        language: result.original_language,
      })));
  },
  search: (parameters) => {
    if (!parameters.value) {
      return [];
    }
    const query = { query: parameters.value };

    return HttpService.get(Constants.MovieService.SearchRoute, query)
      .then((response) => response.results.map((result) => ({
        title: result.title,
        description: result.overview,
        image: result.poster_path,
      })));
  }
};
