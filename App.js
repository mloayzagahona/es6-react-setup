import React from 'react';

class Button extends React.Component {
	render () {
		return <button>I <Heart/> React </button>
	}
}

const Heart = () => <span className="glyphicon glyphicon-heart"></span>

export default class App extends React.Component{
  render() {
  	return <Button>React</Button>;
  }
}

// export default App;