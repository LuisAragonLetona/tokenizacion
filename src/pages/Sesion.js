import React from 'react';
import '../css/sesion.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Sesion(props) {
    Aos.init({
        duration: 1800,
        offset: 0
    });

    const $btnSignIn = document.querySelector('.sign-in-btn'),
    $btnSignUp = document.querySelector('.sign-up-btn'),
    $signUp = document.querySelector('.sign-up'),
    $signIn = document.querySelector('.sign-in');

    document.addEventListener('click', e => {
        if (e.target === $btnSignIn || e.target === $btnSignUp) {
            $signIn.classList.toggle('active');
            $signUp.classList.toggle('active')
        }
    });

    function registrar(){
        event.preventDefault();
        var name = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var txtCredentials = document.getElementById("txtCredentials");
        var botonregistrar = document.getElementById("registrarse");
        let constrasena = document.getElementById('pass').value;
        if (name.length > 0 && email.length > 0 && constrasena.length > 0){
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function (){
                if (this.readyState == 4 && this.status == 200){
                    var response = this.responseText
                }
                if (response == 0){
                    txtCredentials.innerHTML = 'Estaas registrado';
                    botonregistrar.disabled = true;
                }else if (response == 1){
                    window.location.href = 'https://www.youtube.com/';
                }
            };
            xmlhttp.open("GET", "ajaxRegistro.php?name=" + name + "&email=" + email + "&password=" + constrasena, true);
            xmlhttp.send();
        }else{
            txtCredentials.innerHTML = "No se pueden dejar campos vacíos";
            return;
        }
    }

    function showHint(){
        event.preventDefault();
        var email = document.getElementById("email2").value;
        var password = document.getElementById("password").value;
        var txtCredentials = document.getElementById("txtLogin");
        if (email.length > 0 && password.length > 0){
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function (){
                if (this.readyState == 4 && this.status == 200){
                    var response = this.responseText
                }
                console.log(response);
                if (response == 0){
                    txtCredentials.innerHTML = 'Usuario o contraseña incorrecta, por favor intente nuevamente.';
                    txtCredentials.animate({
                        opacity: [1, 0]
                    },{
                        duration: 5000,
                        fill: 'forwards'
                    })
                    document.getElementById("email2").select();
                }
                if (response == 1){
                    window.location.href = 'https://www.youtube.com/';
                }
            };
            xmlhttp.open("GET", "ajaxLogin.php?email=" + email + "&password=" + password, true);
            xmlhttp.send();
        }else{
            txtCredentials.innerHTML = "";
            return;
        }
    }

    /*-----*/ 

    return (
        <div className="overflow-hidden">
            <div className="container-form sign-up">
                <div className="message">
                    <h2>Bienvenido a TokenizacionSV</h2>
                    <p>Si ya tienes una cuenta por favor inicia sesion aqui</p>
                    <button className="sign-up-btn">Iniciar Sesion</button>
                </div>
            </div>
            <form class="formulario">
                <h2 class="create-account">Crear una cuenta</h2>
                <div class="iconos">
                    <div class="border-icon">
                        <i class='bx bxl-instagram'></i>
                    </div>
                    <div class="border-icon">
                        <i class='bx bxl-linkedin'></i>
                    </div>
                    <div class="border-icon">
                        <i class='bx bxl-facebook-circle'></i>
                    </div>
                </div>
                <p class="cuenta-gratis">Crear una cuenta gratis</p>
                <input type="text" id="nombre" placeholder="Nombre"></input>
                <input type="email" id="email" placeholder="Email"></input>
                <input type="password" id="pass" placeholder="Contraseña"></input>
                <button class="registrar" id="registrarse" type="submit" onclick="registrar()">Registrarse</button>
                <span id="txtCredentials"></span>
            </form>

            <div class="container-form sign-in">
                <form class="formulario">
                    <h2 class="create-account">Iniciar Sesion</h2>
                    <div class="iconos">
                        <div class="border-icon">
                            <i class='bx bxl-instagram'></i>
                        </div>
                        <div class="border-icon">
                            <i class='bx bxl-linkedin'></i>
                        </div>
                        <div class="border-icon">
                            <i class='bx bxl-facebook-circle'></i>
                        </div>
                    </div>
                    <p class="cuenta-gratis">¿Aun no tienes una cuenta?</p>
                    <input id="email2" type="email" placeholder="Email"></input>
                    <input id="password" type="password" placeholder="Contraseña"></input>
                    <button class="iniciar_sesion" type="submit" onclick="showHint()">Iniciar sesion</button>
                    <span id="txtLogin"></span>
                </form>
                <div class="welcome-back">
                    <div class="message">
                        <h2>Bienvenido de nuevo</h2>
                        <p>Si aun no tienes una cuenta por favor registrese aqui</p>
                        <button type="submit" class="sign-in-btn">Registrarse</button>
                    </div>
                </div>
            </div>
            <script src=""></script>

        </div>
        
    )
}