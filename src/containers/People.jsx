import React, { Component } from 'react';
import InputComponent from '../common/textbox'
import {connect} from 'react-redux'
import { fetchData } from '../actions';
import ListComponent from '../common/list';


class PeopleContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      filteredList : []
    }
  }
    
    componentDidMount() {
      this.props.fetchPeopleList();
    }

    componentWillReceiveProps(nextProps){
      this.setState({
        filteredList: nextProps.peopleList
      })
    }

    searchPeopleListbyKeyword(e) {
      const data = this.props.peopleList.filter((item) => {
        return item.name.toLowerCase().indexOf(
          e.target.value.toLowerCase()) !== -1;
      })
      this.setState({
        filteredList: data
      })

    }
    render(){
      console.log(this.props.peopleList)
        return(
          <div>
           <InputComponent type='text' name='search' placeholder='Search' controlFunc={this.searchPeopleListbyKeyword.bind(this)}/>
           <ListComponent renderData = {this.state.filteredList}/>
           </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      peopleList: state.people.peopleList
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchPeopleList : () => {
        dispatch(fetchData())
      }
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PeopleContainer);