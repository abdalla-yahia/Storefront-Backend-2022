
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE orders(id SERIAL PRIMARY KEY,order_name VARCHAR(200) NOT NULL,quantity INTEGER , order_status VARCHAR(200), user_id SERIAL  REFERENCES users(id) );
