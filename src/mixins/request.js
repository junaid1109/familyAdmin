import axios from "./interceptor";
import router from "../router";
import Swal from 'sweetalert2';


export const request = 
{
    
    methods: 
    {
        loadJS(scripts) {
            scripts.forEach((script) => {
              // if(!this.isScriptAlreadyIncluded(script,'script','src')){//check script alread load or not
                let tag = document.createElement("script");
                tag.setAttribute('type','text/javascript');
                tag.setAttribute("src", script);
                tag.async = true;
                document.body.appendChild(tag);
              // }
            });
        },

        onSuccess(data) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: data.message || 'Action  Successfully',
                showConfirmButton: false,
                timer: 1500
            });

        },

        async api(requestType = "POST", url, data = {}, authenticate = false,formData=false) {
            let request = null;
            let response = {};
            let headers;

            if (formData) {
                headers = {
                    'Content-Type': 'multipart/form-data',
                };
            } else {
                headers = {
                    'Content-Type': 'application/json',
                };
            }

            if (authenticate) {
                const token = localStorage.getItem('token');
                if (token) {
                  headers['Authorization'] = `Bearer ${JSON.parse(token)}`;
                }
              }

        
            switch (requestType.toUpperCase()) {
                case "GET":
                    request = axios.get(url, { headers, params: data });
                    break;
                case "POST":
                    request = axios.post(url, data, { headers });
                    break;
                case "PUT":
                    request = axios.put(url, data, { headers });
                    break;
                case "DELETE":
                    request = axios.delete(url, { headers, data });
                    break;
                case "PATCH":
                    request = axios.patch(url, data, { headers });
                    break;
                default:
                    // Default to POST for unrecognized request types
                    request = axios.post(url, data, { headers });
            }
        
            await request
                .then((resp) => {
                    response = { ...resp.data };
                })
                .catch((error) => {
                    response = { data: { data: null, paginationData: null }, status: 0 };
                })
                .finally(() => {
                });
        
            return response;
        },

        onFailure(data) {
            this.hide_error = false;
              Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: data.message || 'Something went wrong',
                showConfirmButton: false,
                timer: 1500
              });
        },

    },

    
};
