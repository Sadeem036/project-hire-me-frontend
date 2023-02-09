import style from '@/components/navbar/navbar.module.css'
import logoImage from '../../../public/logo.jpg'
import Image from 'next/image'
import Router, { useRouter } from 'next/router'

export default function Navbar() {
    const router = useRouter()
    return (
        <div className={style.container}>
            <div className={style.image}>
                <div >
                    <Image className={style.logo}
                        src={logoImage}
                        alt="Picture of the author"
                    />
                </div>
            </div>
            <div className={style.nav}>
                <ul className={style.ul}>
                    <li className={style.li}><a href="#home">Home</a></li>
                    <li className={style.li}><a href="#contact">Contact</a></li>
                    <li className={style.li}><a href="#about">About</a></li>
                </ul>
            </div>

            <div className={style.button}>
                <button onClick={()=>{router.push("/signup-customer")}} className={style.customer}>Customer</button>
                <button onClick={()=>{router.push("/signup-emp")}} className={style.employee}>Employee</button>
            </div>
            <div></div>

        </div>




    )
}