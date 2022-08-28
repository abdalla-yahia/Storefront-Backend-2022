
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE users (id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,firstName VARCHAR(255) NOT NULL, lastName VARCHAR(250), password VARCHAR(200) NOT NULL );
