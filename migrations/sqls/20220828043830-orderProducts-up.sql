

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE orderProducts (
    id SERIAL PRIMARY KEY,
     quantity INTEGER ,
      order_id BIGINT  REFERENCES orders(id),
      product_id BIGINT REFERENCES products(id) );
