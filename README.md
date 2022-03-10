# makeup data dump 💩

1. Download dependencies (we're using `node-fetch` to reach out to the API).

```
npm install
```

2. Run the script to create the unformatted SQL file. 

```
node createRawSql.js
```
  
After running this script, there should be a file called `wrongly-quoted-products.sql` in the project directory.

3. Run the script to format the SQL file properly - the output of the last script gives us double quotes that SQL does not like.

```
node sanitizeQuotes.js
```

After running this script, there should be a file called `products.sql` in the project directory. The output is what is known as DDL.

4. To create a table named `product` within the database where you'd like to store the makeup products, modify the `./createProductTable.sql` file within this project with the appropriate field names and data types for your needs.

5. To seed the database, first execute the DML script, found in `./createProductTable.sql`. It's also possible that there is a Django model option here that would eliminate the need to run this file but you all will need to research that.

6. Then, execute the DDL script which should be in `./products.sql`. Again, there could be a fun Django way to make this happen but I don't see a way around having to run this script to get those products in the database.

7. Have fun and, at all times, work to identify and eliminate [scope creep](https://en.wikipedia.org/wiki/Scope_creep). If you do those two things, you'll be just fine 😀