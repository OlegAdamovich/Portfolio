import React from "react";
import s from './Skill.module.css';

type PropsType = {
    description: string
}

export const Skill: React.FC<PropsType> = (props) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>Icon</div>
            <h3>Skill Title</h3>
            <div>
                {props.description}
            </div>
        </div>
    )
}