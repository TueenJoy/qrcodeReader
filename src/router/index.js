import { createRouter, createWebHistory } from 'vue-router'
export const constantRoutes=[
    {
        path:'/',
        redirect:'/home'
        
    },
    {
        path:'/home',
        component:()=>import('../views/home/index.vue')
    },
    
    {
        path:'/login',
        component:()=>import('../views/login/index.vue'),
    },
    {
        path:'/register',
       
        component:()=>import('../views/register/index.vue'),
    },
    {
        path:'/nav',
       
        component:()=>import('../components/home/nav.vue')
    },
    {
      path:'/mod',
    
      component:()=>import('../components/home/mod.vue')
    },
    {
      path:'/article',
      component:()=>import('../components/home/article.vue')
    },
    {
      path:'/footer',
      component:()=>import('../components/footer/footer.vue')
    },
    {
      path:'/articleDetail',
      component:()=>import('../views/home/articleDetail.vue')
    },
    {
      path:'/my',
      component:()=>import('../views/my/index.vue')
    }
   
]
const router=createRouter({
    // history:createWebHashHistory(),使用hash哈希模式
    history:createWebHistory(),
    scrollBehavior:()=>({top:0}),
    routes:constantRoutes
})

router.beforeEach((to,from,next)=>{
    const isLoggedIn = 0// 根据你的登录状态逻辑获取当前的登录状态
    if (to.path === '/home') { // 检测是否进入 home 页面
      if (isLoggedIn==1) { // 如果未登录，则跳转到登录页面
        next('/login');
      } else {
        next(); // 已登录，继续加载 home 页面
      }
    } else {
      next(); // 非 home 页面，继续加载目标页面
    }
  });




export default router