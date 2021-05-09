function getUrlFromEnv() {
    const user = 'noni';
    const password = 'qwertynoni';
    if (password === undefined) {
        throw new Error("MONGODB_PASSWORD env variable is not set");
    }
    if (user === undefined) {
        throw new Error("MONGODB_USER env variable is not set");
    }

    return `mongodb+srv://${user}:${password}@cluster0.jcji8.mongodb.net/weatherdb?retryWrites=true&w=majority`;
}

module.exports = {
    url: getUrlFromEnv()
};
