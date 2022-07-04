import React, { useEffect } from 'react';
import "./Hackathons.css"
import HackathonsCard from "./HackathonsCard"
import { useState } from 'react'


function Hackathons(props) {
    const originalCardData = props.hackathonsList;
    const [cards, setCards] = useState(props.hackathonsList);
    const [search, setSearch] = useState("");
    const [allFilter, setAllFilter] = useState(false)
    const [activeFilter, setActiveFilter] = useState("Active");
    const [upcomingFilter, setUpcomingFilter] = useState(false);
    const [pastFilter, setPastFilter] = useState();
    const [easyFilter, setEasyFilter] = useState(2);
    const [mediumFilter, setMediumFilter] = useState(0);
    const [hardFilter, setHardFilter] = useState(3);



    const searchOrFilterByName = (e) => {
        setSearch(e.target.value);
        const val = e.target.value.toLowerCase();
        if (val == '') {
            setCards(originalCardData);
            return;
        }

        const searched = originalCardData.filter((hackathon) => {
            return hackathon.hackathon_title.toLowerCase().includes(val);
        })
        setCards(searched);
    }
    const filterByStatus = (e) => {
        // const val = e.target.value;
        console.log(originalCardData)
        setActiveFilter("Active")
        if (activeFilter == "Active") {
            const search = originalCardData.filter((hackathon) => {
                return hackathon.hackathon_status.includes("Active")
            })
            setCards(search)
        }
    }
    const filterByLevel = (e) => {
        let val;
        setEasyFilter(2)
        setMediumFilter(0)
        setHardFilter(3)

        if (e.target.value == 0) {
            val = 0;
            setMediumFilter(1)
        }
        else if (e.target.value == 1) {
            val = 1;
        }
        else if (e.target.value == 2) {
            val = 2
            setEasyFilter(1)
        } else if (e.target.value == 3) {
            val = 3
            setHardFilter(1)
        }

        console.log(val)
        if (val == "1") {
            setCards(originalCardData)
            return;
        } else if (val == "0") {
            const searchMedium = originalCardData.filter((hackathon) => {
                return hackathon.hackathon_level.includes("Medium")
            })
            setCards(searchMedium)
        }

        else if (val == "2") {
            const searchEasy = originalCardData.filter((hackathon) => {
                return hackathon.hackathon_level.includes("Easy")
            })
            setCards(searchEasy)
        }
        else if (val == "3") {
            const searchHard = originalCardData.filter((hackathon) => {
                return hackathon.hackathon_level.includes("Hard")
            })
            setCards(searchHard)
        }
    }

    return (
        <div className='main'>
            <div className='hackathons-container'>
                <div className='hackathons-header'>
                    <h2 >Explore Challenges</h2>
                    <input value={search} onChange={searchOrFilterByName} className='hackathon-input' type="text" placeholder='Search' />
                    <div className='hackathon-filter'>
                        <div>
                            <h1>Filter</h1>
                            <input value={allFilter} id="all" onChange={(e) => { setAllFilter(true) }} type="checkbox" className="filter-check-box" />
                            <label htmlFor='all'>All</label>
                            <input value={upcomingFilter} type="checkbox" onChange={() => { filterByStatus() }} className="filter-check-box" />
                            <label>Active</label>
                            <input value={activeFilter} type="checkbox" onChange={filterByStatus} className="filter-check-box" />
                            <label>Upcoming</label>
                            <input value={pastFilter} type="checkbox" onChange={(e) => { setPastFilter(e.target.value) }} className="filter-check-box" />
                            <label>Past</label>
                        </div>
                        <div>
                            <input value={easyFilter} type="checkbox" onChange={filterByLevel} />
                            <label>Easy</label>

                            <input value={mediumFilter} type="checkbox" onChange={filterByLevel} />
                            <label>Medium</label>

                            <input value={hardFilter} type="checkbox" onChange={filterByLevel} />
                            <label>Hard</label>
                        </div>
                    </div>
                </div>
                <div className='cards-div'>
                    {
                        cards.map((data, id) => {
                            return (
                                <HackathonsCard
                                    key={id}
                                    id={id}
                                    hackathon_img={data.hackathons_img}
                                    hackathon_title={data.hackathon_title}
                                    hackathon_status={data.hackathon_status}
                                    hackathon_description={data.hackathon_description}
                                    end_date={data.end_date}
                                    start_date={data.start_date}
                                    hackathon_level={data.hackathon_level}


                                ></HackathonsCard>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    );
}

export default Hackathons;
