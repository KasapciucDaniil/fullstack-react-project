const express = require('express')
const config = require('config')
const path = require('path');
const mongoose = require('mongoose')

const app = express()

app.use(express.json({ extended: true }))
app.use(express.static("public"))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/note', require('./routes/note.routes'))

const PORT = config.get('port') || 5000

//здесь наше приложение отдаёт статику
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

//обслуживание html
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server error', e.message)
    process.exit(1)
  } 
}

start()