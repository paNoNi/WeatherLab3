function getApiKeyFromEnv() {
    const apiKey = '959ff036391e56de6e56139562a2cec7';
    if (apiKey === undefined) {
        throw new Error("OPENWEATHERMAP_KEY env variable is not set")
    }

    return apiKey;
}

module.exports = {
    url: "https://api.openweathermap.org/data/2.5/weather",
    apiKey: getApiKeyFromEnv()
};