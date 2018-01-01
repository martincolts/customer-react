import axios from 'axios';
import { host } from '../Server/ServerData.js';

const endpoint = "/customer";
export function GetCustomers (succes, error){
    axios.get(host.ip+host.port+endpoint)
    .then(succes)
    .catch(error);
}

export function SaveCustomer (customer,succes,error){
    axios.post(host.ip+host.port+endpoint,customer)
    .then(succes)
    .catch(error);
}

export function UpdateCustomer(id, customer, succes, error){
    axios.put(host.ip+host.port+endpoint+id, customer)
    .then(succes)
    .catch(error);
}

