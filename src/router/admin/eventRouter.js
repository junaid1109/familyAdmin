
import Events from '../../views/admin/event/index.vue';
import Event from '../../views/admin/event/event.vue';

const routes = [

    {
        name:'Events',
        component: Events,
        path:"/events",
        meta:{title:'Events'}
    },

    {
        name:'Event',
        component: Event,
        path:"/events/:id",
        meta:{title:'Event'}
    },
    
    
]



export default routes;  
