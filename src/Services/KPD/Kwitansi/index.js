import { Axios } from "Configs/Axios";

export const GetAllDataKwitansi = ({page = 1, perpage = 10}) => Axios.get(`/kwitansi?page=${page}&limit=${perpage}`);
export const GetDataKwitansiById = (id) => Axios.get(`/kwitansi/${id}`);
export const AddKwitansi = payload => Axios.post('/kwitansi', payload);
