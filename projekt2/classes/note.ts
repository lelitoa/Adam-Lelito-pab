import Tag from "./tag";

class Note {
  title: string;
  content: string;
  createDate?: string;
  tags?: Tag[];
  id?: number;
  isPrivate:boolean=true;

  constructor(note: Note) {
    this.title = note.title;
    this.content = note.content;
    this.createDate = note.createDate;
    this.tags = note.tags;
    this.id = note.id;
    this.isPrivate = note.isPrivate;
  }
}


export default Note;

// export interface Note {
//   title: string;
//   content: string;
//   createDate?: string;
//   tags?: string[];
//   id?: string; //number
// }