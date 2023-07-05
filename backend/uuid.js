const crypto = require("crypto");

function generateUniqueId() {
    // Generate a random 4-byte hex string
    const randomBytes = crypto.randomBytes(1).toString('hex');

    // Get the current timestamp in seconds
    const timestamp = Math.floor(Date.now() / 1000);

    // Concatenate the timestamp and random string
    const uniqueId = `${timestamp}${randomBytes}`;

    return uniqueId;
}

const id = generateUniqueId();
