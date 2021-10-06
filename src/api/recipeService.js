import API from './apiHandler';

export const fetchRecipeDetails = () =>
  API.get(
    'https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json',
  )
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(`data ::::`, JSON.stringify(error));
      return error;
    });

export const fetchRecipeImage = () =>
  API.get(
    'https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json',
  )
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(`data ::::`, JSON.stringify(error));
      return error;
    });
