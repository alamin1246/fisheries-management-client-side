import React from "react";

import { AiOutlineSearch } from "react-icons/ai";

import "./Banner.css";
const Banner = () => {
    return (
        <>
            <div className="hero">
                <div className="content">
                    <h1>Fisheries Management</h1>
                    <p className="search-text">
                        {" "}
                        Fisheries management is the process of developing and enforcing the policies necessary to prevent overfishing and aid the recovery of overfished stocks{" "}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Banner;
