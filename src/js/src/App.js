import './App.css';
import {getAllEmployees} from './client';
import { Component } from 'react';
import {Table} from 'antd';


class App extends Component {

  state = {
    employees: []
  }

  componentDidMount () {
    this.fetchEmployees();
  }

  fetchEmployees = () => {
    getAllEmployees()
      .then(res => res.json()
      .then(employees => {
        console.log(employees);
        this.setState({employees})
      }))
  };
  

  render() {
    
    const { employees } = this.state;
    
    if(employees && employees.length){
      
      const columns = [
        {
          title: 'Employee ID',
          dataIndex: 'employeeId',
          key: 'employeeId'
        },
        {
          title: 'First Name',
          dataIndex: 'firstName',
          key: 'firstName'
        },
        {
          title: 'Last Name',
          dataIndex: 'lastName',
          key: 'lastName'
        },
        {
          title: 'Email Address',
          dataIndex: 'email',
          key: 'email'
        },
        {
          title: 'Gender',
          dataIndex: 'gender',
          key: 'gender'
        },
      ];

      return (
        <Table dataSource={employees} columns={columns} rowKey='employeeId' />
      );

    }
    return <h1>No employees found</h1>
  }
}

export default App;
