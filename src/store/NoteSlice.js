import {createSlice} from '@reduxjs/toolkit';

const NoteSlice = createSlice({
    name: 'notes',

    initialState: {
        notes: [{date: '1/01/1111', title: 'hello world', price: 2}, {date: '2/12/2222', title: 'bye world', price: 15}, {date: '7/4/2304', title: 'see you next time world', price: 32}, {date: '4/7/204', title: '?', price: 3}]
    },

    reducers: {
        addNote(state, action) {
            state.notes.push({
                date: action.payload.date,
                title: action.payload.title,
                price: action.payload.price,
            })
        },

        removeNote(state, action) {
            state.notes = state.notes.filter(note => note.date !== action.payload.date)
        },
    }
})

export const {addNote, removeNote} = NoteSlice.actions
export default NoteSlice.reducer