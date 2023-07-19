import Navbar from "./navbar";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: '300',
    subsets: ['latin'],
})

export default function Layout({ children }) {
    return (
        <div className={poppins.className}>
            <Navbar />
            <main>{children}</main>
        </div>
    )
}