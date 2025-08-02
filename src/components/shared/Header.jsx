import React from 'react'
import logoImg from '@/assets/logo.svg'
import { pages } from '@/db/pages';

const Header = ({ path, setPath }) => {
    return (
        <header className="flex items-center mb-12 justify-between">
            <div className="flex items-center">
                <img src={logoImg} alt='Logo' className="h-10" />
            </div>
            <ul className="ml-4 text-sm text-zinc-400 flex gap-8">
                {pages.map((page) => (
                    <li key={page.label}>
                        <button
                            type="button"
                            onClick={() => setPath(page.url)}
                            className={` ${path === page.url && 'active-page'} hover:text-zinc-200  cursor-pointer transition-all`}
                        >
                            {page.label}
                        </button>
                    </li>
                ))}
            </ul>
        </header>
    )
}

export default Header