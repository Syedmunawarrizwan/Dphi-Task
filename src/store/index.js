import { configureStore, createSlice } from "@reduxjs/toolkit";
import VectorSvg from "../assets/cardimage/Group 1000002466.png"


const hackathonsSlice = createSlice({
    name: 'hackathons',
    initialState: {
        data: [{
            hackathon_img: `${VectorSvg}`,
            hackathon_status: "Active",
            hackathon_title: "Python AI",
            hackathon_description: "How are You man",
            start_date: new Date(),
            end_date: new Date(),
            hackathon_level: "Easy"
        }]
    },
    reducers: {
        addHackathon(state, action) {
            if (action.payload.data.length) {
                state = state.data.push(action.payload.data);
            } else {
                state = state.data.push(action.payload.data);
            }
        },
        editHackathon(state, action) {
            const editData = action.payload.data;
            const idx = action.payload.idx;
            state.data[idx] = editData;
        },
        deleteHackathon(state, action) {
            const idx = action.payload.idx;
            state.data.splice(idx, 1);
        },

    }


}
)



const store = configureStore(hackathonsSlice);
export default store;
export const hackathonActions = hackathonsSlice.actions;
