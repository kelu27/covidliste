import places from 'places.js';

const placesAutocomplete = (appId, apiKey) => {
  const addressInput = document.getElementById('user_address');
  const latInput = document.getElementById('user_lat');
  const lonInput = document.getElementById('user_lon');
  const zipcodeInput = document.getElementById('user_zipcode');
  const cityInput = document.getElementById('user_city');
  if (addressInput) {
    let p = places({
      container: addressInput,
      appId: appId,
      apiKey: apiKey,
    }).configure({
      language: 'fr',
      countries: ['fr']
    });
    p.on('change', function(e) {
      let latlng = e.suggestion.latlng;
      latInput.value = latlng['lat'];
      lonInput.value = latlng['lng'];
      zipcodeInput.value = e.suggestion.postcode;
      cityInput.value = e.suggestion.city;
    });
  }
  const addressInputMap = document.getElementById('map_address');
  const latInputMap = document.getElementById('map_lat');
  const lonInputMap = document.getElementById('map_lon');
  if (addressInputMap) {
    let p = places({
      container: addressInputMap,
      appId: appId,
      apiKey: apiKey,
    }).configure({
      language: 'fr',
      countries: ['fr']
    });
    p.on('change', function(e) {
      let latlng = e.suggestion.latlng;
      latInputMap.value = latlng['lat'];
      lonInputMap.value = latlng['lng'];
    });
  }
  const centerAddressInput = document.getElementById('vaccination_center_address');
  const centerLatInput = document.getElementById('vaccination_center_lat');
  const centerLonInput = document.getElementById('vaccination_center_lon');
  if (centerAddressInput) {
    let p = places({
      container: centerAddressInput,
      appId: appId,
      apiKey: apiKey,
    }).configure({
      language: 'fr',
      countries: ['fr']
    });
    p.on('change', function(e) {
      let latlng = e.suggestion.latlng;
      centerLatInput.value = latlng['lat'];
      centerLonInput.value = latlng['lng'];
    });

  }
};

export { placesAutocomplete };
