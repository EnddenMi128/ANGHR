// Authentication utility functions

/**
 * Function to check if the password meets the required criteria.
 * @param {string} password - The password to check.
 * @returns {boolean} - True if the password is valid, false otherwise.
 */
function isPasswordValid(password) {
    const minLength = 8;
    const hasNumber = /[0-9]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    return password.length >= minLength && hasNumber && hasUpperCase && hasLowerCase;
}

/**
 * Function to encrypt a password.
 * @param {string} password - The plaintext password to encrypt.
 * @returns {string} - The encrypted password.
 */
function encryptPassword(password) {
    // Note: This is a placeholder for actual encryption logic.
    return `encrypted-${password}`;
}

/**
 * Function to compare a plaintext password with an encrypted password.
 * @param {string} password - The plaintext password to compare.
 * @param {string} hashedPassword - The encrypted password to compare against.
 * @returns {boolean} - True if the passwords match, false otherwise.
 */
function comparePassword(password, hashedPassword) {
    return hashedPassword === encryptPassword(password);
}

// Exporting the utility functions for use in other modules.
module.exports = { isPasswordValid, encryptPassword, comparePassword };