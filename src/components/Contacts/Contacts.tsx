import React from "react";
import s from './Contacts.module.css';

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.container}>
                <h3>Contacts</h3>
                <form className={s.formBlock} action="">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                </form>
                <button>Submit</button>
            </div>
        </div>
    )
}