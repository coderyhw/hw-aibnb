import React, { memo } from 'react'
import routes from '@/router'
import { useRoutes } from 'react-router-dom'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import useScrollTop from './hooks/useScrollTop'

export default memo(function App() {
  useScrollTop()
  return (
    <div className='app'>
      <AppHeader />
      <div className="page">
        {useRoutes(routes)}
      </div>
      <AppFooter />
    </div>
  )
})

