import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const User = props => (
  <tr>
      <td>{props.user.name}</td>
      <td>{props.user.username}</td>
      <td>
        <Link
          to={"/edit/"+props.user._id}
          className="btn btn-white lift"
        >
          Edit
        </Link>
      </td>
      <td>
        <Link
          to={"/delete/"+props.user._id}
          className="btn btn-blue lift"
        >
          Delete
        </Link>
      </td>
  </tr>
)

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {users: []};
}
componentDidMount() {
  axios.get('http://localhost:5000/api/users/')
      .then(response => {
          this.setState({ users: response.data });
      })
      .catch(function (error){
          console.log(error);
      })
}

userList() {
  return this.state.users.map(function(currentUser, i){
      return <User user={currentUser} key={i} />;
  })
}
  render(){
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
                <div className="card">
                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col">
                      <h4 className="card-header-title">
                        View Users
                      </h4>
                    </div>
                  </div>
                </div>
                <table className="table table-sm table-responsive-sm table-nowrap card-table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Username</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody className="list">
                      { this.userList() }
                      </tbody>
                    </table>

                  </div>
          </div>
        </div>
      </div>
    );
  }
}