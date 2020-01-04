import React from 'react';
import ReactBootstrapPagination from '../Pagination/ReactBootstrapPagination';
import axios from 'axios';
import {Link, withRouter, Redirect} from 'react-router-dom';
import history from '../history';
class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: [],
            totalPages: 0,
            currentPage: 1
        }
    }
    
    renderUserList = () => {
        const {list} = this.state;
        const listHtml = list.map(item => <Link key={item.id} to={`/userDetail/${item.id}`}>
            <div>{item.first_name} {item.last_name}</div>
        </Link>)
        return listHtml;
    }
    componentDidMount(){
        try {
            axios.get(`https://reqres.in/api/users?page=1`)
            .then(res => {
                if(res && res.data && res.data.data && res.data.data.length > 0){
                    this.setState({
                        list: res.data.data,
                        totalPages: res.data.total_pages
                    })
                }
            })
        }catch(e){
            console.log(`😱 Axios request failed: ${e}`);
        }
    }
    handlePageChange = (currentPage) => {
        this.setState({
            currentPage: Number(currentPage)
        })
        try {
            axios.get(`https://reqres.in/api/users?page=${currentPage}`)
            .then(res => {
                if(res && res.data && res.data.data && res.data.data.length > 0){
                    this.setState({
                        list: res.data.data,
                        totalPages: res.data.total_pages
                    })
                    history.push(`/dashboard/${res.data.page}`);
                }
            })
        }catch(e){
            console.log(`😱 Axios request failed: ${e}`);
        }
    }
    render(){
        // const token = sessionStorage.getItem("token");
        return <>
            <h1>Dashboard</h1>
            <div>{this.renderUserList()}</div>
            <ReactBootstrapPagination 
                totalPages={this.state.totalPages}
                currentPageNumber={this.state.currentPage}
                handlePageChange={this.handlePageChange}
            />
        </>
    }
    
}
export default Dashboard;