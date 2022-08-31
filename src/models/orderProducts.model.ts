import order from "../types/Order.types";
import db from '../databases/database';
import orderProducts from '../types/orderProducts.types';


export default class OrderProducts {
    async createOrderProducts(or:orderProducts): Promise<orderProducts[]> {
        try {
            const conn = await db.connect()
            const sql = "INSERT INTO orderProducts (quantity,order_id,product_id,users_id) VALUES ($1,$2,$3,$4) RETURNING *";
            const res = await conn.query(sql, [
                or.quantity,
                or.order_id,
                or.product_id,
                or.user_id
            ])
            conn.release()
            return res.rows
        } catch (error) {
            throw new Error('Cant Create OrderProducts ')
        }
    }

    async getOrderProducts(id:string): Promise<orderProducts[]> {
        try {
            const conn = await db.connect()
            const sql = 'SELECT * FROM products INNER JOIN orderProducts ON products.id = orderProducts.product_id WHERE orderProducts.id=$1'
            const res = await conn.query(sql,[id])

            conn.release()
            return res.rows
        } catch (error) {
            throw new Error('Cant Get OrderProducts ')
        }
    }
    async getAllOrderProducts(): Promise<orderProducts[]> {
        try {
            const conn = await db.connect()
            const sql = 'SELECT * FROM products INNER JOIN orderProducts ON products.id = orderProducts.product_id '
            const res = await conn.query(sql)

            conn.release()
            return res.rows
        } catch (error) {
            throw new Error('Cant Get Any OrderProducts ')
        }
    }
}