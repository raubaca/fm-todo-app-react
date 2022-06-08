export const FILTERS = {
  All: () => true,
  Active: (item) => !item.completed,
  Completed: (item) => item.completed,
};

export const FILTER_LABELS = Object.keys(FILTERS);
