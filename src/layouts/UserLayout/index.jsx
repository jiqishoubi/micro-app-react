// 登录页
import Footer from '@/components/layout/Footer'
import styles from './index.less'
// import { Outlet } from 'react-router-dom' // Outlet用于渲染children
import { renderRoutes } from 'react-router-config'
function Index(props) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{renderRoutes(props?.route?.routes ?? [])}</div>
      <Footer />
    </div>
  )
}

export default Index
