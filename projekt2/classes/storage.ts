import Note from "./note";
import Tag from "./tag";
import User from "./user";

class Storage {
    notes: Note[] = []
    tags: Tag[] = []
    users: User[] = []

    constructor(data?: Storage) {
        if(data) {
            this.notes = data.notes
            this.tags = data.tags
            this.users = data.users
        }
    }
}

export default Storage