import React, { Component } from 'react';
import Sidebar from './Sidebar';

class General extends Component {
  constructor(props) {
    super(props);

    // Inicializamos el estado con la hora actual
    this.state = {
      currentTime: this.getCurrentTime(),
    };
  }

  componentDidMount() {
    // Configuramos un intervalo para actualizar la hora cada segundo
    this.interval = setInterval(() => {
      this.setState({ currentTime: this.getCurrentTime() });
    }, 1000);
  }

  componentWillUnmount() {
    // Limpiamos el intervalo cuando el componente se desmonta
    clearInterval(this.interval);
  }

  getCurrentTime() {
    // Obtenemos la hora actual con segundos
    return new Date().toLocaleTimeString('es', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    });
  }

  render() {
    const Texto = (usuario) => {
      const currentDate = new Date().toLocaleDateString('es', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      const centerStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
      };

      const h1Style = {
        fontSize: '4vw',
      };

      const pStyle = {
        fontSize: '2vw',
      };

      return (
        <div style={centerStyle}>
          <h1 style={h1Style}>BIENVENIDO {this.props.user.nombre}</h1>
          <p style={pStyle}>{this.state.currentTime}</p>
          <p style={pStyle}>{currentDate}</p>
        </div>
      )
    };

    return (
      <div>
        <Sidebar setUser={this.props.setUser} contenido={<Texto />} />
      </div>
    );
  }
}

export default General;
