import { Axios } from "Configs/Axios";

export const GetAllDataSp2d = ({page = 1, perpage = 10}) => Axios.get(`/sp2d?page=${page}&limit=${perpage}`);
export const GetDataSp2dById = (id) => Axios.get(`/sp2d/${id}`);
export const AddDataSp2d = (payload) => Axios.post('/sp2d', payload);
export const EditDataSp2d = (id, payload) => Axios.put(`/sp2d/${id}`, payload);
export const DeleteDataSp2d = id => Axios.delete(`/sp2d/${id}`);
