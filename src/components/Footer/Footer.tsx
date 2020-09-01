import React from "react";
import s from './Footer.module.css';

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <h3>Oleg A.</h3>
                <div className={s.boxContainer}>
                    <div className={s.box}></div>
                    <div className={s.box}></div>
                    <div className={s.box}></div>
                    <div className={s.box}></div>
                    <div className={s.box}></div>
                    <div className={s.box}></div>
                </div>
                <p>&copy; Copyright 2020. All rights reserved.</p>
            </div>
        </div>
    )
}