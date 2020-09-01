import React from "react";
import s from './MyWork.module.css';

export const MyWork = () => {
    return (
        <div className={s.myWorkBlock}>
            <div className={s.content}>
                <div className={s.watch}>Watch</div>
            </div>
            <div className={s.description}>
                <div>Project Title</div>
                <div>Project Description</div>
            </div>
        </div>
    )
}