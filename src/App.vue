<template>
  <AuthApp  />
  <!-- <MainApp/> -->
</template>

<script>

  // Import apps
  import AuthApp from './views/Auth/Master.vue';

  export default {
      name: 'App',
      data() {
         
          return {
              
          };
      },
      created() {
          // console.log("App app");
      },
      components: {
          AuthApp,
          // MainApp
      },
      created() {
                         
                      
          
      }
  }
</script>