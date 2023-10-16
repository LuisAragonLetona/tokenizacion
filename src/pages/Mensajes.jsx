import React from 'react';
import Sidebar from './Sidebar';
import ChatApp from './ChatApp';
import '../css/chat.css';


class Mensajes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const Texto = () => {
      return (
        <div className="mensajeria">
          <h1>Mensajería</h1>
          <ChatApp />
        </div>
      );
    };

    return (
      <div>
        <Sidebar setUser={this.props.setUser} contenido={<Texto />} />
      </div>
    );
  }
}

export default Mensajes;
