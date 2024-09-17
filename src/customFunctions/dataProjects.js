import LogoDawan from "../assets/img/logo_dawan.png";
import LogoPredictingDrugConsumption from "../assets/svg/pill.svg";
import LogoPortfolio from "../assets/img/logo_portfolio.png";
import LogoJavaWebServer from "../assets/img/java_web_server.png";

const portfolio = {
    id: 1,
    key:'portfolio',
    name: 'PORTFOLIO',
    description: 'translation.fa.description',
    technologies: ['Javascript', 'HTML', 'CSS'],
    frameworks: ['Preact' ,'GSAP', 'Tailwind'],
    link:'https://anas-dev.com',
    github:'https://github.com/Sharnalk/Portfolio'
}
const predictingDrugConsumption = {
    id: 2,
    key:'pdc',
    name: 'PREDICTING DRUG CONSUMPTION',
    description: 'translation.pdc.description',
    technologies: ['Javascript', 'HTML', 'CSS'],
    frameworks: ['React'],
    link:'http://194.135.81.27/',
    github:'https://github.com/Sharnalk/Predicting-Drug-Consumption/tree/main'
}
const javaWebServer = {
    id: 3,
    key:'jws',
    name: 'JAVA WEB SERVER',
    description: 'translation.fa.description',
    technologies: ['Java'],
    frameworks: ['Java SE'],
    github:'https://github.com/Sharnalk/MinimalistJavaWebServer'
}

const fitAce = {
    id: 4,
    key:'fa',
    name: 'FIT ACE',
    description: 'translation.fa.description',
    technologies: ['Java', 'Javascript', 'SQL'],
    frameworks: ['Spring', 'Jpa' ,'JUnit', 'Mockito', 'Hibernate'],
}
const cfa = {
    id: 5,
    key:'cfa',
    name: 'CFA',
    description: 'translation.cfa.description',
    technologies: ['Java', 'Javascript', 'SQL'],
    frameworks: ['Spring' ,'VueJs' ,'Jpa' ,'JUnit', 'Mockito'],
}


export const projects = [
    {id: 1, title: 'Portfolio', category: 'Frontend', img: LogoPortfolio, data:portfolio , date: ''},
    {id: 2, title: 'Predicting Drug Consumption', category: 'Frontend', data:predictingDrugConsumption , img: LogoPredictingDrugConsumption, date: ''},
    {id: 3, title: 'Java WebServer', category: 'Backend', data:javaWebServer , img: LogoJavaWebServer, date: ''},
    {id: 4, title: 'FitAce API', category: 'Backend', data:fitAce , img: LogoPredictingDrugConsumption, date: ''},
    {id: 5, title: 'CFA - DAWAN', category: 'Fullstack', img: LogoDawan, data:cfa ,date: ''},
];