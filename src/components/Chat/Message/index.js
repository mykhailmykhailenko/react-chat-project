 import React from 'react';
 import styles from './Massage.module.css'
 import {format} from 'date-fns'

const Message = (props) => {
    const {message: {body, id, postId, date, user: {userName, imageSrc}}} = props;

    const imgSrc = imageSrc ? imageSrc : './userPlaceholder.jpg';
    const messageDate = date ? date: new Date();

    return (
        <section className= {styles['message-wrapper']} >
            <img src={imgSrc} className={styles['message-author-image']} />
            <div className={styles['text-wrapper']}>
                <span className={styles['userName']}>{userName}</span>
                <span className={styles['message-body']}>{body}</span>
                <span className={styles['message-date']}>{format(messageDate,'hh:mm')}</span>
            </div>
        </section>
    );
}

export default Message;
