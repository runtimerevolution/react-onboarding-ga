import { Outlet } from 'react-router-dom'
import { NavigationBar } from '@components'

const Root = function () {
  return (
    <>
      <NavigationBar />
      <div className="page-content">
        <Outlet />
      </div>
    </>
  )
}

export default Root
