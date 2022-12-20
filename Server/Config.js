module.exports = {
    dev: {
        connectionString: "postgresql://postgres:docker@127.0.0.1:5432/######",
        port: 5000,
    },
    production: {
        connectionString: "process.env.POSTGRES_CONNECTION_STRING + ?ss1=true",
        port: process.env.PORT,
    },
};