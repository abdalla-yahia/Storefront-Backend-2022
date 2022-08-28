

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE orderProducts (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
     quantity INTEGER ,
      order_id uuid DEFAULT uuid_generate_v4()  REFERENCES orders(id),
      product_id uuid DEFAULT uuid_generate_v4() REFERENCES products(id),
       users_id uuid DEFAULT uuid_generate_v4() REFERENCES users(id) );
