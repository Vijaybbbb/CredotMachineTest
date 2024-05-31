import axios from "axios";

//axios configuration

const sampleUrl="https://credotmachinetest-1.onrender.com"

export const axiosRequest=axios.create({
       baseURL:sampleUrl,  
})