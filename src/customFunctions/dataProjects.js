import LogoDawan from "../assets/img/logo_dawan.png";
import PillLogo from "../assets/svg/pill.svg";
import LogoPortfolio from "../assets/img/logo_portfolio.png";

const cfa = {
    name: 'CFA',
    description: 'translation.cfa.description',
    technologies: ['Java', 'Javascript', 'SQL'],
    frameworks: ['Spring' ,'VueJs' ,'Jpa' ,'JUnit', 'Mockito']
}

const portfolio = {
    name: 'PORTFOLIO',
    description: '',
    technologies: ['Javascript', 'HTML', 'CSS'],
    frameworks: ['Preact' ,'GSAP', 'Tailwind']
}

const javaWebServer = {
    name: 'JAVA WEB SERVER',
    description: '',
    technologies: ['Java'],
    frameworks: ['Java SE']
}

export const projects = [
    {id: 1, title: 'CFA - DAWAN', category: 'Fullstack', img: LogoDawan, data:cfa ,date: ''},
    {id: 2, title: 'FitAce API', category: 'Backend', description: 'Conception & développement d une API d une application de sport', data:cfa , img: PillLogo, date: ''},
    {id: 3, title: 'Java WebServer', category: 'Backend', description: 'Web Server minimaliste',data:cfa , img: PillLogo, date: ''},
    {id: 4, title: 'Predicting Drug Consumption', category: 'Frontend', data:cfa , img: PillLogo, date: ''},
    {id: 5, title: 'Portfolio', category: 'Frontend', img: LogoPortfolio, data:cfa , date: ''},
];