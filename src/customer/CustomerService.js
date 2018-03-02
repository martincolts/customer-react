import axios from 'axios';
import { host } from '../Server/ServerData.js';

const endpoint = "/customer";
export function GetCustomers (succes, error){
    axios.get(host.ip+host.port+endpoint)
    .then(succes)
    .catch(error);
}

export function SaveCustomer (customer,success,error){
    axios.post(host.ip+host.port+endpoint,customer)
    .then(success)
    .catch(error);
}

export function UpdateCustomer(id, customer, success, error){
    axios.put(host.ip+host.port+endpoint+id, customer)
    .then(success)
    .catch(error);
}

export function DeleteCustomer (id , success , error){
    axios.put(host.ip+host.port+endpoint+id)
    .then(success)
    .catch(error);
}

