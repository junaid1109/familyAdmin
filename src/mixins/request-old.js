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


        async api(method, path, data, authenticate = false, withCredentials = false,dataType=false) {
          const headers = {};
          
            if (authenticate) {
              // You can add authentication headers here if needed
              // const token = localStorage.getItem('token');
              const token = localStorage.getItem('token');
              if (token) {
                headers['Authorization'] = `Bearer ${JSON.parse(token)}`;
              }
            }

            const requestOptions = {
              method: method,
              headers: headers,
              credentials: withCredentials ? 'include' : 'same-origin',
            };
            
            if ((method === 'POST' || method === 'PUT' || method === 'PATCH') && data) {

              if (dataType=='json') {

                requestOptions.body = JSON.stringify(data);

              } else if (dataType=='multipart') {


                const formData = new FormData();
                for (const key in data) {
                  formData.append(key, data[key]);
                }
                requestOptions.body = formData;
              }

              else{
                console.log("else")
              }

            }

            try {
              const response = await fetch(path, requestOptions);
              const result = await response.json();
        
              // You may want to handle errors or status codes here
        
              return result;
            } catch (error) {
              console.error('Error making API request:', error);
              throw error;
            }
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
