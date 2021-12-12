import axios from 'axios';
import store from '../store/store'
import { URL } from '../modules/artist/constants'

var CancelToken = axios.CancelToken;
var source = CancelToken.source();

const axiosinstance = axios.create({
    // baseURL: 'https://staging.tokreate.com',
    baseURL: 'http://api.tokreate.com:8200',
    headers: {'Content-Type' : "multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2)},
    cancelToken: source.token
});

axiosinstance.CancelToken = axios.CancelToken;
axiosinstance.isCancel = axios.isCancel;

axiosinstance.interceptors.request.use(
    function(config){
        let excluded_url = [URL.login, URL.signup];
        if(!excluded_url.includes(config.url)){
            config.headers.Authorization = 'bearer '+localStorage.getItem('_token');
        }
        //Do something before request is sent
        return config;   
    },
    function(error){
        //Do something with request error
        console.log('errors', error)
        return Promise.reject(error);
    }
)

axiosinstance.interceptors.response.use(
    function(response){
        // Do something with response data
        let res = {
            data: response.data,
            status: response.status,
            statusText: response.statusText
        }
        if(response.config.method === 'post'){
            if(res.status === 200 || res.status === 201){
                
                let excluded_url = [URL.update_transaction, URL.add_token, URL.add_transfer_ownership_request];
                if(!excluded_url.includes(response.config.url)){
                    store.commit('alerts/addAlert', {message: response.data.result.message, type: 'success'})
                }
            }
        }
        return res;
    },
    function(error){
        //Do something with request error
        let err = {
            data: error.response.data,
            status: error.response.status,
            statusText: error.response.statusText
        }
        
        let message = 'Something went wrong';
        if(typeof err.data.message !== 'undefined'){
            message = err.data.message;
        }

        if(error.response.status === 401 && error.response.config.url !== '/api/login'){
            store.commit('alerts/addAlert', {message: 'Your session has been expired. Please refresh and try to login again.', type: 'danger'})
            // if(error.response.config.url === '/api/login'){
                window.location.href = "/login";
            // }

            localStorage.removeItem('_token');
            localStorage.removeItem('_paymentDetails');
            localStorage.removeItem('_transaction');
            
        }

        if(error.response.config.method === 'post'){
            store.commit('alerts/addAlert', {message: message, type: 'danger'})
        }
        
        return Promise.reject(err);
    }
)


export default axiosinstance;