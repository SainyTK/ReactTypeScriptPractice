import * as React from 'react';
import {Link} from 'react-router-dom';

class Register extends React.Component< IProps, IState > {
    constructor(props: any) {
        super(props);
        this.state = {name: ''};
    }

    public render() {
        return(
            <div>
                <h2>Enter your name : </h2>
                <input type='text' value={this.state.name} onChange={this.handleChange}/>
                <Link to='/main' onClick={this.show}>
                    <button>Login</button>
                </Link>
            </div>
        );
    }

    private show = () => {
        alert(`Hello ${this.state.name}`);
    }

    private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            name: event.target.value
        });
    }
}

export default Register;

interface IProps {

}

interface IState {
    name: string;
}