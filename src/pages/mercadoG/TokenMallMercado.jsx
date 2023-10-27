import React, { useEffect, useState } from 'react';
/* import 'swiper/css/swiper.min.css'; */
import 'swiper/css';
import Sidebar from '../Sidebar';
import './assets/css/stylesMG.css';
import './assets/js/main.js';
import './assets/css/swiper-bundle.min.css';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './assets/css/stylesMG.css';
import { FaStar } from 'react-icons/fa';


import Uno from './assets/img/nfts head/1.png';
import Dos from './assets/img/nfts head/2.png';
import Tres from './assets/img/nfts head/3.png';
import Cuatro from './assets/img/nfts head/4.png';
import Cinco from './assets/img/nfts head/5.png';
import Seis from './assets/img/nfts head/6.png';
import Siete from './assets/img/nfts head/7.png';
import Ocho from './assets/img/nfts head/8.png';
import Nueve from './assets/img/nfts head/9.png';
import Diez from './assets/img/nfts head/10.png';
import Once from './assets/img/nfts head/11.png';


const TokenMallMercado = () => {
  const [tituloAleatorio, setTituloAleatorio] = useState(
    "Mira lo que los demás están creando"
  );

  const imagenes = [];
  for (let i = 12; i <= 29; i++) {
    imagenes.push(require(`./assets/img/nfts head/${i}.jpg`)); // Cambié la extensión a jpg
  }

  // Divide las imágenes en grupos de 3 para mostrar en filas
  const filas = [];
  for (let i = 0; i < imagenes.length; i += 3) {
    filas.push(imagenes.slice(i, i + 3));
  }

  useEffect(() => {
    // Array de frases para el título h1
    const frasesH1 = [
      "¿Listo para desentrañar los misterios del universo?",
      "Explora el mundo de los NFTs: donde la creatividad cobra vida.",
      "NFTs: Donde cada obra de arte cuenta su propia historia.",
      "Descubre la magia digital de los NFTs y crea tu propio universo.",
      "En el reino de los NFTs, la imaginación no tiene límites.",
      "Los NFTs: Donde la tecnología encuentra su expresión artística.",
      "¡Colecciona momentos, no cosas! Explora los NFTs.",
      "NFTs: Redefiniendo el arte, un token a la vez.",
      "Explora NFTs: Donde la autenticidad se encuentra con la innovación.",
      "Descubre NFTs: La próxima revolución digital está aquí.",
      "Cada NFT tiene una historia que contar. ¿Cuál será la tuya?",
      "NFTs: Más que un token, es una experiencia.",
      "NFTs: Creando puentes entre el arte y la tecnología.",
      "Explora NFTs: Tu pasaporte a un mundo digital sin fronteras.",
      "Sumérgete en el universo de los NFTs y deja volar tu creatividad.",
      "NFTs: Conectando artistas y coleccionistas en un espacio digital.",
      "Explora NFTs: Donde cada creación es única y valiosa.",
      "Los NFTs son como los sueños: infinitos y llenos de posibilidades.",
      "NFTs: Donde el arte se encuentra con la innovación tecnológica.",
      "Descubre el mundo de los NFTs: Tu entrada al futuro del arte.",
      "NFTs: Donde la creatividad se convierte en patrimonio digital."
    ];

    // Seleccionar una frase aleatoria para el título h1
    const fraseH1Aleatoria = frasesH1[Math.floor(Math.random() * frasesH1.length)];

    // Establecer la frase en el estado
    setTituloAleatorio(fraseH1Aleatoria);
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez después del montaje

  return (
    <div>
      <Sidebar contenido={
        <main className="main">
          <section className="home section" id="home">
            <div className="home__container container grid">
              <div className="home__data">
                <h1 className="home__title" id="TitulosAleatorios">
                  {tituloAleatorio}
                </h1>
                <p className="home__description">
                  "¡Embárcate en la aventura, da rienda suelta a tu creatividad, diviértete al máximo y colecciona
                  momentos únicos! Con NFTs para todos los gustos, puedes comprar uno, dos o ¡incluso toda la colección!
                  Descubre un mundo sin fronteras y alcanza una nueva dimensión de posibilidades. ¡Tu imaginación es el
                  límite!"
                </p>
                <a href="#" className="buttonMercat">
                  Que comience la diversión!
                </a>
              </div>
              <div className="home__images">
                <Swiper
                  className="home__swiper swiper"
                  loop={true}
                  spaceBetween={5} // Ajusta el espacio entre las imágenes según tus preferencias
                  grabCursor={true}
                  slidesPerView={'auto'}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2000, // Establece el intervalo de tiempo entre las transiciones de las imágenes
                    disableOnInteraction: false, // Permite que el autoplay continúe incluso cuando el usuario interactúa con el Swiper
                  }}
                  breakpoints={{
                    1220: {
                      spaceBetween: 10, // Ajusta el espacio entre las imágenes en pantallas más grandes
                    }
                  }}
                >
                  <SwiperSlide style={{ marginRight: '5px', marginLeft: '5px' }}>
                    <img src={Uno} alt="image" className="home__img" />
                  </SwiperSlide>
                  <SwiperSlide style={{ marginRight: '5px', marginLeft: '5px' }}>
                    <img src={Dos} alt="image" className="home__img" />
                  </SwiperSlide>
                  <SwiperSlide style={{ marginRight: '5px', marginLeft: '5px' }}>
                    <img src={Tres} alt="image" className="home__img" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={Cuatro} alt="image" className="home__img" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={Cinco} alt="image" className="home__img" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={Seis} alt="image" className="home__img" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={Siete} alt="image" className="home__img" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={Ocho} alt="image" className="home__img" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={Nueve} alt="image" className="home__img" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={Diez} alt="image" className="home__img" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={Once} alt="image" className="home__img" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </section>

          <section className="new section" id="new">
            <h2 className="section__title">Nuevos NFTs</h2>
            <div className="tabla-container">
              {filas.map((fila, index) => (
                <div className="fila" key={index}>
                  {fila.map((imagen, idx) => (
                    <div className="celda" key={idx}>
                    <img src={imagen} alt={`Producto ${index * 3 + idx + 1}`} className="imagen-producto" />
                    <div className="titulo" style={{ marginTop: '30px' }}>NUEVO NFT</div>
                    <div className="precio">ETH {Math.floor(Math.random() * (100 - 1) + 1)}</div>
                      <div className="calificacion">
                        <FaStar color="#ffc107" size={14} /> {Math.floor(Math.random() * (5 - 1) + 1)}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        </main>
      }
      />
    </div>
  );
};

export default TokenMallMercado;