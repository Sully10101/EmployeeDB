import fetch from 'unfetch';

export const getAllEmployees = () => fetch('http://localhost:8080/employees');