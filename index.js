// Simple login tracker for lab
function createLoginTracker(userInfo) {
  let attemptCount = 0;  // Start at 0

  // Return arrow function for login attempts
  return (passwordAttempt) => {
    attemptCount++;  // Add 1 each time

    if (attemptCount > 3) {
      return 'Account locked due to too many failed login attempts';
    } else if (passwordAttempt === userInfo.password) {
      return 'Login successful';
    } else {
      return `Attempt ${attemptCount}: Login failed`;
    }
  };
}

// Test it out
const user = { username: 'testuser', password: 'secret' };
const login = createLoginTracker(user);

console.log(login('wrong'));    // Attempt 1: Login failed
console.log(login('secret'));   // Login successful
console.log(login('wrong'));    // Attempt 1: Login failed (resets? wait no, attempts keep going)
console.log(login('wrong'));    // Attempt 2: Login failed
console.log(login('wrong'));    // Attempt 3: Login failed
console.log(login('secret'));   // Account locked... (since attemptCount is now 5)


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};