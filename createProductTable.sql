CREATE TABLE product(id int UNIQUE, brand VARCHAR(150), product_name VARCHAR(150), price NUMERIC, website_link VARCHAR(150), tags VARCHAR(150), image_link VARCHAR, product_description VARCHAR(4000), product_type VARCHAR(150));

CREATE TABLE color(product_id int REFERENCES product (id), hex_value VARCHAR(7), colour_name VARCHAR(150), color_id SERIAL PRIMARY KEY);