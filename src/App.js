import React, { Component } from 'react';
import './App.css';
import {
  Alert, Container, Row, Col, Button
} from 'reactstrap';
import randomstring from 'randomstring';

import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [], //id, namework, status 
      isDisplayForm: false 
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
        id: randomstring.generate(5),
        namework: 'Học HTML',
        status: true
      },
      {
        id: randomstring.generate(5),
        namework: 'Học CSS',
        status: true
      },
      {
        id: randomstring.generate(5),
        namework: 'Học ReactJS Basic',
        status: false
      }
    ];
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.setState({
      tasks: tasks
    });
  }

  onToggleForm  = () =>{
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    });
  }

  onSubmit = (data) => {
    data.id = randomstring.generate(5);
    let { tasks } = this.state;
    tasks.push(data)
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  render() {
    let { tasks, isDisplayForm } = this.state;
    let elementTaskForm = isDisplayForm 
          ? <TaskForm  onSubmit={ this.onSubmit }/> 
          : '';
    return (
      <div className="App">
        <Alert color="primary">
          <h1 className="title-app">Quản lý công việc</h1>
        </Alert>
        <Container>
          <Row>
            <Col md={ isDisplayForm ? "4" : "0"}>
              { elementTaskForm }
            </Col>
            <Col md={ isDisplayForm ? "8" : "12" }>
              <Col md="12" className="p-0 mb-2">
                <Button color="primary" onClick={ this.onToggleForm }>Thêm công việc</Button>{' '}
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
