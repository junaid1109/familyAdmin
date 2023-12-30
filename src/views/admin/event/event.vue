<template>
    <body data-sidebar="dark">

  <Header></Header>
    <Sidebar></Sidebar>
        <div class="main-content">

            <div class="page-content">
                <div class="container-fluid">

                    <div class="row">
                        <div class="col-12">
                            <div class="page-title-box d-flex align-items-center justify-content-between">
                                <h4 class="mb-0 font-size-18">{{page}} 
                                </h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a href="javascript: void(0);">Admin</a></li>
                                        <li class="breadcrumb-item active">{{page}} </li>
                                    </ol>
                                </div>
                                
                            </div>
                        </div>
                    </div>  
                    <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-body">
                                        <form @submit.prevent="onSubmit">
                                            <h4 class="card-title">Event Detail</h4>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group row">
                                                        <label for="txtFirstNameBilling" class="col-lg-2 col-form-label">Category</label>
                                                        <div class="col-lg-3">
                                                            <input class="form-control" type="text" v-model="v$.form.category.$model"/>
                                                            <div class="input-errors" v-for="(error, index) of v$.form.category.$errors" :key="index">
                                                                <div class="error-msg">{{ error.$message }}</div>
                                                            </div>
                                                        </div>
                                                        <label for="txtLastNameBilling" class="col-lg-2 col-form-label">Name</label>
                                                        <div class="col-lg-3">
                                                            <input class="form-control" type="text" v-model="v$.form.name.$model"/>
                                                            <div class="input-errors" v-for="(error, index) of v$.form.name.$errors" :key="index">
                                                                <div class="error-msg">{{ error.$message }}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group row">
                                                        <label for="txtLastNameBilling" class="col-lg-2 col-form-label">Start Date</label>
                                                        <div class="col-lg-4">
                                                            <input class="form-control" type="datetime-local" v-model="v$.form.startTime.$model" />
                                                            <div class="input-errors" v-for="(error, index) of v$.form.startTime.$errors" :key="index">
                                                                <div class="error-msg">{{ error.$message }}</div>
                                                            </div>
                                                        </div>
                                                        <label for="txtLastNameBilling" class="col-lg-2 col-form-label">End Date</label>
                                                        <div class="col-lg-4">
                                                            <input class="form-control" type="datetime-local" v-model="v$.form.endTime.$model" />
                                                            <div class="input-errors" v-for="(error, index) of v$.form.endTime.$errors" :key="index">
                                                                <div class="error-msg">{{ error.$message }}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group row">
                                                        <label for="txtFirstNameBilling" class="col-lg-1 col-form-label">street1</label>
                                                        <div class="col-lg-4">
                                                            <input class="form-control" type="text" v-model="v$.form.address.street1.$model" />
                                                            <div class="input-errors" v-for="(error, index) of v$.form.address.street1.$errors" :key="index">
                                                                <div class="error-msg">{{ error.$message }}</div>
                                                            </div>
                                                        </div>
                                                        <label for="txtLastNameBilling" class="col-lg-1 col-form-label">Street2</label>
                                                        <div class="col-lg-6">
                                                            <input class="form-control" type="text" v-model="v$.form.address.street2.$model" />
                                                            <div class="input-errors" v-for="(error, index) of v$.form.address.street2.$errors" :key="index">
                                                                <div class="error-msg">{{ error.$message }}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group row">
                                                        <label for="txtLastNameBilling" class="col-lg-2 col-form-label">City</label>
                                                        <div class="col-lg-4">
                                                            <input class="form-control" type="text" v-model="v$.form.address.city.$model" />
                                                            <div class="input-errors" v-for="(error, index) of v$.form.address.city.$errors" :key="index">
                                                                <div class="error-msg">{{ error.$message }}</div>
                                                            </div>
                                                        </div>
                                                        <label for="txtLastNameBilling" class="col-lg-2 col-form-label">State</label>
                                                        <div class="col-lg-4">
                                                            <input class="form-control" type="text" v-model="v$.form.address.state.$model" />
                                                            <div class="input-errors" v-for="(error, index) of v$.form.address.state.$errors" :key="index">
                                                                <div class="error-msg">{{ error.$message }}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-6">
                                                    <div class="form-group row">
                                                        <label for="txtLastNameBilling" class="col-lg-2 col-form-label">ZipCode</label>
                                                        <div class="col-lg-4">
                                                            <input class="form-control" type="text" v-model="v$.form.address.zipCode.$model" />
                                                                <div class="input-errors" v-for="(error, index) of v$.form.address.zipCode.$errors" :key="index">
                                                                    <div class="error-msg">{{ error.$message }}</div>
                                                                </div>
                                                        </div>
                                                        <label for="txtLastNameBilling" class="col-lg-2 col-form-label">Country</label>
                                                        <div class="col-lg-4">
                                                            <input class="form-control" type="text" v-model="v$.form.address.country.$model" />
                                                            <div class="input-errors" v-for="(error, index) of v$.form.address.country.$errors" :key="index">
                                                                <div class="error-msg">{{ error.$message }}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            

                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group row">
                                                        <label for="txtLastNameBilling" class="col-lg-2 col-form-label">Description</label>
                                                        <div class="col-lg-12">
                                                            <textarea  class="form-control" rows="8" v-model="v$.form.description.$model">{{ form.description }}</textarea>
                                                            <div class="input-errors" v-for="(error, index) of v$.form.description.$errors" :key="index">
                                                                <div class="error-msg">{{ error.$message }}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="example-text-input" class="col-lg-2 col-form-label">Upload image</label>
                                                <div class="col-md-12">
                                                    <input class="form-control" id="file" ref="fileInput" type="file" @input="pickFile" @change="handleFileUpload">
                                                    <br>
                                                    <img v-if="selectedImage" :src="selectedImage" alt="Selected Image" width="100" height="100">

                                                </div>
                                            </div>


                                            <div class="row mt-3" v-if="!selectedImage">
                                                <div class="col-md-12">
                                                    <img crossorigin="anonymous" :src="this.$web+'/'+result.image"  alt="No image" width="100" height="100">
                                                </div>
                                            </div>

                                            <div class="row mt-3">
                                                <div class="col-md-12">
                                                    <div style="float:right">
                                                        <button type="submit" :disabled="v$.form.$invalid" v-on:click="updateSave"   class="btn btn-primary waves-effect waves-light" >Update</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div> <!-- end col -->
                    </div>

                </div>
            </div>
        </div>
    </body>
