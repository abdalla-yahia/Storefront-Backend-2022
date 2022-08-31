
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE orders(id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,order_name VARCHAR(200) NOT NULL,quantity INTEGER , order_status VARCHAR(200), user_id uuid DEFAULT uuid_generate_v4()  REFERENCES users(id) );
