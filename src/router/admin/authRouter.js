
import Login from '../../views/admin/auth/pages/login.vue';

const routes = [

    {
        name:'Login',
        component: Login,
        path:"/login",
        meta:{title:'Login'}
    },
    {
        // Default route for the root path ("/")
        name: 'Default',
        component: Login, // You can replace this with the component you want to render for the root path
        path: '/',
        meta: { title: 'Login' }
    },
    
    
]



export default routes;  
