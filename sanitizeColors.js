import { readFile, writeFile } from "fs";

function sanitizeColor(initialColorSql) {
  let colorSqlString = initialColorSql.replace(/'/g, "''");
  let singleQuoteColorString = colorSqlString.replace(/"/g, "'");
  writeFile('./colors.sql', singleQuoteColorString, err => {if (err) console.error(err)})
}

readFile('./wrongly-quoted-colors.sql','utf8', (err, data) => {
  sanitizeColor(data);
})