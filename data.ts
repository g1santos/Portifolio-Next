import { IService, ISkill, IProject } from './type';
import { RiComputerLine } from 'react-icons/ri';
import { FaServer } from 'react-icons/fa';
import { AiOutlineGlobal} from 'react-icons/ai'
import { BsCircleFill } from 'react-icons/bs'
import { DiDatabase } from 'react-icons/di'


export const services: IService[] = [
    {
        Icon: RiComputerLine,
        title: "Desenvolvimento Front-end",
        about: "Projetos desenvolvidos usando as principais ferramentas do mercado <b>HTML</b>, <b>CSS</b> e <b>Javascript</b>"
    },
    {
        Icon: FaServer,
        title: "Desenvolvimento Backend",
        about: "Lidar com banco de dados, servidor, API usando <b>Express </b> e outros frameworks populares."
    },
    {
        Icon: AiOutlineGlobal,
        title: 'Operações com CRUD',
        about: 'Aplicações que realizam (Create, Read, Update, Delete) com interação SPA (Single Page Application) que interage com uma única página.'
    },
    {
        Icon: DiDatabase,
        title: 'Desenvolvimento de Banco de Dados',
        about: 'Projetos de Banco de Dados relacionais, usando o Sistema Gerenciador de Banco de Dados <b>MySQL</b>'
    }
    
]


export const languages:ISkill[] = [
    {
        name:'HTML',
        level:'70',
        Icon:BsCircleFill
    },
    {
        name:'CSS',
        level:'65',
        Icon:BsCircleFill
    },
    {
        name:'JavaScript',
        level:'70',
        Icon:BsCircleFill
    },
    {
        name:'Python',
        level:'50',
        Icon:BsCircleFill,
    },
    {
        name:'Node',
        level:'60',
        Icon:BsCircleFill
    },
    {
        name:'React',
        level:'53',
        Icon:BsCircleFill
    },
    {
        name:'Next',
        level:'46',
        Icon:BsCircleFill
    },
    {
        name:'Vue',
        level:'50',
        Icon:BsCircleFill
    },
    {
        name:'Angular',
        level:'58',
        Icon:BsCircleFill
    },
    {
        name:'Bootstrap',
        level:'50',
        Icon:BsCircleFill
    },
]


export const tools:ISkill[] = [
    {
        name:'Visual Studio Code',
        level: '95',
        Icon:BsCircleFill,
    },
    {
        name:'PyCharm',
        level: '40',
        Icon:BsCircleFill,
    },
    {
        name:' MySQL Workbench',
        level: '45',
        Icon:BsCircleFill,
    }
]

export const projects:IProject[] = [
    {
        id: 1,
        name: 'Calculadora em React',
        description:
            'Calculadora que faz as quatro operações matematicas',
        image_path: "/imgs/calculator.png",
        github_url: 'https://github.com/g1santos/calculator-in-React',
        category: ['react'],
        key_techs: ['React']
    },
    {
        id: 2,
        name: 'Projeto Galeria',
        description:
            'Aplicação web com fotos das cidades mais populares do mundo.',
        image_path: '/imgs/galery.png',
        github_url: 'https://github.com/g1santos/pagina-de-login-html-css',
        category: ['html', 'node', 'bootstrap'],
        key_techs: ['Node', 'Bootstrap', 'HTML']
    },
    {
        id: 3,
        name: 'Temporizador',
        description: 
            'Temporizador que indica quantas horas falta para acabar o dia',
        image_path:'/imgs/temp.png',
        github_url: 'https://github.com/g1santos/projeto-galeria',
        category: ['react'],
        key_techs: ['React', 'Webpack', 'Bootstrap', 'Jquery']
    },
    {
        id: 4,
        name: 'Sistema de Cadastro de Clientes',
        description:
            'Aplicação de CRUD (CREATE, READ, UPDATE, DELETE) em React, usando SPA (Single Page Applications) e fazendo requisições ao back-end com um simulador de consultas chamada Mockapi e como estilização usei semantic-ui.',
        image_path:'/imgs/crud2.png',
        github_url: 'https://github.com/g1santos/react-crud',
        category: ['react'],
        key_techs: ['React', 'Mockapi', 'SPA']
    },
    {
        id: 5,
        name: 'Jogo Flappy Bird',
        description:
            'Jogo criado do zero feito com HTML, CSS e Javascript.',
        image_path:'/imgs/bird.png',
        github_url: 'https://github.com/g1santos/Game-Flappy-Bird',
        category: ['html', 'css', 'javascript'],
        key_techs: ['Html', 'CSS', 'Javascript']
    },
    {
        id: 6,
        name: 'CRUD de Usuários e Produtos em React',
        description:
            'Crud de Usuários e produtos com react e json-server para o back-end usei o Bootstrap para a criação do layout, após a criação de um produto o sistema informa a data e hora de quando foi criado o produto',
        image_path:'/imgs/crud1.png',
        github_url: 'https://github.com/g1santos/crud-react-user-products',
        category: ['react'],
        key_techs: ['React', 'Axios', 'Bootstrap']
    },
    {
        id: 7,
        name: 'Todo List com VueJS',
        description:
            'Sistema que faz o gerenciamento de suas tarefas, tendo a possibilidade de seleciona-las edita-las e exclui-las, desenvolvido com VueJS.',
        image_path: '/imgs/todo.png',
        github_url: 'https://github.com/g1santos/Todo-list-with-Vue.js',
        category: ['vue'],
        key_techs: ['Vue', 'CSS', 'Javascript']
    }
]