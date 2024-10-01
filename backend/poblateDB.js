
// Insertar datos de ejemplo
const insert = `INSERT INTO users (username, password) VALUES (?, ?)`;

db.run(insert, ['admin', '12345']);
db.run(insert, ['user1', 'password1']);

db.close();


