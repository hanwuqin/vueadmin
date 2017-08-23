import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import User from '@/components/User'
import sessionStore from '@/store/store';
Vue.use(Router)
const router = new Router({
	routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
      component: Home
    },
    {
      path: '/user',
      name: 'User',
      meta: {
            requireAuth: true,
        },
      component: User
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

//路由拦截器
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        var admin_user = sessionStore.getItem('admin_user_info');
        if (admin_user != null && admin_user.admin_id) {
            next();
        }else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
})
export default router