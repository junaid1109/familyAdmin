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
                                                <button type="button" class="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target=".addModal" >Add</button>
                                            </div>
                                        </div>
                                    </div>
                                    <table id="datatable" class="table table-bordered dt-responsive nowrap" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                                        
                                        <thead>
                                        <tr>
                                            <th>S.no</th>
                                            <th>Event Title</th>
                                            <th>Category Title</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>

                                            <tr v-for="(item,index) in paginatedCats" :key="index">
                                                <td>{{index+1}}</td>
                                                <td>{{item.name}}</td>
                                                <td>{{item.categotryDetail.name}}</td>
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
                            <label for="example-text-input" class="col-md-2 col-form-label">Event</label>
                            <div class="col-md-10">
                                <select class="form-control"  v-model="this.form.eventId" >
                                    <option >Select Event</option>
                                    <option v-for="(item,index) in events" :key="index" :value="item._id">{{ item.name }}</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="example-text-input" class="col-md-2 col-form-label">Category</label>
                            <div class="col-md-10">
                                <select class="form-control"  v-model="this.form.tokenCategoryId" >
                                    <option >Select Category</option>
                                    <option v-for="(item1,index) in categories" :key="index" :value="item1._id" >{{ item1.name }}</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <label class="control-label col-md-2 col-form-label">Select Tokens</label>
                            <div class="col-md-10">
                                <select class="select2 form-control select2-multiple custom-select"  v-model="this.form.tokens" multiple="multiple" data-placeholder="Choose ...">
                                    <option >Select Tokens</option>
                                    <option v-for="(item2,index) in tokens" :key="index" :value="item2._id">{{ item2.name }}</option>
                                </select>
                            </div>
                        </div>
                        
                        <div style="float:right">
                            <button type="submit"  v-on:click="save"  class="btn btn-primary waves-effect waves-light" >Save</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>

<!--Add Modal end-->


<div class="modal fade detailModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="row">
                            <h5 class="modal-title mt-0" id="myLargeModalLabel"> Token Detail</h5>
                    </div>

                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <table v-if="tokensDet && tokensDet.length > 0" id="datatableDetail" class="table table-bordered dt-responsive nowrap" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                        <thead>
                            <tr>
                                <th>S.no</th>
                                <th>Token Title</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item1, index) in tokensDet" :key="index">
                                <td>{{index + 1}}</td>
                                <td>{{item1.title}}</td>
                                <td>{{item1.descritpion}}</td> 
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>


</template>
<script>

    import Header from  '../layout/common/Header.vue';
    import Sidebar from '../layout/common/Sidebar.vue';
    import Footer from '../layout/common/Footer.vue';
    import 'select2/dist/css/select2.min.css';



    export default {

        props: ['page'],

        components: {

                    Header,
                    Sidebar,
                    Footer,
                },

        mounted() {
            this.getResult();
            this.getEvent();
            this.getCategory();
            this.getTokens();
        },

        computed: {
                paginatedCats() {
                    const startIndex = (this.currentPage - 1) * this.pageSize;
                    const endIndex = startIndex + this.pageSize;
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
                    currentPage: 1,
                    pageSize: 10,
                    result: [],
                    tokensDet:[],
                    events:[],
                    categories:[],
                    tokens:[],
                    selectedImage: null,
                    form: {
                        eventId: '',
                        tokenCategoryId: '',
                        tokens:[]
                    },
                };
            },

        methods: {
                async getResult(page=1) {
                       
                        const data = await this.api('GET', this.$main+'/api/v1/admin/events?token=true', null, true);
                        if(data.success===true){
                            this.result =  data.data
                        }
                },

                async detailModal(id) {
                    this.tokensDet = '';

                    try {
                        const data = await this.api('GET', `${this.$main}/api/v1/admin/events/${id}`, null, true);

                        if (data.success === true) {
                            $('.detailModal').modal('show');
                            this.tokensDet = data.data.tokens;
                            console.log(this.tokensDet);
                        } else {
                            console.error('API request was not successful:', data);
                        }
                    } catch (error) {
                        console.error('An error occurred during the API request:', error);
                    }
                },

                async tokenDetail(id) {
                    const data = await this.api('GET', this.$main + `/api/v1/admin/events/token-category/tokens/id/${id}`, null, true);
                    if (data.success === true) {

                        return this.mapTokenDetails(data.data);
                    }
                },

                mapTokenDetails(tokenDetails) {
                    return {
                        _id: tokenDetails._id,
                        title: tokenDetails.name, // Assuming name is the equivalent of title
                        description: tokenDetails.description,
                        status: tokenDetails.status,
                        tokenCategoryId: this.form.tokenCategoryId
                    };
                },

                async save() {
                        var selectedTokens = $(".select2").val();
                        var tokensArray = [];

                        if (selectedTokens && selectedTokens.length > 0) {
                            for (const item of selectedTokens) {
                                const tokenDetails = await this.tokenDetail(item);
                                tokensArray.push(tokenDetails);
                            }
                           
                        } else {
                            // Handle the case when no values are selected
                            tokensArray = '';
                        }

                        const params = {
                            eventId: this.form.eventId,
                            tokenCategoryId: this.form.tokenCategoryId,
                            tokens:tokensArray,
                        }

                        try {
                            const data = await this.api('POST', this.$main + '/api/v1/admin/events/tokens', params, true);

                            if (data.success === true) {
                                location.reload();
                            } else {
                                console.error('API request was successful, but data.success is not true:', data);
                            }
                        } catch (error) {
                            console.error('An error occurred while making the API request:', error);
                        }

                        
                },

                async getEvent() {
                        const data = await this.api('GET', this.$main+'/api/v1/admin/events', null, true);
                        if(data.success===true){
                            this.events =  data.data
                        }
                },

                async getCategory() {
                        const params = {
                            page: 1,
                            limit: 10,
                        }
                            const queryString = new URLSearchParams(params).toString();
                            const urlWithParams = `${this.$main}/api/v1/admin/events/token-category/all?${queryString}`;
                            const data = await this.api('GET', urlWithParams, null,true);
                            if (data.success === true) {
                                this.categories = data.data;
                            }
                },

                async getTokens() {
                        const params = {
                            page: 1,
                            limit: '1000',
                            }
                        const data = await this.api('GET', this.$main+'/api/v1/admin/events/token-category/tokens/all', params,true);
                        if(data.success===true){
                            this.tokens =  data.data
                        }
                },
        }
    }

</script>

<style scoped>
    .custom-select {
    font-size: 16px; /* Adjust the font size as needed */
    padding: 10px;   /* Adjust the padding as needed */
    }
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