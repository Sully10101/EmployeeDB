import './App.css';
import {getAllEmployees} from './client';
import { Component } from 'react';
import Container from './Container';
import {Avatar, Spin, Table} from 'antd';


class App extends Component {

  state = {
    employees: [],
    isFetching: false
  }

  componentDidMount () {
    this.fetchEmployees();
  }

  fetchEmployees = () => {
    this.setState({
      isFetching: true
    });
    getAllEmployees()
      .then(res => res.json()
      .then(employees => {
        console.log(employees);
        this.setState({
          employees,
          isFetching: false
        })
      }))
  };
  

  render() {
    
    const { employees, isFetching } = this.state;
    
    if (isFetching) {
      return (
        <Container>
          <Spin />
        </Container>
      )
    }

    if(employees && employees.length){
      
      const columns = [
        {
          title: '',
          dataIndex: 'avatar',
          render: (text, employee) => (
            <Avatar size='large'>
              {`${employee.firstName.charAt(0).toUpperCase()}${employee.lastName.charAt(0).toUpperCase()}`}
            </Avatar>
          )
        },
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
        <Container>
          <Table dataSource={employees} columns={columns} rowKey='employeeId' pagination={false} />
        </Container>
      );

    }
    return <h1>No employees found</h1>
  }
}

export default App;
