import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { observer } from 'mobx-react'
import login from '@/store/login'
import ContentLayout from '@/components/layout/ContentLayout'
import HeaderAccount from '@/components/HeaderAccount'
import styles from './index.less'

function Index(props) {
  const location = useLocation()
  useEffect(() => {
    window.dispatchEvent(new PopStateEvent('popstate', { state: null }))
  }, [location.pathname])
  return (
    <ContentLayout
      // header
      renderHeaderLeft={() => {
        return 'header-left'
      }}
      renderHeaderRight={<HeaderAccount />}
      // sideMenu
      renderLogo={() => {
        return <div>side-logo</div>
      }}
      allMenu={login.allMenu}
      menuTree={login.menuTree}
      menuValueKey="menuCode" // 作为唯一key
      sideMenuShowSearch={true}
    >
      <div className={styles.main_wrap}>{renderRoutes(props?.route?.routes ?? [])}</div>
    </ContentLayout>
  )
}

export default observer(Index)
