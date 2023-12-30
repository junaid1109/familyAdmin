<template >
   <div class="vertical-menu">

    <div data-simplebar class="h-100">

        <!--- Sidemenu -->
        <div id="sidebar-menu">
            <!-- Left Menu Start -->
            <ul class="metismenu list-unstyled" id="side-menu">
                <li class="menu-title">Menu</li>

                <li class="main_li" >
                    <router-link to="/dashboard">
                        <i class="bx bx-home-circle"></i>
                        <span>Dashboard</span>
                   </router-link>
                </li>
                
                <li  class="main_li" data-parent-id="1" >
                    <a  class="has-arrow waves-effect" aria-expanded="false">
                        <i class="bx bx-briefcase"></i>
                        <span>Event</span>
                    </a>
                    <ul aria-expanded="false">
                        <li><router-link to="/events" >Events</router-link> </li>
                        <li><router-link to="/token-category" >Token Category</router-link> </li>
                        <li><router-link to="/tokens" >Token</router-link> </li>
                        <li><router-link to="/token-assigned" >Token Assigned</router-link> </li>
                    </ul>
                </li>
                <li class="main_li" data-parent-id="6">
                    <a  class="has-arrow waves-effect">
                        <i class="bx bx-compass"></i>
                        <span>Activity</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li class="sub_li" data-sub-id="7"><router-link to="/users" >Activity</router-link></li>
                    </ul>
                </li>


                <li class="main_li" data-parent-id="17" >
                    <a  class="has-arrow waves-effect">
                        <i class="bx bx-briefcase"></i>
                        <span>Setting</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li class="sub_li" data-sub-id="18"><router-link to="/account" >Accounts</router-link> </li>
                        <li class="sub_li" data-sub-id="20"><router-link to="/webStting">Cms setting</router-link> </li>
                    </ul>
                </li>

            </ul>
            
            
        </div>
        <!-- Sidebar -->
    </div>
</div>
</template>
<script>

    export default {

        mounted() {
            this.loadJS(['./assets/libs/jquery/jquery.min.js','./assets/libs/bootstrap/js/bootstrap.bundle.min.js','./assets/libs/metismenu/metisMenu.min.js','./assets/libs/simplebar/simplebar.min.js','./assets/libs/select2/js/select2.min.js','./assets/js/pages/form-advanced.init.js','./assets/js/app.js'])
        },
        
    }

</script>