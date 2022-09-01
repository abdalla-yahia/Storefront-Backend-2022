
import db from '../databases/database';
import product from '../types/product.types';
import order from '../types/Order.types';


    export default class OrdersModels {
        //Create Order
        async createOrder(o: order): Promise<product[]> {
            try {
                const conn = await db.connect();
                const sql = "INSERT INTO orders(order_name,quantity,order_status,user_id) VALUES ($1,$2,$3,$4) RETURNING * ";
                const result = conn.query(sql, [
                    o.order_name,
                    o.quantity,
                    o.order_status,
                    o.user_id
                ])
                conn.release()
                return (await result).rows
            } catch (error) {
                throw new Error('Cant Create Any Order ')
            }
        }
        //Get  Orders of User
        async getOrderOfUser(id:string): Promise<order[]> {
            try {
                const conn = await db.connect();
                const sql = "SELECT firstName, lastName, quantity, order_status FROM users INNER JOIN orders ON users.id=orders.user_id WHERE users.id = $1";
                const result = await conn.query(sql,[id])
                conn.release()
                return result.rows
            } catch (error) {
                throw new Error('Cant Get User ')
            }
        }
        //Delete All Order of All Users
        async deleteOrder(): Promise<order[]> {
            try {
                const conn = await db.connect();
                const sql = "DELETE FROM orders ";
                const result = await conn.query(sql)
                conn.release()
                return result.rows
            } catch (error) {
                throw new Error('Cant Delete Order ')
            }
        }
        //Get All Orders 
        async getAllOrder(): Promise<order[]> {
            try {
                const conn = await db.connect();
                const sql = "SELECT * FROM orders ";
                const result = await conn.query(sql)
                conn.release()
                return result.rows
            } catch (error) {
                throw new Error('Cant Delete Order ')
            }
        }

        //Delete Specific Order
        async deleteSpecificOrder(id:string): Promise<order[]> {
            try {
                const conn = await db.connect();
                const sql = "DELETE FROM orders WHERE id = $1 RETURNING *";
                const result = await conn.query(sql,[id])
                conn.release()
                return result.rows
            } catch (error) {
                throw new Error('Opps..Cant Delete This Order 😬')
            }
        }
    }
