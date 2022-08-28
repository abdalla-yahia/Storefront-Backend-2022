import dotenv from 'dotenv';



dotenv.config()
const {
    PORT,
    Main_Env,
	Database_user,
	Database_host,
	Database_port,
	Database_name,
	Database_name_test,
	Database_password,
} = process.env;



export default {
    ad_port: PORT,
    user: Database_user,
    host: Database_host,
    port:parseInt( Database_port as string),
    database: Main_Env == "dev" ? Database_name : Database_name_test,
    password:Database_password
};