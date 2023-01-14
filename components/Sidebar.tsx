import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';
import { useTheme } from 'next-themes';
import Image from 'next/legacy/image';

const Sidebar = () => {

    const {theme, setTheme} = useTheme()

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <>    
            <img 
                src="/imgs/perfil.png" 
                alt="Pefil"
                className='w-32 h-32 mx-auto border rounded-full'
            />
            {/* <Image
                src="/imgs/perfil.png"
                alt="Perfil"
                className='mx-auto border rounded-full '
                height='128'
                width='128'
                layout='intrinsic'  
           /> */}
            
            <h3 className='my-4 text-3xl tracking-wider font-kaushan'>
                <span className='text-green'>Gabriel</span>
                Santos
            </h3>
            <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-black-500 dark:bg-dark-200'>
                Desenvolvedor Web
            </p>
            <a 
                className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-black-500 dark:bg-dark-200 ' 
                href='/imgs/thanks.png' 
                download='thanks.png'>
                <GiTie className="w-6 h-6"/>Download Resume
            </a>
            {/* icones sociais */}
            <div className='flex justify-around w-9/12 my-5 text-green md:w-full'>
                <a href="">
                    <AiFillYoutube className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="">
                    <AiFillGithub className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer"/>
                </a>
            </div>
            {/* endereço */}
            <div className='py-4 my-5 bg-gray-200 dark:bg-black-500 dark:bg-dark-200' 
                style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation />
                    <span>Salvador, Bahia</span>
                </div>
                <p className='my-2'>gabriel.costa01@outlook.com.br</p>
                <p className='my-2'>(71) 98183-4447</p>
            </div>
            {/* Email Button */}
            <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none'
                onClick={() => window.open('mailto:gabriel.costa01@outlook.com.br')}>
                Meu Email
            </button>
            <button 
            onClick={changeTheme}
            className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none'>
                Toggle Theme
            </button>
        </>
    )
}

export default Sidebar