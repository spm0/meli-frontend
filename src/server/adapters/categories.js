const filtersAdapter = (filters) =>
  filters.map((filter) =>
    !!filter.values ? filter.values[0].name : filter.name
  );

module.exports = { filtersAdapter };
