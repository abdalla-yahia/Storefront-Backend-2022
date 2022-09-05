/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Request, Response, NextFunction } from 'express';
import config from './configration';
import morgan from 'morgan';
import helmet from 'helmet';
import router from './routes';
import db from './databases/database';
import cors from 'cors';
import Error from "./types/Error.types";

const app: express.Application = express()
const port = config.ad_port

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

app.get('/', function (_req: Request, res: Response,next:NextFunction) {
   try {
     res.send('Hello World! 😀')
} catch (error) {
    next(error)
}
})

//For test db only
db.connect().then(cl => {return cl.query('SELECT NOW()').then(res => console.log(res.rows))})
app.use(router);

app.use((_req: Request, res: Response, next: NextFunction) => {
    throw new Error()
})
app.listen(port, function () {
    // eslint-disable-next-line no-console
    console.log(`starting app on: ${port}`)
})
//Error Handling
app.use(async (err:Error, req: Request, res: Response , next : NextFunction) => {
    res.status(401).json({
        message:"Oops.. something went wrong. Please make sure this path exists 🙄!!"
    })
});

export default app;