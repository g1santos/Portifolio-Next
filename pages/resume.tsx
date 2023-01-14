import { languages, tools } from '../data'
import Bar from '../components/Bar'
import { motion } from 'framer-motion'
import { fadeInUp, routerAnimation } from '../animations'

const Resume = () => {

    
    return (
        <motion.div 
        className='px-6 py-2'
        variants={routerAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        >
            {/* Formação Acadêmica e Experiência Profissional */}
            <div className="grid gap-6 md:grid-cols-2">
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h5 className="my-3 text-2xl font-bold">Formação Acadêmica</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">
                            Análise e Desenvolvimento de Sistemas
                        </h5>
                        <p className="font-semibold">
                            Universidade Norte do Paraná (UNOPAR) Belém - PA (2021 - 2023)
                        </p>
                        <p className="my-3"> 
                            Estou concluindo o curso de tecnólogo em 
                            Análise e Desenvolvimento de Sistemas pela UNOPAR.
                        </p>
                        <h5 className="my-2 text-xl font-bold">
                            Ciência da Computação
                        </h5>
                        <p className="font-semibold">
                            Universidade de Salvador (UNIFACS) Salvador - BA (2022 - 2026)
                        </p>
                        <p className="my-3"> 
                            Atualmente estou cursando Bacharel em Ciência da Computação pela UNIFACS.
                        </p>
                    </div>     
                </motion.div>
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h5 className="my-3 text-2xl font-bold">Experiência Profissional</h5>
                    <div>
                        <p className="font-semibold">
                            Estou em busca da minha primeira vaga como programador, 
                            para poder aplicar meus conhecimentos da área e adquirir 
                            experiência com a empresa e com os colaboradores.
                        </p>
                    </div>
                </motion.div>             
            </div>
            {/* Linguagens e Ferramentas de Desenvolvimento */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className='my-3 text-2xl font-bold'>Linguagens & Frameworks</h5>
                    <div className='my-2'>
                        {languages.map(language => (
                            <Bar data={language} key={language.name}/>
                            ))}
                    </div>
                </div>
                <div>
                    <h5 className='my-3 text-2xl font-bold'>Ferramentas de Desenvolvimento</h5>
                    <div className='my-2'>
                        {tools.map(tool => (
                            <Bar data={tool} key={tool.name}/>
                            ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
        
        
    

export default Resume