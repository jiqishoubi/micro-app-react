import { observer } from 'mobx-react'
/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'

function Index() {
  // name(必传)：应用名称
  // url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
  // baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
  return (
    <div>
      <h1>子应用</h1>
      <micro-app name="app1" url="http://localhost:8052/" baseroute="/childApp"></micro-app>
    </div>
  )
}
export default observer(Index)
