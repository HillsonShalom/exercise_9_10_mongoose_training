import exp, { Express } from 'express'
import 'dotenv/config'
import usersRouter from './routes/users.router'
import missionsRouter from './routes/missions.router'
import connectToMongo from './DAL/mongoConnection'

connectToMongo()

const app: Express = exp()

app.use(exp.json())

app.use('/users', usersRouter)
app.use('/missions', missionsRouter)

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}...`);
})
