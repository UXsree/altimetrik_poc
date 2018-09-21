
import React, { Component } from 'react';
import {Button, Icon, Card, Row, Col, Input } from 'react-materialize';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';


class Create extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    onChangeHandler(event){
            this.setState({ [event.target.name]: event.target.value })
    }
    render(){
        console.log(this.props);
        return(
            <div className="container">
                <Row>
                    <Input placeholder="article" m={10} label="Add an Article" name="title" onChange={this.onChangeHandler.bind(this)}/>
                    <Input placeholder="votes" m={2} label="votes" name="votes"  onChange={this.onChangeHandler.bind(this)}/>
                </Row>
                
                <Button onClick={()=>{
                    this.props.add(this.state)
                    console.log(this.state);
                    }}
                    >Add article</Button>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return{
        state: state
    } 
}

function mapDispatchToProps(dispatch){
    return{
        add: (value) => {
            if(Object.keys(value).length != 0){
                console.log("value....", value);
                dispatch({type:'ADD_ARTICLE', payload: value})
            }else{
                alert("enter some values");
            }
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Create);