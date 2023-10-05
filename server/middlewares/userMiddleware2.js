import { users } from "../data/users.js";

export const paginateUsers = (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const size = parseInt(req.query.size) || 2;
  const startIndex = (page - 1) * size;
  res.locals.paginatedUsers = users.slice(startIndex, startIndex + size);
  res.locals.totalPages = Math.ceil(users.length / size);
  next();
};
