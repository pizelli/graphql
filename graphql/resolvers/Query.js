const { users } = require("../data/db");

module.exports = {
  user: (_, { id }) => users[id],
  users() {
    return users;
  },
  horaCerta: () => new Date().toLocaleString(),
};
