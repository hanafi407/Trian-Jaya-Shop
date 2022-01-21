import bcrypt from 'bcryptjs'

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Hanafi Aji",
    email: "hanafi@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Dimas Andrianto",
    email: "dimas@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
];

export default users