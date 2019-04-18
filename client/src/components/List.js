import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

class List extends React.Component {

    state = {
        title: "fail",
        createdBy: "",
        description: "",
        tutorial: "",
        type: "",
        length: 0,
        target: [],
        tags: []
    };


    render() {
        return (
            <div className="list">
                <h1>List</h1>
                List of All Exercises or Workouts
                        <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Description</th>
                            <th>Tutorial</th>
                            <th>Type</th>
                            <th>Length</th>
                            <th>Target</th>
                            <th>Tags</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.title}</td>
                            <td>{this.state.Author}</td>
                            <td>{this.state.description}</td>
                            <td>{this.state.tutorial}</td>
                            <td>{this.state.type}</td>
                            <td>{this.state.length}</td>
                            <td>{this.state.target}</td>
                            <td>{this.state.tags}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default List;