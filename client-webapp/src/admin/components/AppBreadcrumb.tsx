import React from 'react'
import { useLocation } from 'react-router-dom'

import routes from '../AdminRouting'

import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'
import { Breadcrumbs, RouteInfo } from '../CommonTypes'

const AppBreadcrumb = () => {
  const currentLocation = useLocation().pathname

  const getRouteName = (pathname: string, routes: RouteInfo[]) => {
    const currentRoute = routes.find((route: RouteInfo) => route.path === pathname)
    return currentRoute ? currentRoute.name : false
  }

  const getBreadcrumbs = (location: string) => {
    
    const breadcrumbs: Breadcrumbs[] = []
    location.split('/').reduce((prev: string, curr: string, index: number, array: string[]) => {
      const currentPathname = `${prev}/${curr}`
      const routeName = getRouteName(currentPathname, routes)
      routeName &&
        breadcrumbs.push({
          pathname: currentPathname,
          name: routeName,
          active: index + 1 === array.length ? true : false,
        })
      return currentPathname
    })
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs(currentLocation)
  
  return (
    <CBreadcrumb className="m-0 ms-2">
      <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
      {breadcrumbs.map((breadcrumb: Breadcrumbs, index: number) => {
        
        return (
          <CBreadcrumbItem
            {...(breadcrumb.active ? { active: true } : { href: breadcrumb.pathname })}
            key={index}
          >
            {breadcrumb.name}
          </CBreadcrumbItem>
        )
      })}
    </CBreadcrumb>
  )
}

export default React.memo(AppBreadcrumb)
