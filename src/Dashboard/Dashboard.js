import React from 'react';
import Pager from '../Pagination/Pager';
import ReactJsPagination from '../Pagination/ReactJsPagination';
import ReactBootstrapPagination from '../Pagination/ReactBootstrapPagination';
import axios from 'axios';
class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }
    componentDidMount(){
        try {
            axios.get('https://reqres.in/api/users?page=2')
            .then(res => {
                console.log(res.data.data);
                if(res && res.data && res.data.data && res.data.data.length > 0){
                    this.setState({
                        list: res.data
                    })
                }
            })
        }catch(e){
            console.log(`😱 Axios request failed: ${e}`);
        }
    }
    render(){
        const token = sessionStorage.getItem("token");
        return <>
            <h1>Dashboard</h1>
            <ReactBootstrapPagination />
        </>
    }
    
}
export default Dashboard;