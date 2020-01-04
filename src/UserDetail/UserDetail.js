import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";
class UserDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: {}
        }
    }
    componentDidMount(){
        const id =  this.props.match.params.id ? this.props.match.params.id : 1;
        try {
            axios.get(`https://reqres.in/api/users/${id}`)
            .then(res => {
                if(res && res.data && res.data.data){
                    this.setState({
                        user: res.data.data
                    })
                }
            })
        }catch(e){
            console.log(`😱 Axios request failed: ${e}`);
        }
    }
    render(){
        const {user} = this.state;
        return <>
            <h1>UserDetail</h1>
            <div>{user.first_name} {user.last_name}</div>
            <div>{user.email}</div>
            <div><img src={user.avatar} alt="user"/></div>
        </>
    }
}
export default withRouter(UserDetail);