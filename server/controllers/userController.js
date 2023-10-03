export const getUsers = (req, res) => {
  res.json({
    data: res.locals.paginatedUsers,
    totalPages: res.locals.totalPages,
  });
};
