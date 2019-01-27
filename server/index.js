const express = require('express')
const app = express()
const port = 9081

app.get('/', (req, res) => res.sendFile(__dirname + "/index.html"))
app.use('/static', express.static('../dist'))
app.listen(port, () => console.log(`Bare Bones React - App is listening on port ${port}!`))