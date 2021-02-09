import React, { Component } from "react";

export class UsersCreate extends Component {
  state = {
    name: "",
  };

  handleNameChange = (event) => {
    const name = event.target.value;
    this.setState({ name });
  };

  handleUserCreate = (event) => {
    const { name } = this.state;
    fetch("http://localhost:3000/users", {
      //fetch("http://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      alert("Пользователь создан");
      this.setState({ name: "" });
    });
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <input
          type="text"
          name="name"
          placeholder="username"
          onChange={this.handleNameChange}
          value={name}
        />
        <br />
        <input
          type="button"
          onClick={this.handleUserCreate}
          value="Создать"
          disabled={!name.length}
        />
      </div>
    );
    //<div>Hello from UsersList</div>; User create
  }
}
