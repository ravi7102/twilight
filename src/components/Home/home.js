import {Component} from "react";
import '../../App.css'
class  Home extends Component{
    render(){
        return(
          
            <div>
              <nav class="navbar bg-dark">
                    <a class="navbar-brand text-light" href="#a" text="bs-warning-bg-">
                    Twi<span>light</span>
                    </a>
                    <div class="nav">
                        <a class="nav-link text-light" href="#a">About</a>
                        <a class="nav-link text-light" href="#a">Resume</a>
                        <a class="nav-link text-light" href="#a">Portfolio</a>
                        <a class="nav-link text-light" href="#a">Contcact Us</a>
                        <a class="nav-link text-light" href="#a">Blog</a>
                        
                    </div>
                </nav>
            </div>
            );
    }
}
export default Home;