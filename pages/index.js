import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Footer, Hero, Loader, Navbar, Services, Transactions} from '../components'

export default function Home() {
    return (
        <div className="min-h-screen">
            <div className="gradient-bg-welcome">
                <Navbar />
                <Hero />
            </div>
            <Services />
            <Transactions />
            <Footer />
        </div>
    )
}
