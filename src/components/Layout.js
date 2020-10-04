import React from 'react'
import {Link }  from 'gatsby';
import Navigation from './Navigation';
import Header from './Header'
export default function Layout({children}) {
    return <>
    
    <Header />
    <Navigation />
    {children}
    </>
}
