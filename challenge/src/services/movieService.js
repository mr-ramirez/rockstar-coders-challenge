import Constants from 'constants';
import HttpService from './httpService';

export default {
  getImagesConfiguration: () => {
    return HttpService.get(Constants.MovieService.ConfigurationRoute, {})
      .then((response) => ({
        baseUrl: response.images.base_url,
        posterSize: response.images.poster_sizes[5],
      }));
  },
  discover: (parameters) => {
    const { sortBy } = parameters;

    const query = {
      sort_by: sortBy !== Constants.MovieService.Filters.PopularityDesc
        ? Constants.MovieService.Filters.PopularityAsc
        : Constants.MovieService.Filters.PopularityDesc,
    };

    return HttpService.get(Constants.MovieService.DiscoverRoute, query)
      .then((response) => response.results.map((result) => ({
        title: result.title,
        description: result.overview,
        image: result.poster_path,
      })));
  },
  search: (parameters) => {
    const query = { query: parameters.value || '' };

    return HttpService.get(Constants.MovieService.SearchRoute, query)
      .then((response) => response.results.map((result) => ({
        title: result.title,
        description: result.overview,
        image: result.poster_path,
      })));
  }
};
