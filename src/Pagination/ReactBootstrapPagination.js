import React from 'react';
import {Pagination} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class ReactBootstrapPagination extends React.Component {
    constructor(props){
        super(props);
    }
    renderPagination = () => {
        const {totalPages, currentPageNumber} = this.props;
        const array = new Array(totalPages).fill(0);
        const Pager = array.map((item, i) => {
            return (currentPageNumber === i+1) ? 
                <Pagination.Item key={i} active>{i+1}</Pagination.Item> : 
                <Pagination.Item key={i}>{i+1}</Pagination.Item>
        })
        return Pager;
    }
    onClick = (e) => {
        this.props.handlePageChange(e.target.text);
    }
    render(){
        return <>
            <Pagination onClick={this.onClick}>
                {this.renderPagination()}
            </Pagination>
        </>
    }
}
