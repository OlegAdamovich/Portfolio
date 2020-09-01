import React from "react";
import s from './MyWorks.module.css';
import {MyWork} from "../MyWork/MyWork";

export const MyWorks = () => {
    return (
        <div className={s.myWorksBlock}>
            <div className={s.container}>
                <h2>My Works</h2>
                <div className={s.myWorksContainer}>
                    <MyWork/>
                    <MyWork/>
                </div>
            </div>
        </div>
    )
}