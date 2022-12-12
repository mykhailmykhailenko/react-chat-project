import React, {useEffect, useReducer, useState} from 'react';
import DialogList from '../DialogList';
import Chat from '../Chat';
import MessageArea from '../MessageArea';
import styles from './Dashboard.module.css'
import { getMessages } from '../../api/getMessages';
import UserContext from '../../contexts/UserContext';
import reducer from '../../redusers/messangerResucer';

 
 const Dashboard = () => {

    const [user, setUser] = useState({
        id: 1,
        userName: 'John Doe',
        imageSrc: './placeholder.png'
    });

    const [state, dispatch] = useReducer(reducer, {
        messages: [],
        error: null
    });

    useEffect (() => {
        getMessages()
        .then(data => {
            const action = {
                type : 'DATA_LOAD_SUCCESS',
                data
            }
            dispatch(action)
        })
        .catch(error => {
            const action = {
                type: 'DATA_LOAD_ERROR',
                error
            };
            dispatch(action)
        })
    }, [])

    const addNewMessage = (data) => {
        const action = {
            type: 'ADD_NEW_MESSAGE',
            message: {
                body: data,
                user
            }
        };
        dispatch(action)
    }

    return (
        <UserContext.Provider value={user}>
            <main className={styles.container}>
                {state.error && <div>Ooops! Error happening</div>}
                <DialogList />
                <div className={styles['chat-wrapper']}>
                    <Chat messages={state.messages} />
                    <MessageArea sendMessage={addNewMessage} />
                </div>
            </main>
        </UserContext.Provider>
    );
 }
 
 export default Dashboard;
 
