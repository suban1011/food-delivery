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

// export function ComparePassword(password, hashedPassword) {
//   try {
//     const comparedPassword = bcrypt.compareSync(password, hashedPassword);

//     // Return result
//     return comparedPassword;
//   } catch (error) {
//     console.log(error);
//   }
// }

export function ComparePassword(password, hashedPassword) {
  try {
    // Validate inputs
    if (!password || !hashedPassword) {
      throw new Error("Both password and hashed password are required.");
    }

    // Compare passwords
    return bcrypt.compareSync(password, hashedPassword);
  } catch (error) {
    console.error("Password comparison error:", error.message);
    return false; // Return false on any error
  }
}
