import bcrypt from "bcrypt";

export function HashPassword(password) {
  try {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
}

export function ComparePassword(password, hashedPassword) {
  try {
    const comparedPassword = bcrypt.compareSync(password, hashedPassword);
    return comparedPassword;
  } catch (error) {
    console.log(error);
  }
}
