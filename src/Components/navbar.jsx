import { useEffect, useState } from "react";

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
            <div className="navbar shadow-xl bg-base-100">
                <div className="flex-1 font-bold">
                    <a className="btn btn-ghost font-bold gap-0 text-secondary text-4xl">React<span className="text-primary">Router</span></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li className="font-bold text-xl"><a>Home</a></li>
                        <li className="font-bold text-xl"><a>Blogs</a></li>
                        <li className="font-bold text-xl"><a>Bookmark</a></li>                        
                    </ul>
                    <input onChange={handleToggle} type="checkbox" className="toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"/>
                </div>
            </div>
        </div>
    );
};

export default navbar;