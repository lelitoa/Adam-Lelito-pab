import express from 'express'
import {Request, Response} from 'express'
import Note from "../classes/note";
import Repository from "../classes/repository";
import Storage from "../classes/storage";
import Tag from "../classes/tag";
import User from "../classes/user";
import jwt from "jsonwebtoken";
import { MongoClient } from "mongodb";

const url = 'mongodb://localhost:3000';
const client = new MongoClient(url);
const dbName = 'Notes';
const app = express();

async function  main() {
  await client.connect();
  console.log("Connected with server");
  const db = client.db(dbName);
  const collection = db.collection('documents');

  return "done."
}

main ()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

const repo: Repository = new Repository();
let loggedInUser = new User();
const secret = "test";

let storage: Storage;
repo.readStorage().then((el) => {
  if (el) {
    storage = JSON.parse(el);
  }else {
    storage = new Storage()
  }
});

app.use(express.json());





// import express from 'express'
// import {Request, Response} from 'express'
// import {Note} from './note'
// import {Tag} from './tag'
// import {v4 as uuidv4} from 'uuid'
// import { parse } from 'path'
// import { create } from 'domain'
// import { unwatchFile } from 'fs'
// import fs from 'fs'

// const app = express()

// const notes: Note[] = []
// const tags: Tag[] = []

// // // let note = notes.find( note => note.id === 10)

// app.use(express.json())

// app.post('/note', function (req: Request, res: Response) {
//   const title = req.body.title
//   const content = req.body.content
//   let createDate = req.body.createDate
//   const date_ob = new Date().toISOString();
//   const note = req.body;

//   if (createDate === undefined) {
//     createDate = date_ob
//   }

//   if (title === undefined) {
//     res.status(400).send('Podaj poprawny tytul!')
//     console.log("Podaj poprawny tytul!")
//   }

//   if (content === undefined) {
//     res.status(400).send('Podaj poprawna tresc!')
//     console.log("Podaj poprawna tresc!")
//   }

//   const noteId = uuidv4()
//   const noteFinish = { ...note, id: noteId, createDate: createDate }
//   notes.push(noteFinish)

//   console.log(noteFinish)
//   res.status(201).send(noteFinish)
//   console.log(notes)
// })

// app.get('/notes', function (req: Request, res: Response) {
//   const jsonData = JSON.stringify(notes)
//   const data = fs.writeFile("./data/data.json", jsonData, function (err) {
//     if (err) {
//       res.status(400).send("Nie mozna pobrac listy")
//     }
//   })
//   res.status(200).send(data)
// })

// app.get('/note/:id', function (req: Request, res: Response) { // getting single note by id
//     const id = req.params.id
//     const result = notes.find(el => el.id === id)

//     if (result) {
//         res.status(200).send(result)
//         console.log(result)
//     }
//     else {
//         res.status(404).send("Notatka nie istnieje")
//     }

// })

// app.put('/note/:id', function (req: Request, res: Response) {
//   const id = req.params.id
//   const changeNote = req.body
//   const title = req.body.title
//   const content = req.body.content

//   const result = notes.find(el => el.id === id)
//   const index = notes.indexOf(result!, 0);

//   if (title === undefined) {
//     res.status(404).send('Podaj poprawny tytul!')
//     console.log("Podaj poprawny tytul!")
//   }

//   if (content === undefined) {
//     res.status(404).send('Podaj poprawna tresc!')
//     console.log("Podaj poprawna tresc!")
//   }

//   if (index > -1) {
//     notes[index] = changeNote
//     res.status(204).send(notes)
//   }
//   else {
//     res.status(404).send("Notatka nie istnieje")
//   }
//   console.log(notes)
// })

// app.delete('/note/:id', function (req: Request, res: Response) {
//   const id = req.params.id
//   const result = notes.find(el => el.id === id)
//   const index = notes.indexOf(result!, 0);

//   if (index > -1) {
//     notes.splice(index, 1);
//   }
//   res.status(204).send(notes)
//   console.log(notes)
// })

// app.listen(3000)

// // Tags CRUD

// app.get('/tags', function (req: Request, res: Response) { // getting all notes
//   res.status(200).send(tags)
// })

// app.post('/tag', function (req: Request, res: Response) {

//   const name = req.body.name
//   const tag = req.body;

//   if (name === undefined) {
//       res.status(400).send('Podaj poprawny tytuł!')
//       console.log("Podaj poprawny tytuł!")
//   }

//   const tagId = uuidv4() // random id
//   const tagFinish = { ...tag, id: tagId } // dodanie do obiektu "tag" nowego param "id",
//   tags.push(tagFinish)

//   console.log(tagFinish)
//   res.status(201).send(tagFinish)
//   console.log(tags)
// })

// app.get('/tag/:id', function (req: Request, res: Response) { // getting single tag by id
//   const id = req.params.id
//   const result = tags.find(el => el.id === id)

//   if (result) {
//       res.status(200).send(result)
//       console.log(result)
//   }
//   else {
//       res.status(404).send("Tag nie istnieje")
//   }

// })

// app.delete('/tag/:id', function (req: Request, res: Response) {

//   const id = req.params.id
//   const result = tags.find(el => el.id === id) // znalezienie tag z danym id
//   const index = tags.indexOf(result!, 0);

//   if (index > -1) {
//       tags.splice(index, 1);
//   }
//   res.status(204).send(tags)
//   console.log(tags)

// })

// app.put('/tag/:id', function (req: Request, res: Response) {
//   const id = req.params.id
//   const changeTag = req.body
//   const name = req.body.name

//   const result = tags.find(el => el.id === id)
//   const index = tags.indexOf(result!, 0);

//   if (name === undefined) {
//       res.status(404).send('Podaj poprawny tytuł!')
//       console.log("Podaj poprawny tytuł!")
//   }

//   if (index > -1) {
//       tags[index] = changeTag
//       res.status(204).send(tags)
//   }
//   else {
//       res.status(404).send("Tag nie istnieje")
//   }
//   console.log(tags)
// })


// // const notes: Note[] = []

// // app.use(express.json())
// // app.listen(3000)
// // getNoteApi(app)

// // const authData = req.headers.authorization
// // const token = authData?.split(' ')[1] ?? ''
// // const payload = jwt.verify(token, secret)

// // //typy dla jsonwebtoken: @types/jsonwebtoken