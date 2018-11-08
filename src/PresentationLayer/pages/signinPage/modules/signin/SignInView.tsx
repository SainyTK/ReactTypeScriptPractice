import { Avatar,
    Button,
    Checkbox,
    CssBaseline,
    FormControl,
    FormControlLabel,
    Input,
    InputLabel,
    Paper,
    Typography,
    withStyles
} from '@material-ui/core';
import { LockOutlined as LockIcon } from '@material-ui/icons';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { signInStyle } from './SignInStyle';

class SignInView extends React.Component<IProps, IState> {
    public render() {
        const { classes } = this.props;
        return (
            <CssBaseline>
                <section className={classes.container}>
                    <main className={classes.layout}>
                        <Paper className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockIcon />
                            </Avatar>
                            <Typography component='h1' variant='h5'>
                                Sign in
                        </Typography>
                            <form className='form'>
                                <FormControl margin='normal' required={true} fullWidth={true}>
                                    <InputLabel htmlFor='email'>Email Address</InputLabel>
                                    <Input id='email' name='email' type='email' autoComplete='email' autoFocus={true} />
                                </FormControl>
                                <FormControl margin='normal' required={true} fullWidth={true}>
                                    <InputLabel htmlFor='password'>Password</InputLabel>
                                    <Input id='password' name='password' type='password' autoComplete='password' />
                                </FormControl>
                                <FormControlLabel
                                    control={<Checkbox value='remember' color='primary' />}
                                    label='remember me' />
                                <Link to='/main' className={classes.link}>
                                    <Button
                                        className='submit'
                                        fullWidth={true}
                                        variant='contained'
                                        color='primary'>
                                        Sign In
                                </Button>
                                </Link>
                            </form>
                        </Paper>
                    </main>
                </section>
            </CssBaseline>
        );
    }
}

export default withStyles(signInStyle)(SignInView);

interface IProps {
    classes: any;
}

interface IState {

}