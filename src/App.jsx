import { BrowserRouter, HashRouter, useRoutes } from 'react-router-dom'
import routes from '@/router'
import './global.less'

// 渲染路由
function RouteElement() {
  const element = useRoutes(routes)
  return element
}
function App() {
  return (
    <BrowserRouter>
      <RouteElement />
    </BrowserRouter>
  )
}
export default App
