import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { compose } from 'recompose';
import styles from './AppRouter.module.css';
import { withAuth } from '../../context/Auth';
import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutBoxList from '../OutBoxList';
import OutBoxMail from '../OutBoxMail';

const NavMenus = [
    {
        title: 'Home',
        path: ''
    },
    {
        title: 'Inbox',
        path: '/inbox'
    },
    {
        title: 'OutBox',
        path: '/outbox'
    },
];

class AppRouter extends Component {
    componentDidMount() {
        const {isAuthorized, history} = this.props;

        if(!isAuthorized) {
            history.push('/');
        }
    };

    render() {
        const { match } = this.props;

        return (
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <nav className={styles.nav}>
                        <ul className={styles.navList}>
                            {NavMenus.map( el => (
                                <li key={el.title} className={styles.navElement}>
                                    <NavLink
                                        activeClassName='active'
                                        className={styles.link}
                                        exact
                                        to={`${match.url}${el.path}`}
                                    >
                                        {el.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className={styles.content}>
                        <h3 className={styles.title}>
                            <Switch>
                                <Route exact path='/app' render={() => ('Home')} />
                                <Route path='/app/inbox' render={() => ('Inbox')} />
                                <Route path='/app/outbox' render={() => ('OutBox')} />
                            </Switch>
                        </h3>
                        <Switch>
                            <Route exact path={`${match.url}`} component={Home} />
                            <Route exact path={`${match.url}/inbox`} component={InboxList} />
                            <Route path={`${match.url}/inbox/:id`} component={InboxMail} />
                            <Route exact path={`${match.url}/outbox`} component={OutBoxList} />
                            <Route path={`${match.url}/outbox/:id`} component={OutBoxMail} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default compose(withAuth)(AppRouter);