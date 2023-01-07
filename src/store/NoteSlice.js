import {createSlice} from '@reduxjs/toolkit';

const NoteSlice = createSlice({
    name: 'notes',

    initialState: {
        notes: []
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