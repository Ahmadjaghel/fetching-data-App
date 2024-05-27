import axios from 'axios';
export async function getUsers() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response
}
export async function getUser(id) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/'+id);
    return response
}
export async function deleteUser(idd) {
    const response = await axios.delete('https://jsonplaceholder.typicode.com/users/'+idd);
    return response
}
export async function UpdateUser(idd,values) {
    const response = await axios.put('https://jsonplaceholder.typicode.com/users/'+idd,values);
    return response
}
export async function AddUser(values) {
    const response = await axios.post('https://jsonplaceholder.typicode.com/users/',values);
    return response
}