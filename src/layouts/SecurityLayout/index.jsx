import { useEffect } from 'react'
import { observer } from 'mobx-react'
import login from '@/store/login'
import { useLocation } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { LOGIN_PATH, LOGIN_TOKEN_KEY } from '@/utils/consts'

function Index(props) {
  const location = useLocation()
  const token = localStorage.getItem(LOGIN_TOKEN_KEY) ?? ''
  useEffect(() => {
    if (token && location.pathname !== LOGIN_PATH && !login.userInfo) {
      login.initInfo()
    }
  }, [])
  /**
   * 渲染
   */
  // if (!token && location.pathname !== LOGIN_PATH) {
  //   return <Navigate to={LOGIN_PATH} />
  // }
  // return <Outlet />
  return renderRoutes(props?.route?.routes ?? [])
}

export default observer(Index)
