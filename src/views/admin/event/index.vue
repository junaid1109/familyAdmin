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
                                <h4 class="mb-0 font-size-18">{{ page }} List</h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a href="javascript: void(0);">Admin</a></li>
                                        <li class="breadcrumb-item active">{{ page }} List</li>
                                    </ol>
                                </div>
                                
                            </div>
                        </div>
                    </div>     
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="card-header mb-2">
                                        <div class="row">
                                            <div class="col-md-11">
                                                <h4 class="card-title">{{ page }} Management</h4>
                                            </div>
                                            <div class="col-md-1">
                                                <button type="button" class="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target=".addModal">Add</button>
                                            </div>
                                        </div>
                                    </div>
                                    <table id="datatable" class="table table-bordered dt-responsive nowrap" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                                        
                                        <thead>
                                        <tr>
                                            <th>S.no</th>
                                            <th>Category</th>
                                            <th>Name</th>
                                            <th>Image</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>

                                            <tr v-for="(item,index) in paginatedCats" :key="index">
                                                <td>{{index+1}}</td>
                                                <td>{{item.category}}</td>
                                                <td>{{item.name}}</td>
                                                <td><img crossorigin="anonymous" :src="this.$web+item.image"  alt="No image" width="100" height="100"></td>
                                                 <td style="display:flex; justify-content: space-around; align-items: center;">
                                                    <router-link :to="{name:'Event',params:{id:item._id}}" title="View Event" class="btn btn-info btn-sm">
                                                        <i class="bx bx-bullseye"></i>
                                                    </router-link>
                                                    <button   class="btn btn-danger btn-sm" @click="deleteEvent(item._id)"><i class="bx bx-bx bx-trash"></i></button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div style="display: flex; align-items: center;">
                                        <button class="btn btn-success" :disabled="currentPage === 1" @click="currentPage--">Prev</button>
                                        <div v-for="page in pageCount" :key="page" style="margin: 0 5px;">
                                        <button class="btn btn-info"
                                            @click="currentPage = page"
                                            :class="{ 'selected': currentPage === page }"
                                        >
                                            {{ page }}
                                        </button>
                                        </div>
                                        <button class="btn btn-success" :disabled="currentPage === pageCount" @click="currentPage++">Next</button>
                                    </div>
                                </div>
                            </div>
                        </div> <!-- end col -->
                    </div> <!-- end row -->

                </div>
            </div>
        </div>
    </body>

    <!--Add Model start-->

    <div class="modal fade addModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="row">
                            <h5 class="modal-title mt-0" id="myLargeModalLabel"> Add {{ page }}</h5>
                    </div>

                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <form @submit.prevent="onSubmit">
                        <div class="form-group row">
                            <label for="example-text-input" class="col-md-2 col-form-label">Name</label>
                            <div class="col-md-10">
                                <input class="form-control" type="text" v-model="v$.form.name.$model" required/>
                                <div class="input-errors" v-for="(error, index) of v$.form.name.$errors" :key="index">
                                    <div class="error-msg">{{ error.$message }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="example-text-input" class="col-md-2 col-form-label">Category</label>
                            <div class="col-md-10">
                                <select class="form-control" v-model="v$.form.category.$model">
                                        <option selected value="" disabled>Select</option>
                                        <option value="INDOOR">INDOOR</option>
                                        <option value="OUTDOOR">OUTDOOR </option>
                                    </select>
                                <div class="input-errors" v-for="(error, index) of v$.form.category.$errors" :key="index">
                                    <div class="error-msg">{{ error.$message }}</div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="example-text-input" class="col-md-2 col-form-label">Start Time</label>
                            <div class="col-md-4">
                                <input class="form-control" type="datetime-local" v-model="v$.form.startTime.$model" required/>
                                <div class="input-errors" v-for="(error, index) of v$.form.startTime.$errors" :key="index">
                                    <div class="error-msg">{{ error.$message }}</div>
                                </div>
                            </div>

                            <label for="example-text-input" class="col-md-2 col-form-label">End Time</label>
                            <div class="col-md-4">
                                <input class="form-control" type="datetime-local" v-model="v$.form.endTime.$model" required/>
                                <div class="input-errors" v-for="(error, index) of v$.form.endTime.$errors" :key="index">
                                    <div class="error-msg">{{ error.$message }}</div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="example-text-input" class="col-md-2 col-form-label">Street 1</label>
                            <div class="col-md-10">
                                <input class="form-control" type="text" v-model="v$.form.address.street1.$model" required/>
                                <div class="input-errors" v-for="(error, index) of v$.form.address.street1.$errors" :key="index">
                                    <div class="error-msg">{{ error.$message }}</div>
                                </div>
                            </div>
                        </div>


                        <div class="form-group row">
                            <label for="example-text-input" class="col-md-2 col-form-label">Street 2</label>
                            <div class="col-md-10">
                                <input class="form-control" type="text" v-model="v$.form.address.street2.$model" required/>
                                <div class="input-errors" v-for="(error, index) of v$.form.address.street2.$errors" :key="index">
                                    <div class="error-msg">{{ error.$message }}</div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="example-text-input" class="col-md-2 col-form-label">City</label>
                            <div class="col-md-4">
                                <input class="form-control" type="text" v-model="v$.form.address.city.$model" required/>
                                <div class="input-errors" v-for="(error, index) of v$.form.address.city.$errors" :key="index">
                                    <div class="error-msg">{{ error.$message }}</div>
                                </div>
                            </div>

                            <label for="example-text-input" class="col-md-2 col-form-label">State</label>
                            <div class="col-md-4">
                                <input class="form-control" type="text" v-model="v$.form.address.state.$model" required/>
                                <div class="input-errors" v-for="(error, index) of v$.form.address.state.$errors" :key="index">
                                    <div class="error-msg">{{ error.$message }}</div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="example-text-input" class="col-md-2 col-form-label">Zip Code</label>
                            <div class="col-md-4">
                                <input class="form-control" type="text" v-model="v$.form.address.zipCode.$model" required/>
                                <div class="input-errors" v-for="(error, index) of v$.form.address.zipCode.$errors" :key="index">
                                    <div class="error-msg">{{ error.$message }}</div>
                                </div>
                            </div>

                            <label for="example-text-input" class="col-md-2 col-form-label">Country</label>
                            <div class="col-md-4">
                                <input class="form-control" type="text" v-model="v$.form.address.country.$model" required/>
                                <div class="input-errors" v-for="(error, index) of v$.form.address.country.$errors" :key="index">
                                    <div class="error-msg">{{ error.$message }}</div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="example-text-input" class="col-md-2 col-form-label">Description</label>
                            <div class="col-md-10">
                                <textarea  class="form-control" rows="8" v-model="v$.form.description.$model"></textarea>
                                <div class="input-errors" v-for="(error, index) of v$.form.description.$errors" :key="index">
                                    <div class="error-msg">{{ error.$message }}</div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="example-text-input" class="col-md-2 col-form-label">Upload image</label>
                            <div class="col-md-10">
                                <input class="form-control" id="file" ref="fileInput" type="file" @input="pickFile" @change="handleFileUpload">
                                <img v-if="selectedImage" :src="selectedImage" alt="Selected Image" width="100" height="100">

                            </div>
                        </div>

                        <div style="float:right">
                            <button type="submit"  :disabled="v$.form.$invalid" v-on:click="save"  class="btn btn-primary waves-effect waves-light" >Save</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>

    <!--Add Modal end-->



</template>
<script>

    import Header from  '../layout/common/Header.vue';
    import Sidebar from '../layout/common/Sidebar.vue';
    import Footer from '../layout/common/Footer.vue';
    import useVuelidate from '@vuelidate/core'
    import { required } from '@vuelidate/validators'

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

            mounted() {
                this.getResult();
            },

            computed: {
                paginatedCats() {
                        const startIndex = (this.currentPage - 1) * this.pageSize;
                        const endIndex = startIndex + this.pageSize;
                        // Assuming this.result is your complete data
                        return this.result.slice(startIndex, endIndex);
                    },
                    pageCount() {
                        return Math.ceil(this.result.length / this.pageSize);
                    },
                },

            watch: {
                        currentPage(newPage) {
                        // Fetch data when the page changes
                        this.getResult(newPage);
                        },
                    },


        data() {

                return {
                    nameSearch:'',
                    currentPage: 1,
                    pageSize: 10,
                    result:[],
                    selectedImage: null,
                    file: null,
                    form: {
                            name: '',
                            category: '',
                            startTime: '',
                            endTime: '',
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
                }
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
                     
                        const storedToken = localStorage.getItem('token');
                        const token = storedToken ? JSON.parse(storedToken) : null;
                        const data =  await this.api('GET',this.$main+'events',null,false,false,token)
                        if(data.success===true){
                            this.result =  data.data
                        }
                },

                async save() {
                    const storedToken = localStorage.getItem('token');
                    const token = storedToken ? JSON.parse(storedToken) : null;
                    const input = document.getElementById('file');
                    const file = input.files[0];
                    const formData = new FormData();
                        formData.append('image', this.file);
                        formData.append('name', this.form.name);
                        formData.append('category', this.form.category);
                        formData.append('startTime', this.form.startTime);
                        formData.append('endTime', this.form.endTime);
                        formData.append('address.street1', this.form.address.street1);
                        formData.append('address.street2', this.form.address.street2);
                        formData.append('address.city', this.form.address.city);
                        formData.append('address.state', this.form.address.state);
                        formData.append('address.zipCode', this.form.address.zipCode);
                        formData.append('address.country', this.form.address.country);
                        formData.append('description', this.form.description);
                        for (const [key, value] of formData.entries()) {
                            console.log(`${key}:`, value);
                        }
                    const data =  await this.api('POST',this.$main+'events',formData,false,true,token)
                    if (data.success === true) {
                            location.reload();
                        } else if (data.success === false) {
                            this.onFailure(data.message);
                        }
                },

                async deleteEvent(id) {
                    alert(id);
                        const storedToken = localStorage.getItem('token');
                        const token = storedToken ? JSON.parse(storedToken) : null;

                        try {
                            const data = await this.api('DELETE', `${this.$main}events/${id}`, null, false, true, token);
                            console.log('Delete Event Response:', data);

                            if (data.success === true) {
                                this.onSuccess(data.message);
                            } else {
                                this.onFailure(data.message);  // Handle the case where success is not true
                            }
                        } catch (error) {
                            console.error('Error:', error);
                            // Handle the error, e.g., display an error message
                            this.onFailure('An error occurred while deleting the event.');
                        }
                    },

                handleFileUpload(event) {
                      const file = event.target.files[0];
                      this.file = event.target.files[0];

                      if (file) {
                        // Assuming you have a method to handle image previews
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

<style>

    .select{
         width:30em;
      }
    .error-msg{
            color:red;
        }

    th,td{
        text-align: center;
        }

    .imagePreviewWrapper {
            width: 250px;
            height: 250px;
            display: block;
            cursor: pointer;
            margin: 0 auto 30px;
            background-size: cover;
            background-position: center center;
        }
        
</style>