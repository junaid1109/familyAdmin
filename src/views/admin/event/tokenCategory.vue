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
                                            <th>Name</th>
                                            <th>Image</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>

                                            <tr v-for="(item,index) in paginatedCats" :key="index">
                                                <td>{{index+1}}</td>
                                                <td>{{item.name}}</td>
                                                <td><img crossorigin="anonymous" :src="this.$web+'/'+item.image"  alt="No image" width="100" height="100"></td>
                                                 <td>
                                                    <button type="button"  @click="detailModal(item._id)" class="btn btn-info"  ><i class="bx bx-bullseye"></i></button>
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
                                <br>
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

 <!--Add Detail start-->

    <div class="modal fade detailModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="row">
                            <h5 class="modal-title mt-0" id="myLargeModalLabel"> Detail {{ page }}</h5>
                    </div>

                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <form @submit.prevent="onSubmit">
                        <input class="form-control" type="hidden" v-model="this.form.id" />
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
                                <br>
                                <img v-if="selectedImage" :src="this.$web+'/'+selectedImage" crossorigin="anonymous"  alt="Selected Image1" width="100" height="100">
                                <img v-if="uploadImage" :src="uploadImage" crossorigin="anonymous"  alt="Selected Image1" width="100" height="100">
                            </div>
                        </div>

                        <div style="float:right">
                            <button type="submit"  :disabled="v$.form.$invalid" v-on:click="updateSave"  class="btn btn-primary waves-effect waves-light" >Save</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>

<!--Add Detail end-->

</template>
<script>

    import Header from  '../layout/common/Header.vue';
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
                    this.getResult(newPage);
                    },
            },

        data() {
                return {
                    nameSearch: '',
                    currentPage: 1,
                    pageSize: 10,
                    result: [],
                    ImageCat:'',
                    selectedImage: null,
                    uploadImage:null,
                    form: {
                        name: '',
                        description: '',
                        id:''
                    },
                };
            },

        validations() {

            return {

                form: {
                    name: {required},
                    description: {required},
                }
            }
            },

        methods: {

                async getResult(page=1) {
                    
                        const params = {
                            page: 1,
                            limit:''
                        }
                            const queryString = new URLSearchParams(params).toString();
                            const urlWithParams = `${this.$main}/api/v1/admin/events/token-category/all?${queryString}`;
                            const data = await this.api('GET', urlWithParams, null, true);
                            if (data.success === true) {
                                this.result = data.data;
                            }
                },

                async save() {

                    let formData = new FormData();
                    formData.append('name', this.form.name);
                    formData.append('description', this.form.description);
                    formData.append('image', this.ImageCat);
                            
                    const apiUrl = this.$main+`/api/v1/admin/events/token-category`;
                    const token = localStorage.getItem('token');

                    axios.defaults.withCredentials = true;
                    let headers = {
                        'Content-Type': 'multipart/form-data',
                    };
                    headers['Authorization'] = `Bearer ${JSON.parse(token)}`;
                    await axios.post(apiUrl, formData, {headers}).then(response => {
                        if (response.data.success === true) {
                                location.reload();
                            } else if (response.data.success === false) {
                                this.onFailure(response.data.message);
                            }
                    });

                },

                async updateSave() {   

                    // let formData = new FormData();
                    // formData.append('id', this.form.id);
                    // formData.append('name', this.form.name);
                    // formData.append('description', this.form.description);
                    // if (this.ImageCat !== '') {
                    //     formData.append('image', this.ImageCat);
                    // }

                    let formDataObject = {
                        id: this.form.id,
                        name: this.form.name,
                        description: this.form.description,
                    };

                    if (this.ImageCat !== '') {
                        formDataObject.image = this.ImageCat;
                    }
                    let formDataJSON = JSON.stringify(formDataObject);
                    
                    // const param = {
                    //     id:this.form.id,
                    //     name:this.form.name,
                    //     description:this.form.description,
                    // }

                    const apiUrl = `${this.$main}/api/v1/admin/events/token-category/${this.form.id}`; // Adjust the URL here

                    try {
                        const response = await this.api('PATCH', apiUrl, formDataJSON, true);

                        if (response.data.success === true) {
                        // location.reload();
                        } else if (response.data.success === false) {
                        this.onFailure(response.data.message);
                        }
                    } catch (error) {
                        console.error('Error:', error);
                        this.onFailure('An error occurred while updating the data.');
                    }
                },

                async detailModal(id){
                    const data = await this.api('GET', this.$main+`/api/v1/admin/events/token-category/id/${id}`, null, true);
                        if (data.success === true) {
                                $('.detailModal').modal('show')
                                this.res =  data.data
                                this.form.name= this.res.name;
                                this.form.description= this.res.description;
                                this.form.id= this.res._id;
                                this.selectedImage= this.res.image;
                            }
                    },

                handleFileUpload(event) {
                    const file = event.target.files[0];
                    this.ImageCat = event.target.files[0];

                    if (file) {
                        // Assuming you have a method to handle image previews
                        this.previewImage(file);
                    }
                    },
                    
                previewImage(file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        this.uploadImage = e.target.result;
                        this.selectedImage = null
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