import React from 'react';
import axios from 'axios';
class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    componentDidMount(){
        
    }
    onClickLogin = () => {
        try {
            // const {username: email, password} = this.state;
            const email = "eve.holt@reqres.in"; const password = "cityslicka";
            axios.post('https://reqres.in/api/login', {email, password})
            .then(res => {
                console.log(res);
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
    }
    onChangePassword = (e) => {
        const password = e && e.target && e.target.value ? e.target.value : '';
        this.setState({
            password
        });
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
              	<button value="Login" onClick={this.onClickLogin}>Login</button>
            </div>
        )
    }
}
export default Login;