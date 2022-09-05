
import db from '../databases/database';
import orderProducts from '../types/orderProducts.types';


    class OrderProducts {
    //Create A New OrderProducts
    async createOrderProducts(or:orderProducts): Promise<orderProducts> {
        try {
            const conn = await db.connect()
            const sql = "INSERT INTO orderProducts (quantity,order_id,product_id) VALUES ($1,$2,$3) RETURNING *";
            const res = await conn.query(sql, [
                or.quantity,
                or.order_id,
                or.product_id,
            ])
            conn.release()
            return res.rows[0]
        } catch (error) {
            throw new Error('Cant Create OrderProducts ')
        }
    }
    //Get OrderProducts
    async getOrderProducts(id:string) :Promise<orderProducts[]> {
        try {
            const conn = await db.connect()
            const sql = ['SELECT name, price, category, order_id,product_id FROM products JOIN orderProducts ON products.id = orderProducts.product_id WHERE orderProducts.order_id = $1 ', 'SELECT order_name, order_status,user_id,orders.quantity FROM orders INNER JOIN orderProducts ON orders.id = orderProducts.order_id WHERE orders.id = $1']
            const res = await conn.query(sql[0],[id])
            const res1 = await conn.query(sql[1],[id])
            conn.release()
            const resault = [...res.rows, ...res1.rows];
            return resault
        } catch (error) {
            throw new Error('Can Not Get OrderProducts ')
        }
    }
    //Delete Order Products
    async deleteOrderProducts(id:string): Promise<orderProducts[]> {
        try {
            const conn = await db.connect()
            const sql = 'DELETE FROM orderProducts WHERE order_id = $1 RETURNING *'
            const res = await conn.query(sql,[id])
            conn.release()
            return res.rows
        } catch (error) {
            throw new Error('Can Not Delete This OrderProducts ')
        }
    }
    //Delete All Order Products
    async deleteAllOrderProducts(): Promise<orderProducts[]> {
        try {
            const conn = await db.connect()
            const sql = 'DELETE FROM orderProducts RETURNING * '
            const res = await conn.query(sql)
            conn.release()
            return res.rows
        } catch (error) {
            throw new Error('Cant Delete All OrderProducts ')
        }
    }
    //Get All Order Products
    async getAllOrderProducts(): Promise<orderProducts[]> {
        try {
            const conn = await db.connect()
            const sql = 'SELECT * FROM orderProducts  '
            const res = await conn.query(sql)
            conn.release()
            return res.rows
        } catch (error) {
            throw new Error('Cant Get All OrderProducts 😏')
        }
    }
}

export default OrderProducts;