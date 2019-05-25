import React, { Component } from 'react';
import './App.css';
import {
  Alert, Container, Row, Col, Button
} from 'reactstrap';

import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []//id, namework, status 
    }
  }
  componentWillMount() {
    if(localStorage && localStorage.getItem('tasks')){
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      });
    }
  }

  createSampleData = () => {
    let tasks = [
      {
        id: 1,
        namework: 'Học HTML',
        status: true
      },
      {
        id: 2,
        namework: 'Học CSS',
        status: true
      },
      {
        id: 3,
        namework: 'Học ReactJS Basic',
        status: false
      }
    ];
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.setState({
      tasks: tasks
    });
  }

  render() {
    let { tasks } = this.state
    return (
      <div className="App">
        <Alert color="primary">
          <h1 className="title-app">Quản lý công việc</h1>
        </Alert>
        <Container>
          <Row>
            <Col md="4">
              <TaskForm />
            </Col>
            <Col md="8">
              <Col md="12" className="p-0 mb-2">
                <Button color="primary">Thêm công việc</Button>{' '}
                <Button color="danger" onClick={this.createSampleData}>Tạo dữ liệu mẫu</Button>{' '}
              </Col>
              <Control />
              <TaskList tasks={ tasks }/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
