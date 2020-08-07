const Database = require('sqlite-async')

function execute(db) {
    // criar as tabelas do banco de dados

    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject TEXT,
            cost TEXT,
            proffy_id INTEGER
        );

        CREATE TABLE IF NOT EXISTS class_schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
    `)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute)

// .then(function () {})

// module.exports = Database.open(__dirname + '/database.sqlite').then(execute)
// const Database = require('./db')
// db.js  -> .js é opcional (referente a linha acima)

// Database.then((db) => {})


// const selectedProffys await db.all("SELECT * FROM proffys")

// const selectedClassesForProffy await db.all(``)