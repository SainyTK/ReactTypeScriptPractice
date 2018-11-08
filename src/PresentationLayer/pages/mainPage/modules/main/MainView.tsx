import { AppBar, Button, CssBaseline, Toolbar, Typography, withStyles } from '@material-ui/core'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { styles } from './MainStyle'

class MainView extends React.Component<IProps, {}>{
    public render() {
        const { classes,children } = this.props
        return (
            <CssBaseline>
                <section>
                    <AppBar position="static" color="default" className={classes.appBar}>
                        <Toolbar>
                            <Link to="/main">
                                <Typography variant="h6" color="inherit" noWrap={true} className={classes.logo}>
                                    TK
                                </Typography>
                            </Link>
                            <Link to="/about" className={classes.link}><Button>About</Button></Link>
                            <Link to="/services" className={classes.link}><Button>Services</Button></Link>
                            <Link to="/contact" className={classes.link}><Button>Contact</Button></Link>
                            <Link to="/signin" className={classes.link}><Button color="primary" variant="outlined">Logout</Button></Link>
                        </Toolbar>
                    </AppBar>
                    <main>
                        {children}
                    </main>
                </section>
            </CssBaseline>
        )
    }
}

export default withStyles(styles)(MainView)

interface IProps {
    classes: any;
    children: React.ReactNode;
}

// interface IState{

// }