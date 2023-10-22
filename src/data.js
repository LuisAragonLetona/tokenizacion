import AboutImg from './img/about.png';
import HeroImage from './img/HeroImage.png';
import Caracteristica1 from './img/caracteristica1.png';
import Caracteristica2 from './img/caracteristica2.png';
import Caracteristica3 from './img/caracteristica3.png';
import Caracteristica4 from './img/caracteristica4.png';
import Caracteristica1bg from './img/caracteristica1bg.png';
import Caracteristica2bg from './img/caracteristica2bg.png';
import Caracteristica3bg from './img/caracteristica3bg.png';
import Caracteristica4bg from './img/caracteristica4bg.png';


export const navigationData = [
    {
        name: 'Persona',
        href: '#'
    },
    {
        name: 'Acerca de nosotros',
        href: '#'
    },
    {
        name: 'Características',
        href: '#'
    },
    {
        name: 'Contáctanos',
        href: '#'
    }
];
export const heroData = {
    title: `TokenMall`,
    subtitle:
        'Nuestra plataforma de tokenización es una innovación financiera que convierte activos en tokens digitales, brindando seguridad y transparencia a inversores y propietarios. Cumplimos con altos estándares de regulación y ofrecemos herramientas para la gestión de activos, impulsando nuevas oportunidades de inversión.',
    btnText: 'Iniciar Sesión',
    image: HeroImage,
}
export const acercaDeData = {
    image: AboutImg,
    title: 'Vive una experiencia digital sin límites.',
    subtitle:
        '¿Te gustaría vivir una experiencia digital sin límites? Con TokenMall, puedes acceder a un mundo de oportunidades, diversión y aprendizaje con solo un paso. TokenMall es una plataforma que te permite comprar, vender y canjear tokens digitales.TokenMall es más que una tienda online, es una comunidad de usuarios que comparten tus mismos intereses y pasiones. ¿Qué esperas? Regístrate ahora y empieza a explorar el universo TokenMall. ¡Te sorprenderás de todo lo que puedes hacer con tus tokens!'
};
export const caracteristicasData = {
    title: 'Algunos servicios que ofrecemos',
    subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga a error delectus, animi officiis asperiores suscipit explicabo veritatis natus ut aperiam labore saepe sit corrupti. Inventore facere earum quo id accusamus reprehenderit temporibus saepe ut asperiores enim atque fugiat praesentium suscipit obcaecati pariatur expedita odit neque, ipsa sapiente, velit facilis? Rem culpa autem cupiditate, facere praesentium voluptatem tenetur ullam at.',
    list: [
        {
            image: Caracteristica1,
            bgImage: Caracteristica1bg,
            title: 'Payment Done1',
            description:
                'Pay with a Visa or PayPal card and without much ado',
            linkText: 'Learn more',
            delay: '400',
        },
        {
            image: Caracteristica2,
            bgImage: Caracteristica2bg,
            title: 'Payment Done2',
            description:
                'Pay with a Visa or PayPal card and without much ado',
            linkText: 'Learn more',
            delay: '400',
        },
        {
            image: Caracteristica3,
            bgImage: Caracteristica3bg,
            title: 'Payment Done3',
            description:
                'Pay with a Visa or PayPal card and without much ado',
            linkText: 'Learn more',
            delay: '400',
        },
        {
            image: Caracteristica4,
            bgImage: Caracteristica4bg,
            title: 'Payment Done4',
            description:
                'Pay with a Visa or PayPal card and without much ado',
            linkText: 'Learn more',
            delay: '400',
        }
    ]
};