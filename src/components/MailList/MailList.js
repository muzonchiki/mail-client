import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MailList.module.css';

const MailList = ({match, data, page}) => {
    return (
        <div className={styles.container}>
            {data[page].map(mailLink => (
                <Link
                    key={mailLink.id}
                    className={styles.link}
                    to={`${match.url}/${mailLink.id}`}
                >
                    {`${mailLink.body.substr(0, 52)}...`}
                </Link>
            ))}
        </div>
    )
}

export default MailList;