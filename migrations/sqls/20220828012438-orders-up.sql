
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE orders (order_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,name VARCHAR(255) NOT NULL,products_id       );
