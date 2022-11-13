const express = require('express')
const userRouter = require('./routes/user.routes')
const PORT = process.env.PORT  || 8888

const app = express()

// app.get('/', (req, res) => {
//     res.send('HELLO!!!')
// })
app.use(express.json())
app.use('/api', userRouter)

app.listen(PORT, () => console.log('Server has been started on port $1', [PORT]))