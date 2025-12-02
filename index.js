createLoginTracker(userInfo)
let attemptCount = 0;
//inner function to track login attempts
const attemptlogin = (passwordattempt) => {
  attemptCount++; //increment attempt count on each login attempt
  if (attemptCount > 3) {
    return 'Account locked due to too many failed login attempts.';//lock account after 3 failed attempts
  }
  if (passwordattempt === userInfo.password) {
    attemptCount = 0; //reset attempt count on successful login
    return `Login successful';//successful login message
  } 
    //Return failed login message with attempt count
    return "attempt ${attemptCount}: Login failed
    ";
  }//return the inner function to track login attempts
return attemptlogin;


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};