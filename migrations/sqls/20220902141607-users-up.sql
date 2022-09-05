CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE users(
        id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
        firstname VARCHAR(255) NOT NULL,
        lastname VARCHAR(250) NOT NULL,
        email VARCHAR (60) UNIQUE,
        password VARCHAR(200) NOT NULL
                    );
