import * as mysql from "mysql2/promise";
export const pool = mysql.createPool({
    host:'sql7.freesqldatabase.com',
    user:'sql7804775',
    password:'ubnQxYw8mA',
    database: 'sql7804775'
});
