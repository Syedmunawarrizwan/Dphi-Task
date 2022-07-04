import React, { useEffect } from 'react';
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { hackathonActions } from '../store';

import "./AdminChallenges.css"

function AdminChallenges(props) {
    const navigate = useNavigate();

    const [hackathonTitle, setHackthonTitle] = useState("")
    const [hackathonDescription, setHackathonDescription] = useState("")
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [hackathonLevel, setHackathonLevel] = useState()
    const [hackathonImg, setHackathonImg] = useState("");
    const hackathonsList = useSelector(state => state.data);

    const { id } = useParams();
    console.log(hackathonsList[id]);

    useEffect(() => {
        if (id != -1) {
            if (hackathonsList[id]) {
                const patchData = hackathonsList[id];
                setHackthonTitle(patchData.hackathon_Descrtipion);
            }
        }


    }, [])



    const dispatch = useDispatch();


    const addingAndNavigateToListPage = (e) => {
        e.preventDefault()
        if (id == -1) {
            dispatch(hackathonActions.addHackathon({
                data: {
                    hackathon_img: hackathonImg,
                    hackathon_status: "",
                    hackathon_title: hackathonTitle,
                    hackathon_description: hackathonDescription,
                    start_date: new Date(startDate),
                    end_date: new Date(endDate),
                    hackathon_level: hackathonLevel
                }
            }));
        }
        else {
            dispatch(hackathonActions.editHackathon({
                data: {
                    hackathon_img: hackathonImg,
                    hackathon_status: "",
                    hackathon_title: hackathonTitle,
                    hackathon_description: hackathonDescription,
                    start_date: new Date(startDate),
                    end_date: new Date(endDate),
                    hackathon_level: hackathonLevel

                },
                idx: id
            }));
        }
        navigate("/")
    }
    return (

        <div className='add-challenges-container'>
            <div className='admin-container'>
                <div className='admin-header'>
                    <h1 className='admin-h1'>Challenge details</h1>
                </div>
                <form className="form-create" onSubmit={addingAndNavigateToListPage}>
                    <div className='admin-inp-div'>
                        <p className='labels'>Challenge Name</p>
                        <input onChange={(e) => { setHackthonTitle(e.target.value) }} value={hackathonTitle} className='admin-inp' type="text" />
                    </div>
                    <div className='admin-inp-div'>
                        <p className='lables'>Start Date</p>
                        <input className='admin-inp' onChange={(e) => { setStartDate(e.target.value) }} value={startDate} type="date" placeholder='Add start date' />
                    </div>
                    <div className='admin-inp-div'>
                        <p className='lables'>End Date</p>
                        <input className='admin-inp' onChange={(e) => { setEndDate(e.target.value) }} value={endDate} type="date" placeholder='Add end date' />
                    </div>
                    <div className='admin-inp-div'>
                        <p className='lables'>Description</p>
                        <textarea onChange={(e) => { setHackathonDescription(e.target.value) }} value={hackathonDescription} className='admin-textarea'></textarea>

                    </div>
                    <div className='admin-inp-div'>
                        <p className='lables'>Image</p>
                        <input onChange={(e) => { setHackathonImg(e.target.value) }} value={hackathonImg} className='file-inp' type="file" />
                    </div>
                    <div className='admin-inp-div'>
                        <p className='lables'>Level Type</p>
                        <select onChange={(e) => { setHackathonLevel(e.target.value) }} value={hackathonLevel} className="admin-level">
                            <option value="/">---Select level--</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>

                    <button type='submit' className="admin-btn">Create Challenge</button>
                </form>
            </div>

        </div>
    );
}

export default AdminChallenges;