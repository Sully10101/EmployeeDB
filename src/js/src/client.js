import fetch from 'unfetch';

export const getAllEmployees = () => fetch('/employees');