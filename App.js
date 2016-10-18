import React from 'react';

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      txt: 'Hi Dylan & Angie',
      cat: 6
    };
  }
  update(e) {
    this.setState({txt:e.target.value});
  }
	render() {
		return(
       <div>
        <input type="text" onChange={this.update.bind(this)} />
        <h1>{this.state.txt}</h1>
      </div>
    );
	}
}

// export default App;