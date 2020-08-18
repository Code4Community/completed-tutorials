import React from "react";
import Navbar from "./Navbar"
export default function Page(props) {
    return (
        <div>
            <Navbar />
            <div>{props.text}</div>
            <ul>
                {props.list.map(element => {
                    return <li>{element}</li>
                })}
            </ul>
        </div>
    )
}