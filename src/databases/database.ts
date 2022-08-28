import { Pool } from "pg";
import config from '../configration';


const pool = new Pool({
    user: config.user,
    database: config.database,
    host: config.host,
    port: config.port,
    password:config.password
})

export default pool;