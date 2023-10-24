/* import React from 'react';
import '../../css/PW.css';

const Trasas = ({ transactions }) => {
    return (
        <div>
            <div style={{ width: '80%', margin: '0 auto' }}>
                <div style={{ width: '80%', margin: '0 auto' }}>
                    <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                        <div className="p-6 px-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                            <h6 className="mb-0">Información de Transacciones</h6>
                        </div>
                        <div className="flex-auto p-4 pt-6">
                            {transactions.length === 0 ? (
                                <p>No se han realizado transacciones todavía.</p>
                            ) : (
                                <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                                    {transactions.map((transaction, index) => (
                                        <li key={index} className="relative flex p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-50">
                                            <div className="flex flex-col">
                                                <h6 className="mb-4 leading-normal text-sm">Transacción {index + 1}</h6>
                                                <span className="mb-2 leading-tight text-xs">Hash: <span className="font-semibold text-slate-700 sm:ml-2">{transaction.hash}</span></span>
                                                <span className="mb-2 leading-tight text-xs">Dirección de envío: <span className="font-semibold text-slate-700 sm:ml-2">{transaction.to}</span></span>
                                                <span className="mb-2 leading-tight text-xs">Impuesto Gas: <span className="font-semibold text-slate-700 sm:ml-2">{transaction.gas}</span></span>
                                                <span className="leading-tight text-xs">Cantidad Enviada: <span className="font-semibold text-slate-700 sm:ml-2">{transaction.value} Ether</span></span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className="leading-normal text-center text-sm text-slate-500 lg:text-left" style={{ marginTop: '20px' }}>
                        © {new Date().getFullYear()}, TokenMall
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
        </div>
    )
} 

export default Trasas;*/
