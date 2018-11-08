import { createStyles } from '@material-ui/core';

export const signInStyle = (theme: any) => createStyles({
    avatar: {
        backgroundColor: theme.palette.secondary.main,
        margin: theme.spacing.unit
    },
    container: {
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        justifyContent: 'center'
    },
    form: {
        marginTop: theme.spacing.unit,
        width: '100%'
    },
    layout: {
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            marginLeft: theme.spacing.unit * 3,
            marginRight: theme.spacing.unit * 3,
            maxWidth: 400
        },
        display: 'flex',
        flex: 1,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3
    },
    link: {
        color: '#fff',
        textDecoration: 'none'
    },
    paper: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing.unit * 8,
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
    },
    submit: {
        marginTop: theme.spacing.unit * 3
    }
});
