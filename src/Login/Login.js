import React from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import history from '../history';
class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    componentDidMount(){
        sessionStorage.clear();
    }
    onClickLogin = () => {
        try {
            const {username: email, password} = this.state;
            axios.post('https://reqres.in/api/login', {email, password})
            .then(res => {
                if(res && res.data && res.data.token){
                    sessionStorage.setItem("token", res.data.token);
                }
            })
        }catch(e){
            console.log(`😱 Axios request failed: ${e}`);
        }
    }
    onChangeUserName = (e) => {
        const username = e && e.target && e.target.value ? e.target.value : '';
        this.setState({
            username
        });
        sessionStorage.setItem("username", username);
    }
    onChangePassword = (e) => {
        const password = e && e.target && e.target.value ? e.target.value : '';
        this.setState({
            password
        });
        sessionStorage.setItem("password", password);
    }
    render(){
        const {username, password} = this.state;
        return(
            <div>
                <label htmlFor="username">Username</label><br /> 
                <input name="username" type="text" value={username} 
                    onChange={this.onChangeUserName}/> <br /> 
                <label htmlFor="password">Password</label><br /> 
                <input name="password" type="password" value={password}
                    onChange={this.onChangePassword}/><br /> 
                <Link to="/dashboard"><button value="Login" >Login</button></Link>
            </div>
        )
    }
}
export default Login;