import React, { Component } from 'react'
import axios from 'axios';
export default class CreateTodo extends Component {
  
  constructor(props) {
      super(props);

      
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
        name: '',
        username: ''
      };
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    axios.get('http://localhost:5000/api/users/find/'+id)
        .then(response => {
            this.setState({ name: response.data.name, username: response.data.username });
        })
        .catch(function (error){
            console.log(error);
        })
  }
  userList() {
    return  (
      <div className="row">
      <div className="col-12 col-md-6">
        <div className="form-group">
          <label>Are you sure about deleting this user?</label>
        </div>
      </div>
     </div>
    )
}



  onSubmit(e) {
    e.preventDefault();
  
    let id = this.props.match.params.id;
  
  axios.post('http://localhost:5000/api/users/delete/'+id)
      .then(res => console.log("Successfully deleted"))
      .then(window.location = "/");
  }
 
  render(){
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
                <div className="card">
		        					<form className="m-4" onSubmit={this.onSubmit}>

                      { this.userList() }

                        <button className="btn btn-primary lift">Delete user</button>
                      </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
