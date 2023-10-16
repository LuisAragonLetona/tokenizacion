import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Web3 from 'web3';

import FoxCard from './sub_billetera/FoxCard'; 
import Trasas from './sub_billetera/Trasas'; 

class Billetera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMetaMaskInstalled: false,
            isWalletConnected: false,
            userAddress: null,
            accountName: '',
            accountBalance: null,
            transactions: [] // Nuevo estado para almacenar las transacciones
        };
    }

    async componentDidMount() {
        if (window.ethereum) {
            this.setState({ isMetaMaskInstalled: true });

            try {
                const addresses = await window.ethereum.enable();
                if (addresses.length > 0) {
                    this.setState({ isWalletConnected: true, userAddress: addresses[0] });

                    // Obtener el saldo de la cuenta
                    const web3 = new Web3(window.ethereum);
                    const balance = await web3.eth.getBalance(addresses[0]);
                    this.setState({ accountBalance: web3.utils.fromWei(balance, 'ether') });

                    // Obtener las transacciones del usuario (esto es un ejemplo simplificado)
                    const transactions = await web3.eth.getTransactionsByAddress(addresses[0]);
                    this.setState({ transactions });
                }
            } catch (error) {
                console.error('Error al conectar la billetera:', error);
            }
        }
    }

    handleNameChange = (event) => {
        this.setState({ accountName: event.target.value });
    }

    handleSaveName = () => {
        // Aquí puedes guardar el nombre en el estado o en tu sistema de backend
    }

    render() {
        const { isMetaMaskInstalled, isWalletConnected, userAddress, accountName, accountBalance, transactions } = this.state;

        const mensajeStyle = {
            textAlign: 'center',
            margin: 'auto',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '80%',
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'
        };

        const buttonStyle = {
            display: 'block',
            margin: '10px auto',
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
        };

        const Texto = () => {
            if (!isMetaMaskInstalled) {
                return (
                    <div style={mensajeStyle}>
                        <p style={{ fontSize: '18px' }}>Por favor, instala MetaMask para usar esta aplicación.</p>
                    </div>
                );
            } else if (isMetaMaskInstalled && !isWalletConnected) {
                return (
                    <div style={mensajeStyle}>
                        <p style={{ fontSize: '18px' }}>Conecta tu billetera MetaMask para comenzar a usar la aplicación.</p>
                        <button style={buttonStyle} onClick={this.connectWallet}>Conectar Billetera</button>
                    </div>
                );
            } else {
                return (
                    <div style={{ maxWidth: '100%', margin: '0 auto', padding: '20px' }}>
                        <FoxCard userAddress={userAddress} accountName={accountName} accountBalance={accountBalance} />
                        <Trasas transactions={transactions} />
                    </div>
                );
            }
        };

        return (
            <div>
                <Sidebar setUser={this.props.setUser} contenido={<Texto />} />
                <div style={{ textAlign: 'center' }}>
                    <input
                        type="text"
                        placeholder="Nombre de la cuenta"
                        value={accountName}
                        onChange={this.handleNameChange}
                    />
                    <button onClick={this.handleSaveName}>Guardar Nombre</button>
                </div>
            </div>
        );
    }
}

export default Billetera;
