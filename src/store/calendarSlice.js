import { createSlice } from '@reduxjs/toolkit'

const calendarSlice = createSlice({
    name: 'events',
    initialState: {
        events: []
    },
    reducers: {
        addEvent(state, action) {
            state.events.push({
                title: action.payload.title,
                start: action.payload.start,
                end: action.payload.end,
            })
        }
    }
})

export const { addEvent } = calendarSlice.actions;
export default calendarSlice.reducer;