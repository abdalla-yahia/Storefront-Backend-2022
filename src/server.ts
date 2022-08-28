import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import config from './configration';
import errmiddleware from './middlewares/Error.middlwares';
import morgan from 'morgan';
import helmet from 'helmet';
import db from './databases/database';


const app: express.Application = express()
const port = config.ad_port

app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());


app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

db.connect().then(cl => {
    return cl.query('SELECT NOW()').then(res => {
        console.log(res.rows[0]);
    })
})
app.listen(port, function () {
    console.log(`starting app on: ${port}`)
})

app.use(errmiddleware);


