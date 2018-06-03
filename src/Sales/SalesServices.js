import axios from 'axios';
import { host } from '../Server/ServerData.js';

const endpoint = '/sale'

export function GetSales (success, error){
    axios.get(host.ip+host.port+endpoint)
    .then(success)
    .catch(error);
}
export function SaveSale (sale, success, error){
    axios.post(host.ip+host.port+endpoint,sale)
    .then(success)
    .catch(error);
}