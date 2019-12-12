import React from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';

const OutBoxList = props => {
    return (
        <MailList {...props} page='outbox' />
    )
}

export default withData(OutBoxList);