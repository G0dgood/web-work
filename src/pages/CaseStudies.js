import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import meeting from '../assets/img/romain-outcess.jpg';
import { caseStudyData } from "../Library/Libraries";

const CaseStudies = () => {
    const [catagory, setCatagory] = useState('');
    const [filter, setFilter] = useState([])
    const [result, setResult] = useState("");
    const [data, setData] = useState([])
    const categories = ['ALL', ...new Set(caseStudyData.map((item) => item.category))];
    // let result = document.querySelector('.result');

    const showCategories = (item) => {
        console.log(data[0], data[1])
        if (categories === "ALL") {
            console.log(caseStudyData)
        }

    }
    useEffect(() => {
        setData(caseStudyData)
        // if (categories === "BPO") {
        //     console.log(caseStudyData)
        // }
    }, [categories])

    useEffect(() => {
        const results = filter?.filter(data => (
            data?.BPO?.toLowerCase().includes(result) ||
            data?.BusinessProductivitySolutions.toLowerCase().includes(result) || data?.CloudSolutions.toLowerCase().includes(result) ||
            data?.CustomerEngagement.toLowerCase().includes(result)));
        setData(results)
    }, [result, filter])
    // useEffect(() => {
    //     if (selected === "BPO") {
    //         setStartDate(allTime)
    //     }
    //     else if (selected === "Business Productivity Solutions") {
    //         setStartDate(thirtyDays)
    //     }
    //     else if (selected === "Cloud Solutions") {
    //         setStartDate(sevenDays)
    //     }
    //     else if (selected === "Customer Engagement") {
    //         setStartDate(yesterday)
    //     }
    //     else if (selected === "ALL") {
    //         setStartDate(caseStudyData)

    //     }
    // }, [])

    // console.log(caseStudyData)

    return (
        <div>
            <Navbar />
            <main>
                <div className="case-header">
                    <div className="case-metting-img">
                        <img src={meeting} alt="meeting" />
                    </div>
                </div>
                <div className="case-categories">
                    <p className="case-title">Categores</p>
                    {categories.map((catagory, item) =>
                        <button className="btn-case" onClick={showCategories} key={item}>{catagory} </button>
                    )
                    }
                    <div>
                        {data.map((data, index) => (
                            <div key={index}>
                                <h2>{data[1]}'s Pets</h2>

                                {/* loop over the pets */}
                                {/* <div>
                                    {data.map((pet, i) => (
                                        <p key={i}>
                                            {pet.type} named {pet.name}
                                        </p>
                                    ))}
                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default CaseStudies;
