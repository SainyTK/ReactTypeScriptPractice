import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import SignIn from '../pages/signinPage/modules/signin/SignInView';
import MainNavigation from './MainNavigation';

class AppNavigation extends React.Component {
    public render() {
        return(
            <Switch>
                <Route path='/signin' component={SignIn}/>
                <Route path='/' component={MainNavigation}/>
            </Switch>
        );
    }
}

export default AppNavigation;