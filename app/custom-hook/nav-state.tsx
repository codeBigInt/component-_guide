'use client'
import React from 'react'

const useNavState = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleNav = () => isOpen ? setIsOpen(true) : setIsOpen(false)
    return {isOpen, setIsOpen, toggleNav  }
}

export default useNavState
