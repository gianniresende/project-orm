const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

const model = require('./src/models/index')

const people = require('./src/routes/people')

app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static('public'))

app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('index'))
app.use('/people', people)

model.sequelize.sync().then(() => {
  app.listen(port, () => console.log('App listening...'))
})

