
import './App.css';
import { Footer,Blog,Features,Header,Possibility,WhatGPT3 } from './Containers';
import {CTA,Brand,Navbar} from './Components'

 function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
    <Brand/>
    <WhatGPT3/>
    <Features/>
    <Possibility/>
    <CTA/>
    <Blog/>
    <Footer/>
    </div>
  );
}

export default App;
