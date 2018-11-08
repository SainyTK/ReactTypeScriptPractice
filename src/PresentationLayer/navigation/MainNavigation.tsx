import * as React from 'react'
import {Route} from 'react-router-dom'
import About from '../pages/aboutPage/modules/about/About'
import Contact from '../pages/contactPage/modules/contact/Contact'
import MainView from '../pages/mainPage/modules/main/MainView'
import Services from '../pages/servicesPage/modules/services/Services'


class MainNavigation extends React.Component{
    public render(){
        return(
            <MainView>
                <Route path="/about" component={About}/>
                <Route path="/services" component={Services}/>
                <Route path="/contact" component={Contact}/>
            </MainView>
        )
    }
}

export default MainNavigation;