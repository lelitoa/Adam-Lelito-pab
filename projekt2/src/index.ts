import express from 'express'
import {Request, Response} from 'express'
import {Note} from './note'

const app = express()

// const notes: Note[] = []

// // let note = notes.find( note => note.id === 10)

app.use(express.json())

app.get('/', function (req: Request, res: Response) {
  res.send('GET Hello World')
})
app.post('/', function (req: Request, res: Response) {
  console.log(req.body) // e.x. req.body.title 
  res.status(200).send('POST Hello World')
})

app.post('/note', function (req: Request, res: Response) {
  res.send('POST Hello World - note')
})

app.get('/note/:id', function (req: Request, res: Response) {
  res.send('GET Hello World - note')
})

app.put('/note/:id', function (req: Request, res: Response) {
  res.send('PUT Hello World - note')
})

app.delete('/note/:id', function (req: Request, res: Response) {
  res.send('DELETE Hello World - note')
})

app.listen(3000)