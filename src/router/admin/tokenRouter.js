
import TokenCategory from '../../views/admin/event/tokenCategory.vue';
import Token from '../../views/admin/event/token.vue';
import TokenAssigned from '../../views/admin/event/tokenAssigned.vue';

const routes = [

    {
        name:'TokenCategory',
        component: TokenCategory,
        path:"/token-category",
        meta:{title:'Token Category'}
    },

    {
        name:'Token',
        component: Token,
        path:"/tokens",
        meta:{title:'Tokens'}
    },

    {
        name:'TokenAssigned',
        component: TokenAssigned,
        path:"/token-assigned",
        meta:{title:'Token Assigned'}
    },
    
]



export default routes;  
