import React, {Component} from 'react';

import {
    Card, CardHeader, CardBody, CardFooter,
    Form, FormGroup, Label, Input, Button
  } from 'reactstrap';

class TaskForm extends Component{
    render(){
        return (
            <Card>
              <CardHeader>Thêm công việc</CardHeader>
              <Form>
                <CardBody>
                  <FormGroup>
                    <Label for="namework">Tên công việc:</Label>
                    <Input type="text" name="namework" id="namework" placeholder="" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="statuswork">Trạng thái</Label>
                    <Input type="select" name="statuswork" id="statuswork">
                      <option>Kích hoạt</option>
                      <option>Ẩn</option>
                    </Input>
                  </FormGroup>
                </CardBody>
                <CardFooter>
                  <Button color="primary">Lưu lại</Button>{' '}
                  <Button>Hủy bỏ</Button>
                </CardFooter>
              </Form>
            </Card>
        );
    }
}

export default TaskForm;