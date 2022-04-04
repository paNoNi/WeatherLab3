function getUrlFromEnv() {
    const user = 'noni';
    const password = 'qwertynoni';

    return `mongodb+srv://${user}:${password}@cluster0.jcji8.mongodb.net/weatherdb?retryWrites=true&w=majority`;
}

module.exports = {
    url: process.env.DB_URL
};
