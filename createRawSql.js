import { appendFile, unlink, writeFile } from 'fs';
import fetch from 'node-fetch';

let productList = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json')

const products = await productList.json()

function createSQLquery(list) {
    unlink('./wrongly-quoted-products.sql', err => { if (err) console.info(err) })
    list.forEach(product => {
        appendFile('./wrongly-quoted-products.sql', `INSERT INTO product (id, brand, product_name, price, website_link, tags) values("${product.id}","${product.brand}","${product.name}","${product.price}","${product.website_link}", "${product.tag_list}");\n`, (err) => {
            if (err) {
                console.error(err)
            }
        })
    })
}



createSQLquery(products)