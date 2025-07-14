const mongoose = require('mongoose');

const userCooldownSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    guildId: { type: String, required: true },
    lastReviewTimestamp: { type: Date, default: null },
});

module.exports = mongoose.model('UserCooldown', userCooldownSchema);