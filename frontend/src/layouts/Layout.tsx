import Header from './Header'
import Title from './Title'
import {ReactNode} from 'react';
import "./../css/Layout.css"

export default function Layout({children,title}: { children: ReactNode ,title: string}) {
    return (
        <div className="container">
            <Header/>
            <Title title={ title } />
            <main className="container">
                {children}
            </main>
        </div>
    )
}