import { readFile, writeFile } from "fs";

function sanitizeSql(initialSql) {
    let sqlString = initialSql.replace(/'/g, "''");
    let singleQuotedSqlString = sqlString.replace(/"/g, "'");
    writeFile('./products.sql', singleQuotedSqlString, err => {if (err) console.error(err)})
}

readFile('./wrongly-quoted-products.sql','utf8', (err, data) => {
    sanitizeSql(data);
})

