import React from "react";
import s from './RemoteWork.module.css';

export const RemoteWork = () => {
    return (
        <div className={s.remoteWorkBlock}>
            <div className={s.container}>
                <h2>Considering options for remote work</h2>
                <h3 className={s.hireMe}>Hire Me</h3>
            </div>
        </div>
    )
}