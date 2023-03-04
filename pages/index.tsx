import { 
   GetServerSideProps,
   GetServerSidePropsContext,
   GetStaticProps,
   GetStaticPropsContext,
   NextPage,
} from "next"
import ServiceCard from "../components/ServiceCard"
import { services } from "../data"
import { motion } from 'framer-motion'

import { fadeInUp, routerAnimation, stagger } from "../animations"

const About = ({endpoint} : {endpoint:any}) => {
    // console.log(services)
    console.log(endpoint)
    return (
        <motion.div 
            className="flex flex-col flex-grow px-6 pt-1" 
            variants={routerAnimation} 
            initial="initial"
            animate="animate"
        >
            <h5 className="my-3 font-medium">
                Sou desenvolvedor web a 2 anos, graduado em Análise e desenvolvimento de sistemas pela Unopar, desenvolvo aplicações
                Front-end e Back-end e sou apaixonado por tudo que envolve tecnologia e games.
            </h5>
            <div 
                className="flex-grow p-4 my-5 bg-gray-400 dark:bg-dark-100"
                style={{marginLeft:'-1.5rem', marginRight:'-1.5rem'}}>
                    
                <h6 className="my-3 text-xl font-bold tracking-wide">Abaixo meus projetos:</h6>
                
                <motion.div 
                    className="grid gap-6 my-3 md:grid-cols-2" 
                    variants={stagger} 
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    
                    {services.map(service => (
                        <motion.div
                            variants={fadeInUp}
                            className="col-span-2 p-2 bg-gray-200 rounded-lg md:col-span-1 dark:bg-dark-200"
                            key={service.title}
                        >
                        <ServiceCard service={service} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default About

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    // console.log(process.env.VERCEL_URL)
    
    // const res = await fetch(`${process.env.VERCEL_URL}/api/services`)
    // const data = await res.json()
    // console.log(data)
    return { props: { endpoint: process.env.VERCEL_URL } }
}

// export const getStaticProps =  async (context: GetStaticPropsContext) => {
//     const url = 'http://localhost:3000/api/services'

//     const res = await fetch(url)
//     const data = await res.json()

//     console.log("SERVER", services)

//     return {
//         props: {
//             services: data.services,
//         }
//     }
// }