import router from './router';
import { useUserStore, usePermissionStore } from './store'

import { getToken } from '@/libs/token';

router.beforeEach(async (to, from) => {
    const user = useUserStore()
    const permission = usePermissionStore()
    const token = getToken();
    if(token){
        if(to.path === '/login') {   // 如果在有 token 的情况下，去往 login 页面，则默认到 /
            return '/'
        } else {
            // 是否有登录角色信息
            const hasRoles = user.roles && user.roles.length > 0;
            if(hasRoles) {
                return true
            } else {
                try {
                    // 获取用户信息
                    const roles = await user.getInfo(token)
                    // 通过用户信息，用户权限，生成新的有权限的路由
                    await permission.generateRoutes(roles)
                    return {
                        ...to,
                        replace: true
                    }
                } catch (e) {
                    console.log(e)
                }
            }
        }
    } else {
        // 如果直接写跳转到next('/login')，会发现死循环, /login 一直重定向到 /login。
        // /login?redirect=${to.path} 他的 to.path === '/login'， 所以/login时要用 next, 避免死循环
        if(to.path === '/login') {
            return true
        } else {
            return `/login?redirect=${to.path}`
        }
    }
})
