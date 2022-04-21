'use strict';

function Homepage() {
  return (
  <React.Fragment>
  
    <h1>Welcome!</h1>
    <br></br>
    <a href="/cards">Link to cards</a>
    <br></br>
    <img src="/static/img/balloonicorn.jpg" width="auto" height="1000" />
  
  </React.Fragment>);
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
