import React from 'react';
import '../css/404.css';

class Error404 extends React.Component {
    constructor() {
        super();
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseMove(e) {
        const container = document.getElementById('contare');
        const x = -e.clientX / 5;
        const y = -e.clientY / 5;
        container.style.backgroundPositionX = x + 'px';
        container.style.backgroundPositionY = y + 'px';
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.handleMouseMove);
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouseMove);
    }

    render() {
        return (
            <div>
                <body style={{ background: 'linear-gradient(45deg, #8500ff, #5acaff)', height: '100vh' }}>
                    <div id="contare">
                        <div className="contentet">
                            <h2>404</h2>
                            <h4>Esto es Embarazoso</h4>
                            <p>Debería mostrarse algo aquí</p>
                            <a href="/">Regresar a inicio</a>
                        </div>
                    </div>
                </body>
            </div>
        );
    }
}

export default Error404;
