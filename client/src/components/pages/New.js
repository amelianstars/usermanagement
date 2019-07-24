import React, { Component } from 'react'
import axios from 'axios';

export default class CreateTodo extends Component {

  constructor(props) {
      super(props);

      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          name: '',
          username: ''
      }
  }

  onChangeName(e) {
      this.setState({
          name: e.target.value
      });
  }

  onChangeUsername(e) {
      this.setState({
          username: e.target.value
      });
  }

  onSubmit(e) {
      e.preventDefault();

      const newUser = {
        name: this.state.name,
        username: this.state.username
      };

    axios.post('http://localhost:5000/api/users/new', newUser)
        .then(res => console.log(res.data))
        .then(window.location = "/");
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
                        Add User
                      </h4>
                    </div>
                  </div>
                </div>
		        					<form className="mb-4" onSubmit={this.onSubmit}>
                          <div className="row">
                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>Name</label>
                                <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.onChangeName} />
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>Username</label>
                                <input type="text" name="username" className="form-control" value={this.state.username} onChange={this.onChangeUsername} />
                              </div>
                            </div>
                          </div>

                        <button className="btn btn-primary lift">Add new user</button>
                      </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}