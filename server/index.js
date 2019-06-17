const express = require('express')
const path = require('path')
const app = express()
const port = 9081

let custPath = path.join(__dirname, '../');
app.get('/', (req, res) => res.sendFile(custPath + "/index.html"))
app.use('/static', express.static('./dist'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))