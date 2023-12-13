
import TokenCategory from '../../views/admin/event/tokenCategory.vue';
import Token from '../../views/admin/event/token.vue';

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
    
]



export default routes;  
