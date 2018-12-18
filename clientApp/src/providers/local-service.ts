import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class LocalService {

    db: SQLiteObject = null;

    constructor(public sqlite: SQLite) { }

    setDatabase(db: SQLiteObject) {
        if (this.db === null) {
            this.db = db;
        }
    }

    createDatabase() {
        this.sqlite.create({
            name: 'data.db',
            location: 'default' // the location field is required
        })
            .then((db) => {
                this.setDatabase(db);
               return  this.createTable();
            })
            .catch(error => {
                console.error(error);
            });
    }

    createTable() {
        let sql = 'CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, login TEXT, password TEXT)';
        return this.db.executeSql(sql, []);
    }

    create(user: any) {
        let sql = 'INSERT INTO users(id, login, password) VALUES(?,?,?)';
        return this.db.executeSql(sql, [user.id, user.login, user.password]);
    }

    delete(id: any) {
        let sql = 'DELETE FROM users WHERE id=?';
        return this.db.executeSql(sql, [id]);
    }

    getAll() {
        let sql = 'SELECT * FROM users';
        return this.db.executeSql(sql, [])
            .then(response => {
                let users = [];
                for (let index = 0; index < response.rows.length; index++) {
                    users.push(response.rows.item(index));
                }
                return Promise.resolve(users);
            })
            .catch(error => Promise.reject(error));
    }

    update(user: any) {
        let sql = 'UPDATE users SET login=?, password=? WHERE id=?';
        return this.db.executeSql(sql, [user.login, user.password, user.id]);
    }
}