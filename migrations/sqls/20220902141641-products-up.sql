
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE products (id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
name VARCHAR(255) NOT NULL, 
price INTEGER NOT NULL, 
category VARCHAR(250) );
