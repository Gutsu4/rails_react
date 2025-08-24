import Header from './Header'
import Title from './Title'
import {ReactNode} from 'react';

export default function Layout({children,title}: { children: ReactNode ,title: string}) {
    return (
        <div>
            <Header/>
            <Title title={ title } />
            <main>
                {children}
            </main>
        </div>
    )
}