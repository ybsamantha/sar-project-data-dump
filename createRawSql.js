import { appendFile, unlink, writeFile } from 'fs';
import fetch from 'node-fetch';

let productList = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json')

const products = await productList.json()

function createSQLquery(list) {

    unlink('./wrongly-quoted-products.sql', err => { if (err) console.info(err) })
    list.forEach(product => {
        product.product_colors.forEach(color => {
            appendFile('./wrongly-quoted-colors.sql', `INSERT INTO color(product_id, hex_value, colour_name) values(${product.id}, "${color.hex_value}", "${color.colour_name}");\n`, (err) => {
                if (err) {
                    console.error(err)
                }
            })
        })

        appendFile('./wrongly-quoted-products.sql', `INSERT INTO product (id, brand, product_name, price, website_link, tags,image_link, product_description, product_type) values("${product.id}","${product.brand}","${product.name}","${product.price}","${product.website_link}", "${product.tag_list}","${product.image_link}","${product.description}","${product.product_type}");\n`, (err) => {
            if (err) {
                console.error(err)
            }

        })

    })
}



createSQLquery(products)