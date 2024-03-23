import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const navbar = () => {
    const [theme, setTheme]= useState('light')
    useEffect(()=>{
        localStorage.setItem('theme', theme)
        const localTheme =localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    },[theme])
    
    const handleToggle =e=>{
        if(e.target.checked){
            setTheme('night')
        }else{
            setTheme('light')
        }
    }
    console.log(theme)
    return (
        <div>
            <div className="navbar shadow-xl bg-base-100 fixed z-10 ">
                <NavLink className="flex-1 font-bold">
                    <a className="btn btn-ghost font-bold gap-0 text-secondary text-4xl">React<span className="text-primary">Router</span></a>
                </NavLink>
                <div className="flex-none">
                    <ul className="menu menu-horizontal gap-7 px-1">
                        <NavLink to='/' className={({isActive})=>isActive?'font-bold text-xl text-primary':'font-bold text-xl'}>Home</NavLink>
                        <NavLink to='/blogs' className={({isActive})=>isActive?'font-bold text-xl text-primary':'font-bold text-xl'}>Blogs</NavLink>
                        <NavLink to='/bookmarks' className={({isActive})=>isActive?'font-bold text-xl text-primary':'font-bold text-xl'}>Bookmark</NavLink>                        
                    </ul>
                    <input onChange={handleToggle} type="checkbox" className="toggle ml-5 theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"/>
                </div>
            </div>
        </div>
    );
};

export default navbar;