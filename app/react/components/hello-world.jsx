import React from 'react';

class HelloWorld extends React.Component {
  render() {
    return(
      <div>
          <h3>Good Job</h3>
          <div>
            <p>Hello Lord {this.props.name}</p>
            <p>Take Sword {this.props.name}</p>
          </div>
      </div>
    );
  }
}

export default HelloWorld;
