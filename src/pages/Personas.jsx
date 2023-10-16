import React from 'react';
import '../css/personas.css';
import raul from '../img/raul.png';
import luis from '../img/luis.png';
import griffin from '../img/griffin.png';
import juan_1 from '../img/juan_1.png';
import madai from '../img/madai.png';
import carlos from '../img/carlos.png' 

export const Personas = () => {
  return (
    <div class="container">
         <div class="card__container">
            <article class="card__article">
               <img src={luis} alt="image" class="card__img"/>
               <div class="card__data">
                  <h2 class="card__title">Luis Aragón</h2>
               </div>
            </article>


            <article class="card__article">
               <img src={griffin} alt="image" class="card__img"/>
                 <div class="card__data">
                  <h2 class="card__title">Rudy Griffin</h2>
                  </div>
            </article>


            <article class="card__article">
               <img src={juan_1} alt="image" class="card__img"/>
                 <div class="card__data">
                  <h2 class="card__title">Juan Granados</h2>
                   </div>
            </article>



            <article class="card__article">
               <img src={madai} alt="image" class="card__img"/>
                 <div class="card__data">
                 <h2 class="card__title">Madai Pérez</h2>
                  </div>
            </article>

          

            <article class="card__article">
               <img src={carlos} alt="image" class="card__img"/>
                  <div class="card__data">
                  <h2 class="card__title">Carlos Gómez</h2>
                   </div>
            </article>



            
             
            <article class="card__article">
               <img src={raul} alt="image" class="card__img"/>
               <div class="card__data">
               <h2 class="card__title">Raul Hernáandez</h2>
               </div>
            </article>


          </div>
      </div>
  )
}
