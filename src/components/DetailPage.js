import React, { useEffect, useState, useSyncExternalStore } from 'react';
import "./DetailPage.css"
import { Link, useParams, useNavigate } from 'react-router-dom';
import { hackathonActions } from '../store';
import { useDispatch, useSelector } from 'react-redux';

function DetailPAge(props) {
    const { id } = useParams();

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const [overviewLoader, setOverviewLoader] = useState(false)

    const [hackathonData, setHackthonData] = useState("");
    const [hackathonDate, setHackthonDate] = useState()

    const hackathonsList = useSelector(state => state.data);

    useEffect(() => {
        if (hackathonsList[id]) {
            setHackthonData(hackathonsList[id])
            setHackthonDate(hackathonsList[id])
        }
    }, [])

    const deleteAndNavigateToListPage = () => {

        dispatch(hackathonActions.deleteHackathon({ idx: id }));

        navigate('/');
        alert("Card Deleted")
    }
    const overviewHandler = () => {
        setOverviewLoader(true)

    }

    return (
        <div className='detail-page-container'>
            <div className='start-date'>


            </div>
            <div className='detail-header'>
                <h1 className='detail-h1'>{hackathonData.hackathon_title}</h1>
                <h1 className='detail-h1'>{hackathonData.hackathon_level}</h1>
            </div>
            <div className='detail-page-footer'>
                <div onClick={overviewHandler}><p className='overview-p'> overview</p></div>
                <div className='edit-delete-div'>
                    <Link to={'/admin/' + id}><button className='edit-btn'>Edit</button></Link>
                    <button className='delete-btn' onClick={deleteAndNavigateToListPage}>Delete</button>
                </div>
            </div>
            <hr />
            {overviewLoader &&
                <div className='overview-footer' >
                    <p> {hackathonData.hackathon_description}</p>
                </div>}
        </div>
    );
}

export default DetailPAge;