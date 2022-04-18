import { lazy, Suspense } from 'react'
import { Redirect } from 'react-router-dom'
import LazyLoading from '@/components/LazyLoading'
import UserLayout from '@/layouts/UserLayout'
import SecurityLayout from '@/layouts/SecurityLayout'
import BasicLayout from '@/layouts/BasicLayout'
import Page404 from '@/pages/common/404'
import Login from '@/pages/login'
import Home from '@/pages/home'
import ChildApp from '@/pages/childApp/page1'

const route404 = {
  path: '*',
  component: Page404,
}

let routes = [
  // UserLayout
  {
    path: '/user',
    component: UserLayout,
    routes: [
      {
        path: '/user/login',
        component: Login,
      },
      route404,
    ],
  },
  // 应用
  // SecurityLayout
  {
    path: '/',
    component: SecurityLayout,
    routes: [
      {
        path: '/',
        component: BasicLayout,
        routes: [
          // BasicLayout 业务页面
          {
            path: '/home',
            component: Home,
          },
          // {
          //   path: '/index2',
          //   component: () => import('@/pages/index2'),
          // },
          // 子应用1
          {
            path: '/app-vue3',
            component: ChildApp,
          },
          route404,
        ],
      },
      route404,
    ],
  },
  route404,
]

function Lazycomponent(props) {
  const { importFunc } = props
  const LazyComponent = lazy(importFunc)
  return (
    <Suspense fallback={<LazyLoading />}>
      <LazyComponent />
    </Suspense>
  )
}

// // 处理routes 如果component是懒加载，要包裹Suspense
// function dealRoutes(routesArr) {
//   if (routesArr && Array.isArray(routesArr) && routesArr.length > 0) {
//     routesArr.forEach((route) => {
//       if (route.component && typeof route.component == 'function') {
//         const importFunc = route.component
//         route.component = <Lazycomponent importFunc={importFunc} />
//       }
//       if (route.routes) {
//         dealRoutes(route.routes)
//       }
//     })
//   }
// }
// dealRoutes(routes)

export default routes
