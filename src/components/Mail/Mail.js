import React from 'react';
import styles from './Mail.module.css';


const Mail = ({mail, typeMail}) => {
    return (
        <div className={styles.container}>
            <p>
                {`${typeMail}: `}
                <b>{mail[typeMail.toLowerCase]}</b>
            </p>
            <p>
                {mail.body}
            </p>
        </div>
    )
}

export default Mail;