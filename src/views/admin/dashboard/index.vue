<template >
<body data-sidebar="dark">

        <!-- Begin page -->
        <div id="layout-wrapper">

            <Header></Header>
            <Sidebar></Sidebar>


        <div class="main-content">

                        <div class="page-content">
                            <div class="container-fluid">

                                <!-- start page title -->
                                <div class="row">
                                    <div class="col-12">
                                        <div class="page-title-box d-flex align-items-center justify-content-between">
                                            <h4 class="mb-0 font-size-18">Dashboard</h4>

                                            <div class="page-title-right">
                                                <ol class="breadcrumb m-0">
                                                    <li class="breadcrumb-item active">Welcome to Dashboard</li>
                                                </ol>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <!-- end page title -->

                                <div class="row">
                                    <div class="col-xl-12">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="card mini-stats-wid">
                                                    <div class="card-body">
                                                        <div class="media">
                                                            <div class="media-body">
                                                                <p class="text-muted font-weight-medium">Events</p>
                                                                <h4 class="mb-0">0</h4>
                                                            </div>

                                                            <div class="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                                                <span class="avatar-title">
                                                                    <i class="bx bx-copy-alt font-size-24"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="card mini-stats-wid">
                                                    <div class="card-body">
                                                        <div class="media">
                                                            <div class="media-body">
                                                                <p class="text-muted font-weight-medium">Tokens</p>
                                                                <h4 class="mb-0">0</h4>
                                                            </div>

                                                            <div class="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                                                <span class="avatar-title">
                                                                    <i class="bx bx-copy-alt font-size-24"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="card mini-stats-wid">
                                                    <div class="card-body">
                                                        <div class="media">
                                                            <div class="media-body">
                                                                <p class="text-muted font-weight-medium">Token</p>
                                                                <h4 class="mb-0">0</h4>
                                                            </div>

                                                            <div class="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                                                <span class="avatar-title">
                                                                    <i class="bx bx-copy-alt font-size-24"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="card mini-stats-wid">
                                                    <div class="card-body">
                                                        <div class="media">
                                                            <div class="media-body">
                                                                <p class="text-muted font-weight-medium">Activity</p>
                                                                <h4 class="mb-0">0</h4>
                                                            </div>

                                                            <div class="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                                                                <span class="avatar-title rounded-circle bg-primary">
                                                                    <i class="bx bx-archive-in font-size-24"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                              
                            </div>
                            <!-- container-fluid -->
                        </div>


                        <Footer></Footer>
            </div>
             </div>
             </body> 
      


        
</template>

<script>

    import Header from '../layout/common/Header.vue';
    import Sidebar from '../layout/common/Sidebar.vue';
    import Footer from '../layout/common/Footer.vue';

    export default {

            components: {

                        Header,
                        Sidebar,
                        Footer,
                    },


            }

</script>


<style>
.readonly-color{
    background-color: #c5c5c5;
}

.modal.body{
    background-color: #e5e5e594;
}
</style>