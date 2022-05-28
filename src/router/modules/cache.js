import Layout from '@/layout'

export default {
    path: '/cache',
    name: '_Cache',
    redirect: '/cache/index',
    component: Layout,
    children: [
        {
            path: 'index',
            name: 'Cache',
            meta: {
                title: '缓存模块测试',
                icon: 'icon-huancunzhongxin'
            },
            component: () => import('@/views/cache')
        }
    ]
}
