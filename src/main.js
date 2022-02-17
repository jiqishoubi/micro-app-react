import ReactDOM from 'react-dom'
import App from './App'
import microApp from '@micro-zoe/micro-app'

microApp.start({
  // sockjs-node报错 要不然会一直刷新
  plugins: {
    modules: {
      app1: [
        {
          loader(code) {
            if (process.env.NODE_ENV === 'development' && code.indexOf('sockjs-node') > -1) {
              code = code.replace('window.location.port', 8052)
            }
            return code
          },
        },
      ],
    },
  },
})

function dataListener(data) {
  console.log('来自子应用my-app的数据', data)
}

/**
 * 绑定监听函数
 * appName: 应用名称
 * dataListener: 绑定函数
 * autoTrigger: 在初次绑定监听函数时如果有缓存数据，是否需要主动触发一次，默认为false
 */
microApp.addDataListener('app1', dataListener)

// // 解绑监听my-app子应用的函数
// microApp.removeDataListener(appName: string, dataListener: Function)

// // 清空所有监听appName子应用的函数
// microApp.clearDataListener(appName: string)

ReactDOM.render(<App />, document.getElementById('root-main'))