</template>
<script>
    import Header from '../layout/common/Header.vue';
    import Sidebar from '../layout/common/Sidebar.vue';
    import Footer from '../layout/common/Footer.vue';
    import useVuelidate from '@vuelidate/core'
    import { required } from '@vuelidate/validators'
    import axios from "axios";

    export default {
        props: ['page'],
        setup () {
                return { v$: useVuelidate() }
        },
        
        components: {

                    Header,
                    Sidebar,
                    Footer,
                },

        created() {
                this.getResult()
            },

        data() {
                return {
                    form: {
                            name: '',
                            category: '',
                            startTime: '',
                            endTime: '',
                            eventImg:'',
                            address: {
                                    street1: '',
                                    street2: '',
                                    city: '',
                                    state: '',
                                    zipCode: '',
                                    country: '',
                                },
                            description:'',
                    },
                    result:{},
                    loading: false,
                    selectedImage: null,
                };
            },

        validations() {

                    return {

                        form: {
                            name: {required},
                            category: {required},
                            startTime: {required},
                            endTime: {required},
                            address: {
                                        street1: { required },
                                        street2: { required },
                                        city: { required },
                                        state: { required },
                                        zipCode: { required },
                                        country: { required },
                                    },
                            description: {required},
                        }
                    }
                },

        methods: {
                async getResult(page=1) {
                        try {
                            const data = await this.api('GET', this.$main+`/api/v1/admin/events/${this.$route.params.id}`, null, true);
                            if (data.success === true) {
                                this.result = data.data;
                                this.form.name = data.data.name;
                                this.form.category = data.data.category;
                                this.form.startTime = data.data.startTime;
                                this.form.endTime = data.data.endTime;
                                this.form.address.street1 = data.data.address.street1;
                                this.form.address.street2 = data.data.address.street2;
                                this.form.address.city = data.data.address.city;
                                this.form.address.state = data.data.address.state;
                                this.form.address.zipCode = data.data.address.zipcode;
                                this.form.address.country = data.data.address.country;
                                this.form.description = data.data.description;
                            }
                        } catch (error) {
                            console.error('Error fetching data:', error);
                        }
                },

                async updateSave(page=1) {  

                    const formData = new FormData();
                        formData.append('name', this.form.name);
                        formData.append('category', this.form.category);
                        formData.append('startTime', this.form.startTime);
                        formData.append('endTime', this.form.endTime);
                        formData.append('address.street1', this.form.address.street1);
                        formData.append('address.street2', this.form.address.street2);
                        formData.append('address.city', this.form.address.city);
                        formData.append('address.state', this.form.address.state);
                        formData.append('address.zipcode', this.form.address.zipCode);
                        formData.append('address.country', this.form.address.country);
                        formData.append('description', this.form.description);
                        if(this.form.eventImg!=''){
                            formData.append('image', this.form.eventImg);
                        }

                        const apiUrl = this.$main+`/api/v1/admin/events/${this.$route.params.id}`;
                        const token = localStorage.getItem('token');

                        axios.defaults.withCredentials = true;
                        let headers = {
                            'Content-Type': 'multipart/form-data',
                        };
                        headers['Authorization'] = `Bearer ${JSON.parse(token)}`;
                        await axios.put(apiUrl, formData, {headers}).then(response => {
                            if (response.data.success === true) {
                                    this.onSuccess(response.data.message);
                                } else if (response.data.success === false) {
                                    this.onFailure(response.data.message);
                                }
                        });

                },

                handleFileUpload(event) {
                    const file = event.target.files[0];
                    this.form.eventImg = event.target.files[0];
                      if (file) {
                        this.previewImage(file);
                      }
                    },
                    
                previewImage(file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        this.selectedImage = e.target.result;
                      };
                      reader.readAsDataURL(file);
                    },
            }
    }
</script>
<style lang="">
    
</style>