
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Table} from 'react-materialize';


class List extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        console.log(this.props);
        const articlesToRender = this.props.articles.article.map((article)=>{
            return(
            <tr key={article.title}>    
            <td>{article.title}</td>
            <td>{article.votes}</td>
            </tr>
            );
        })
        return(
            <div className="container">
                <Table>
                    <thead>
                        <tr>
                        <th data-field="title">Title</th>
                        <th data-field="votes">Votes</th>
                        </tr>
                    </thead>

                    <tbody>
                        {articlesToRender}
                    </tbody>
                    </Table>
            </div>
        );
    }
}

function mapStateToProps(state,ownProps){
    return{
        articles:state.list
    }
}

export default connect(mapStateToProps)(List);