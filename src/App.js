import React, {Component} from "react";
class App extends Component{
render(){
  var myStyle={
    fontSize:80,
    fontFamily:'Courier',
    color:'#003300'
  }
  return(
    <div>
      <h1 className="hello" style={myStyle}>Prabash {20+30}</h1>
      <p data-demoAttribute="demo">Welcome to React Js</p>
      {/* This is Comments */}
    </div>
  );
}
}

export default App;