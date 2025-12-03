function createLoginTracker(userInfo) {
  let attemptCount = 0;

  // Inner function (closure) that tracks login attempts
  const attemptLogin = (passwordAttempt) => {
    attemptCount++; // Increment on every attempt

    // Lock account after 3 failed attempts
    if (attemptCount > 3) {
      return 'Account locked due to too many failed login attempts.';
    }

    // Successful login
    if (passwordAttempt === userInfo.password) {
      attemptCount = 0; // Reset counter on success
      return 'Login successful';
    }

    // Failed attempt — show remaining attempts
    const remaining = 3 - attemptCount;
    return `Attempt ${attemptCount}: Login failed. ${remaining} attempt(s) remaining.`;
  };

  return attemptLogin; // Return the function so it can be used later
}

// Proper export for Node.js/CommonJS
module.exports = {
  createLoginTracker
};