import Header from './Header'
import {ReactNode} from 'react';
import "./../css/Layout.css"

export default function Layout({children}: { children: ReactNode ,title: string}) {
    return (
        <div>
            <Header/>
            <main>
                {children}
            </main>
        </div>
    )
}