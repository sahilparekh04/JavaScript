// try is where we define suspected code that kind of code who can might be genrate error
// catch is where we catch the error that occur in try block
// finally run no matter try or catch both genrate error so we can perform action like file close and file log

// Custom Error using throw statment using new error object in that object we have name, message and stack property
function User(user) {
  try {
    if (!user) {
      throw new Error("0 is Grater than 1 Error");
    }
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack); // Show case where happend
  } finally {
    console.log("Runs No Matter What!");
  }
}
User("");
