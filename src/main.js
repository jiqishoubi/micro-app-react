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
ReactDOM.render(<App />, document.getElementById('root-main'))
