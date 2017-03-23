import React from 'react';

class HelloWorld extends React.Component {
  render() {
    return(
      <div>
        <p>Hello Lord {this.props.name}</p>
        <p>Take Sword {this.props.name}</p>
      </div>
    );
  }
}

export default HelloWorld;
