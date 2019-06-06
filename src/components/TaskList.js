import React, { Component } from 'react';
import {
    Table
} from 'reactstrap';

import TaskItem from './TaskItem';

class TaskList extends Component {

    render() {
        var { tasks } = this.props;
        let elementTask = tasks.map((task, index)=>{
            return <TaskItem 
                        key={task.id} 
                        index={index} 
                        task={task} 
                        editTask={this.props.editTask}
                        onUpdateStatus = {this.props.onUpdateStatus}
                        onDelete = {this.props.onDelete}
                    />
        });
        return (
            <Table bordered>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên công việc</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    { elementTask }
                </tbody>
            </Table>
        );
    }
}

export default TaskList;
