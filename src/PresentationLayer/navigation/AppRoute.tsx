import * as React from 'react';
import {Link,Route} from 'react-router-dom';

class AppRoute extends React.Component{
    public render(){
        return(
            <div>
                <ul>
                       <li>
                           <Link to="/123">Home</Link>
                       </li>
                       <li>
                           <Link to="/about">about</Link>
                       </li>
                       <li>
                           <Link to="/contact">Contact</Link>
                       </li>
                </ul>
                <hr/>
                <Route path="/123" component={Home}/>
                <Route exact={true} path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
            </div>
        )
    }
}

function Home(){
    return(
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

function About(){
    return(
        <div>
            <h1>I'm Tanakorn Karode</h1>
        </div>
    )
}

function Contact( {match} : {match:any} ){
    return(
        <div>
            <h2>Select Contact Channel</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/facebook`}>Facebook</Link>
                </li>
                <li>
                    <Link to={`${match.url}/twitter`}>Twitter</Link>
                </li>
                <li>
                    <Link to={`${match.url}/instagram`}>Instagram</Link>
                </li>
            </ul> 
            <Route 
                exact={true} 
                path={match.url} 
                component={Select}
            />
            <Route path={`${match.url}/:social_id`} component={Social}/>      
        </div>
    )
}

function Select(){
    return(
        <h3>
            Please Select Social
        </h3>
    )
}

function Social({match}:{match:any}){
    return(
        <div>
            <h3>You're seeing me at {match.params.social_id}</h3>
        </div>
    )
}

export default AppRoute;