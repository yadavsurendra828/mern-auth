import React from "react"
import { NavLink, useLocation } from "react-router-dom"
import PropTypes from "prop-types"
import PrivateRoute from "../PrivateRoutes"

export const AppSidebarNav = ({ items }: any) => {
  const location = useLocation()
  const navLink = (
    name: string,
    icon: any,
    badge: { color: string | undefined; text: string | number | boolean },
  ) => {
    return (
      <>
        {icon && icon}
        {name && name}
        {/* {badge && (
          <CBadge color={badge.color} className="ms-auto">
            {badge.text}
          </CBadge>
        )} */}
      </>
    )
  }

  const navItem = (item: any, index: number) => {
    const { component, name, badge, icon, ...rest } = item
    const Component = component
    return (
      <Component
        {...(rest.to &&
          !rest.items && {
            component: NavLink,
          })}
        key={index}
        {...rest}
      >
        {navLink(name, icon, badge)}
      </Component>
    )
  }
  const navGroup = (item: any, index: number) => {
    const { component, name, icon, badge, to, ...rest } = item
    const Component = component
    return (
      <Component
        idx={String(index)}
        key={index}
        toggler={navLink(name, icon, badge)}
        visible={location.pathname.startsWith(to)}
        {...rest}
      >
        {item.items?.map((item: any, index: number) =>
          item.items ? navGroup(item, index) : navItem(item, index),
        )}
      </Component>
    )
  }

  return (
    <React.Fragment>
      <PrivateRoute>
        {items &&
          items.map((item: any, index: number) =>
            item.items ? navGroup(item, index) : navItem(item, index),
          )}
      </PrivateRoute>
    </React.Fragment>
  )
}

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
}
