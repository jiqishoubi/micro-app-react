import { BrowserRouter, HashRouter, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '@/router'
import './global.less'

// // 渲染路由
// function RouteElement() {
//   const element = useRoutes(routes)
//   return element
// }
function App() {
  return (
    <BrowserRouter>
      <Switch>{renderRoutes(routes)}</Switch>
    </BrowserRouter>
  )
}
export default App
