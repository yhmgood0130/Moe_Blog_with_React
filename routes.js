import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';

import AppStore from './stores/app';

import App from './components/App';

import Blog from './components/Pages/Blog';
import Default from './components/Pages/Default';
import Work from './components/Pages/Work';
import NoMatch from './compoents/Pages/NoMatch';


export default (
  <Route path="/" data={AppStore.data} component={App}>
    <IndexRoute component={Home}/>
    <Route path="about" component={About}/>
    <Route path="work" component={Work}/>
    <Route path="contact" component={Contact}/>
    <Route path="/work/:slug" component={Work}/>
    <Route path="blog/:slug" component={Blog} />
    <Route path="*" component={NoMatch}/>
  </Route>
)

// // Main component
// class App extends Component {
//   componentDidMount(){
//     document.body.className=''
//   }
//   render(){
//     return (
//       <div>
//         <h1>React Universal Blog</h1>
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/work">Work</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//           </ul>
//         </nav>
//         { this.props.children }
//       </div>
//     )
//   }
// }
//
// // Pages
// class Home extends Component {
//   render(){
//     return (
//       <div>
//         <h2>Home</h2>
//         <div>Some home page content</div>
//       </div>
//     )
//   }
// }
// class About extends Component {
//   render(){
//     return (
//       <div>
//         <h2>About</h2>
//         <div>Some about page content</div>
//       </div>
//     )
//   }
// }
// class Work extends Component {
//   render(){
//     return (
//       <div>
//         <h2>Work</h2>
//         <div>Some work page content</div>
//       </div>
//     )
//   }
// }
// class Contact extends Component {
//   render(){
//     return (
//       <div>
//         <h2>Contact</h2>
//         <div>Some contact page content</div>
//       </div>
//     )
//   }
// }
// class NoMatch extends Component {
//   render(){
//     return (
//       <div>
//         <h2>NoMatch</h2>
//         <div>404 error</div>
//       </div>
//     )
//   }
// }
