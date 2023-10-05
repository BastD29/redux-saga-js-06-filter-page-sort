import { users } from "../data/users.js";

export const filterUsers = (req, res, next) => {
  const { city, age, name } = req.query;
  // console.log("filters:", { city, age, name });

  const filteredUsers = users.filter(
    (user) =>
      (!city ||
        city === "all" ||
        user.city.toLowerCase() === city.toLowerCase()) &&
      (!age || age === "all" || user.age === parseInt(age)) &&
      (!name || user.name.toLowerCase().includes(name.toLowerCase()))
  );

  // console.log("filtered users:", filteredUsers);
  res.locals.users = filteredUsers;
  next();
};

export const sortUsers = (req, res, next) => {
  const { sort_sortKey = "name", sort_sortOrder = "asc" } = req.query;
  // console.log("sort_sortKey", sort_sortKey);
  // console.log("sort_sortOrder", sort_sortOrder);

  const sortedUsers = res.locals.users.sort((a, b) =>
    sort_sortOrder === "asc"
      ? a[sort_sortKey] > b[sort_sortKey]
        ? 1
        : -1
      : a[sort_sortKey] < b[sort_sortKey]
      ? 1
      : -1
  );

  // console.log("sorted users", sortedUsers);
  res.locals.users = sortedUsers;
  next();
};

//! pourquoi je ne prends pas les params avec req.query?
//! est-ce faisable ?
export const paginateUsers = (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const size = parseInt(req.query.size) || 2;
  const startIndex = (page - 1) * size;
  // console.log("page", page);
  // console.log("size", size);
  // console.log("startIndex", startIndex);

  const paginatedUsers = res.locals.users.slice(startIndex, startIndex + size);

  // console.log("paginated users", paginatedUsers);
  res.locals.paginatedUsers = paginatedUsers;
  res.locals.totalPages = Math.ceil(res.locals.users.length / size);
  next();
};
