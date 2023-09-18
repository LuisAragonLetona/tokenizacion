import React from 'react';
import '../../css/PW.css';
import metalog from '../../img/metamaskFox.png';
import Curve from '../../img/curved14.jpg';

const Carta = ({ userAddress, accountName, accountBalance }) => {
    return (
        <div>
            <div style={{ width: '80%', margin: '0 auto', textAlign: 'center' }}>
                <div style={{ width: '80%', margin: '0 auto', textAlign: 'center' }}>
                    <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border">
                        <div
                            className="relative overflow-hidden rounded-2xl"
                            style={{ backgroundImage: `url(${Curve})`, backgroundPositionY: '50%' }}
                        >
                            <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-80"></span>
                            <div className="relative z-10 flex-auto p-4">
                                <i className="p-2 text-white fas fa-wifi"></i>
                                <h5 className="pb-2 mt-6 mb-12 text-white">{userAddress}</h5> {/* Muestra la dirección de la cuenta */}
                                <div className="flex">
                                    <div className="flex">
                                        <div className="mr-6">
                                            <p className="mb-0 leading-normal text-white text-sm opacity-80">Cuenta</p>
                                            <h6 className="mb-0 text-white">{accountName}</h6> {/* Muestra el nombre de la cuenta */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-end justify-end w-1/5 ml-auto" style={{ position: 'absolute', top: '50%', right: '5%' }}>
                <img src={metalog} alt="MetaMask Logo" style={{ width: '100%', transform: 'translateY(-50%)' }} />
            </div>
            <br></br>
            <div className="flex-auto p-4 pt-0 text-center">
                <h6 className="mb-0 text-center">Saldo de su cuenta</h6>
                <span className="leading-tight text-xs">Su Saldo</span>
                <hr className="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
                <h5 className="mb-0">${accountBalance}</h5> {/* Muestra el saldo de la cuenta */}
            </div>
        </div>
    )
}

export default Carta;
