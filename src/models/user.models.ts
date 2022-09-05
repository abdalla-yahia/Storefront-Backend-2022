import users from "../types/user.types";
import db from "../databases/database";
import config from '../configration';
import BCrypt from 'bcrypt';


    class UsersModels {
    //Create A New User
    async createUser(u: users) {
        try {
            const conn = await db.connect();
            const sql =
                "INSERT INTO users(firstname,lastname, email,password) VALUES ($1, $2, $3, $4) RETURNING *";
                const resault = await conn.query(sql, [
                u.firstname,
                u.lastname,
                u.email,
                BCrypt.hashSync(`${u.password}${config.pp}`,parseInt(config.salt as string)),
            ]);
            conn.release();
            return resault.rows[0];
        } catch (error) {
            throw new Error("Opps .. Can Not Creat A New User 😲");
        }
    }
    //Get All Users
    async getAllUsers(): Promise<users[]> {
        try {
            const conn = await db.connect();
            const sql = "SELECT * FROM users";
            const resault = await conn.query(sql);
            conn.release();
            return resault.rows;
        } catch (error) {
            throw new Error("Opps .. Can Not Get Any User 😱");
        }
    }

    //Update  User
    async updateteUser(u: users ,id:string): Promise<users> {
        try {
            const conn = await db.connect();
            const sql =
                "UPDATE users SET firstname= $1,lastname=$2, email=$3,password=$4 WHERE id = $5 RETURNING * ";
            const resault = await conn.query(sql, [
                u.firstname,
                u.lastname,
                u.email,
                BCrypt.hashSync(`${u.password}${config.pp}`,parseInt(config.salt as string)),
                id
            ]);
            conn.release();
            return resault.rows[0];
        } catch (error) {
            throw new Error("Opps .. Can Not Update A User 😲");
        }
    }

    //Get User By Id
    async geteUser(id:string): Promise<users[]> {
        try {
            const conn = await db.connect();
            const sql = "SELECT * FROM users  WHERE id = $1";
            const resault = await conn.query(sql, [id ]);
            conn.release();
            return resault.rows;
        } catch (error) {
            throw new Error("Opps .. Can Not Get This User 😲");
        }
    };
    //Delete User
    async deleteUser(id : string): Promise<users[]>{
        try {
            const conn = await db.connect();
            const sql = "DELETE FROM users WHERE id = $1 RETURNING *"
            const resault = await conn.query(sql, [id]);
            conn.release();
            return resault.rows;
        } catch (error) {
            throw new Error("Opps .. Can Not Delete This User 😲");
        }
    }
    //Delete All Users
    async deleteAllUser(): Promise<users[]> {
        try {
            const conn = await db.connect();
            const sql = "DELETE  FROM users  RETURNING *";
            const resault = await conn.query(sql);
            conn.release();
            return resault.rows;
        } catch (error) {
            throw new Error("Opps .. Can Not Delete All Users 😲");
        }
    }

    //Athanticate Users
    async AuthanticateUsers(
        password: string,
        email: string,
        ){
            try {
                const conn = await db.connect();
                const sql = "SELECT password FROM users WHERE email = $1";
                const results = conn.query(sql, [email]);
                if ((await results).rows.length) {
                    const  {password:bcrybtpassword}  = (await results).rows[0];
                    const validationpass = BCrypt.compareSync(
                        `${password}${config.pp}`,
                        bcrybtpassword,
                    );
                    if (validationpass) {
                        const Filnalresault = conn.query(
                            "SELECT * FROM users WHERE email = $1",
                            [email],
                        );
                        conn.release();
                        
                        return (await Filnalresault).rows[0];
                    } else {
                        throw new Error();
                    }
                } else {
                    throw new Error();
                }
            } catch (error) {
                throw new Error("Opps .. This User Or Password Is Not Valid Please try again later 😲");
            }
        }
}


export default UsersModels;