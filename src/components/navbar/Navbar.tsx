import { useRef } from 'react'
import { Container } from '../ui/container/Container'
import MobileMenu from './MobileMenu'
import { cn } from '../../helpers/cn'
import logo from '../../assets/logo.png'
import peopleImage from '../../assets/people.png'
import cartImage from '../../assets/cart.png'
import searchImage from '../../assets/search.png'

export default function Navbar() {
    const subMenuRef = useRef<HTMLDivElement | null>(null)

    return (
        <>
            <header className='sticky top-0 z-50'>
                <div className='bg-[#1A1A1B] pt-5 mh-[50vh] pb-5 lg:pb-0 overflow-hidden z-50'>
                    <Container className='flex justify-between items-center'>
                        <MobileMenu />

                        <div className="logo-section">
                            <img src={logo} alt="logo" height={116} />
                        </div>

                        {/* Icons */}
                        <div className="icon-group flex justify-end">
                            <img src={peopleImage} alt="people" className='me-5 w-[20px] h-[22px] cursor-pointer hidden lg:block' />
                            <img src={cartImage} alt="cart" className='me-5 w-[20px] h-[22px] cursor-pointer' />
                            <img src={searchImage} alt="search" className='w-[20px] h-[22px] cursor-pointer' />
                        </div>

                    </Container>

                    {/* Main menu */}
                    <Container className='w-[90%]'>
                        <nav className="text-white mt-5 hidden lg:block">
                            <ul
                                className='menu-items flex gap-0 flex-shrink-0'
                                onMouseOver={() => subMenuRef.current?.setAttribute("style", ' top: 0px; transition: all 1s ease-in-out;opacity:1;')}
                                onMouseLeave={() => subMenuRef.current?.setAttribute("style", 'top:-500px;')}
                            >
                                <li className='py-5 w-full hover:bg-red-500 text-center text-[0.9rem]'>BRANDS</li>
                                <li className='py-5 w-full hover:bg-red-500 text-center text-[0.9rem]'>CAMERAS</li>
                                <li className='py-5 w-full hover:bg-red-500 text-center text-[0.9rem]'>ACCESSORIES</li>
                                <li className='py-5 w-full hover:bg-red-500 text-center text-[0.9rem]'>STUDIO</li>
                                <li className='py-5 w-full hover:bg-red-500 text-center text-[0.9rem]'>EXTREME</li>
                                <li className='py-5 w-full hover:bg-red-500 text-center text-[0.9rem]'>USED</li>
                            </ul>
                        </nav>
                    </Container>
                </div>

                {/* Sub menu */}
                <div className='sub-menu-items relative'>
                    <div className={cn(
                        `bg-[#FCF6F6] w-full py-5 absolute -top-[500px] opacity-0`,

                    )}
                        onMouseOver={() => subMenuRef.current?.setAttribute("style", ' top: 0px; transition: all 2s ease-in-out;opacity:1;')}
                        onMouseLeave={() => subMenuRef.current?.setAttribute("style", 'top:-500px;')}
                        ref={subMenuRef}
                    >
                        <Container className='flex justify-around'>
                            <div>
                                <h1 className='uppercase underline font-bold mb-1'>Digital</h1>
                                <ul>
                                    <li className='text-[13px] font-semibold text-[#363333]'>DSLR</li>
                                    <li className='text-[13px] font-semibold text-[#4d4848]'>Mirrorless</li>
                                    <li className='text-[13px] font-semibold text-[#4d4848]'>Compact</li>
                                    <li className='text-[13px] font-semibold text-[#4d4848]'>Digital Format</li>
                                </ul>
                            </div>
                            <div>
                                <h1 className='uppercase underline font-bold mb-1'>FLIM</h1>
                                <ul>
                                    <li className='text-[13px] font-semibold text-[#4d4848]'>35mm</li>
                                    <li className='text-[13px] font-semibold text-[#4d4848]'>Medium Format</li>
                                    <li className='text-[13px] font-semibold text-[#4d4848]'>Large Format</li>
                                    <li className='text-[13px] font-semibold text-[#4d4848]'>Instant</li>
                                    <li className='text-[13px] font-semibold text-[#4d4848]'>Diposable</li>
                                </ul>
                            </div>
                            <div>
                                <h1 className='uppercase underline font-bold text-[#4d4848] mb-1'>VIDEO</h1>
                                <ul>
                                    <li className='text-[12px] font-semibold text-[#4d4848]'>Camcoder</li>
                                    <li className='text-[12px] font-semibold text-[#4d4848]'>Pro Consumer</li>
                                    <li className='text-[12px] font-semibold text-[#4d4848]'>Super Chip</li>
                                </ul>
                            </div>
                        </Container>
                    </div>
                </div>
            </header>
        </>
    )
}
