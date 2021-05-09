
function getApiKeyFromEnv() {
    return '959ff036391e56de6e56139562a2cec7';
}

module.exports = {
    url: "https://api.openweathermap.org/data/2.5/weather",
    apiKey: getApiKeyFromEnv()
};