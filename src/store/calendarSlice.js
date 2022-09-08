import { createSlice } from '@reduxjs/toolkit'

const calendarSlice = createSlice({
    name: 'events',
    initialState: {
        events: 
        [
            {
                title: "Big Meeting",
                start: new Date(2022, 8, 15),
                end: new Date(2022, 8, 16),
            },
            {
                title: "Vacation",
                start: new Date(2022, 8, 7),
                end: new Date(2022, 8, 10),
            },
            // {
            //     title: "Conference",
            //     start: new Date(2022, 8, 20),
            //     end: new Date(2022, 8, 23),
            // }
        ]
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