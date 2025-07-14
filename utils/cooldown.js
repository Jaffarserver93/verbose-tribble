const cooldowns = new Map();

module.exports = {
    checkCooldown: (commandName, userId) => {
        const key = `${commandName}_${userId}`;
        const now = Date.now();
        const cooldownDuration = 5 * 1000; // 5 seconds

        if (cooldowns.has(key)) {
            const expiration = cooldowns.get(key);
            if (now < expiration) {
                return { onCooldown: true, timeLeft: Math.ceil((expiration - now) / 1000) };
            }
        }

        cooldowns.set(key, now + cooldownDuration);
        setTimeout(() => cooldowns.delete(key), cooldownDuration);
        return { onCooldown: false };
    },
};