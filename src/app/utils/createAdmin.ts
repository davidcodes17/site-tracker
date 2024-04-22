import bcrypt from "bcryptjs";
import db from "../config/db";
const createAdmin = async () => {
  await db.user.create({
    data: {
      email: "areegbedavid@gmail.com",
      name: "DC",
      password: await bcrypt.hash("123456", 10),
      role:0
    },
  });
};
export default createAdmin;
