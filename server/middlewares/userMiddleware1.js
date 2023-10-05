import { users } from "../data/users.js";

export const filterUsers = (req, res, next) => {
  const { city, age, name } = req.query;
  res.locals.users = users.filter(
    (user) =>
      (!city ||
        city === "all" ||
        user.city.toLowerCase() === city.toLowerCase()) &&
      (!age || age === "all" || user.age === parseInt(age)) &&
      (!name || user.name.toLowerCase().includes(name.toLowerCase()))
  );
  next();
};

export const sortUsers = (req, res, next) => {
  const { sortField = "name", sortOrder = "asc" } = req.query;
  res.locals.users.sort((a, b) =>
    sortOrder === "asc"
      ? a[sortField] > b[sortField]
        ? 1
        : -1
      : a[sortField] < b[sortField]
      ? 1
      : -1
  );
  next();
};

export const paginateUsers = (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const size = parseInt(req.query.size) || 2;
  const startIndex = (page - 1) * size;
  res.locals.paginatedUsers = res.locals.users.slice(
    startIndex,
    startIndex + size
  );
  res.locals.totalPages = Math.ceil(res.locals.users.length / size);
  next();
};
