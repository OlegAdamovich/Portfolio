import React from "react";
import s from './Skills.module.css';
import {Skill} from "../Skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={s.container}>
                <h2>Skills</h2>
                <div className={s.skillContainer}>
                    <Skill description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium blanditiis consequuntur cumque
                eos esse ex excepturi in inventore ipsa itaque laudantium, mollitia natus neque nulla qui quibusdam,
                tenetur ut? Dolorum.'/>
                    <Skill description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. '/>
                    <Skill description='Accusantium blanditiis consequuntur cumque
                eos esse ex excepturi in inventore ipsa itaque laudantium, mollitia natus neque nulla qui quibusdam,
                tenetur ut? Dolorum.'/>
                </div>
            </div>
        </div>
    )
}