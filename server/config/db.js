const mysql = require("mysql");

class Database {
    constructor() {
        this.connection = mysql.createPool({
            host: "localhost",
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DB,
        });
        this.connection.getConnection((err) => {
            if (err) {
                console.log(err);
                console.log("Something went wrong");
            } else {
                console.log("Database connected");
            }
        });
    }

    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

    close() {
        return new Promise((resolve, reject) => {
            this.connection.end((err) => {
                if (err) return reject(err);
                resolve();
            });
        });
    }
}

module.exports = new Database();
