module.exports = function(api) {
  api.cache(true);

  const loaders = [
    { test: /\.js$/, loader: "babel", query: { compact: false } }
  ];
  return {
    loaders
  };
};
