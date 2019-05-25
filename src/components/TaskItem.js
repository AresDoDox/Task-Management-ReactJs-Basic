import React, { Component } from 'react';
import {
    Button, Badge
} from 'reactstrap';


class TaskItem extends Component {
    render() {
        let { index, task } = this.props;
        return (
            <tr>
                <th scope="row">{ index + 1 }</th>
                <td>{ task.namework }</td>
                <td>
                    <Badge color={task.status ? "success" : "danger"} className="p-2">
                        {task.status ? "Kích hoạt" : "Ẩn"}
                    </Badge>
                </td>
                <td>
                    <Button color="warning">Sửa</Button>{' '}
                    <Button color="danger">Xóa</Button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;
