import { useRef } from 'react'
import mobileMenuImage from '../../assets/mobile-menu.png'

export default function MobileMenu() {
    const mobileMenuRef = useRef<HTMLDivElement | null>(null)

    return (
        <div className="mobile-menu lg:hidden">
            <img
                src={mobileMenuImage}
                className='me-5 w-[20px] h-[22px] cursor-pointer'
                onClick={() => mobileMenuRef.current?.classList.add('show-mobile-menu')}
                alt="mobile-menu"
            />

            {/* Mobile Menu */}
            <div
                className='fixed h-screen w-full bg-[#1A1A1B] top-0 left-[-1000px] z-50 py-12'
                ref={mobileMenuRef}
            >
                <ul className='menu-items gap-0 block text-white'>
                    <li className='py-5 w-full hover:bg-red-500 text-center text-[0.9rem]'>BRANDS</li>
                    <li className='py-5 w-full hover:bg-red-500 text-center text-[0.9rem]'>CAMERAS</li>
                    <li className='py-5 w-full hover:bg-red-500 text-center text-[0.9rem]'>ACCESSORIES</li>
                    <li className='py-5 w-full hover:bg-red-500 text-center text-[0.9rem]'>STUDIO</li>
                    <li className='py-5 w-full hover:bg-red-500 text-center text-[0.9rem]'>EXTREME</li>
                    <li className='py-5 w-full hover:bg-red-500 text-center text-[0.9rem]'>USED</li>
                </ul>

                <button
                    className='absolute top-[10px] right-[10px] text-white py-1 px-3 font-bold'
                    onClick={() => mobileMenuRef.current?.classList.remove('show-mobile-menu')}
                >
                    X
                </button>
            </div>
        </div>

    )
}
