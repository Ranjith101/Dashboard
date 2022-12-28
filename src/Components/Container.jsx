import React from 'react'
import Body from './Body/Body'
import SideMenu from './SideMenu/SideMenu'

const Container = () => {
  return (
    <div className='flex h-[p0vh] items-center justify-center w-[85vw] rounded-xl overflow-hidden'>
        <SideMenu />
        <Body />
    </div>
  )
}

export default Container