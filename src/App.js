import React,{Component} from 'react';
import Header from './components/header/Header.js'
import Footer from './components/footer/Footer.js'
import Main from './components/main/Main.js'

export default class App extends Component {
    

render() {
  return (
    <div>
        <Header/>
          <Main/>
        <Footer/>
    </div>
  );
}
}