export const getUsers = (req, res) => {
  res.json({
    data: res.locals.paginatedUsers,
    totalPages: res.locals.totalPages,
  });
};

// * to get raw users data
// import { users } from "../data/users.js";

// export const getUsers = (req, res) => {
//   res.json({
//     data: users,
//   });
// };
