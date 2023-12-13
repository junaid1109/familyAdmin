import VueRouteMiddleware from "vue-route-middleware"
import AuthMiddleware from "../middleware/Auth"
import adminRoutes from './admin/authRouter'
import Dashboard from './dashboardRouter'
import Event from './admin/eventRouter'
import Token from './admin/tokenRouter'
import { createRouter, createWebHistory} from 'vue-router';

const routes = [
    ...adminRoutes,
    ...Dashboard,
    ...Event,
    ...Token,
]

const router = createRouter({
    history:createWebHistory(),
    routes
 
});


router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();      

  });

    router.beforeEach(AuthMiddleware);

    // router.beforeEach(VueRouteMiddleware({ AuthMiddleware }));

export default router;  