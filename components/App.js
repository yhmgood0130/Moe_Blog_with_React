import React, { Component } from 'react';

import AppDispatcher from '../dispatcher/AppDispatcher';

import AppStore from '../stores/AppStore';

import Nav from './Partials/Nav';
import Footer from './Partials/Footer';
import Loading from './Partials/Loading';

export default class App extends Component {

  componentDidMount() {
    AppStore.addChangeListener(this._onChange.bind(this))
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange.bind(this))
  }

  _onChange() {
    this.setState(AppStore)
  }

  getStore(){
    AppDispatcher.dispatch({
      action: 'get-app-store'
    })
  }

  render() {
    const data = AppStore.data;

    if(!data.ready) {
      document.body.clasName = '';
      this.getStore();

      let style = {
        marginTop: 120;
      }

      return (
        <div className="container text-center" style={ style }>
          <Loading />
        </div>
      )
    }

    const Routes =
    React.cloneElement(this.props.children, { data: data })

    return (
      <div>
        <Nav data={ data } />
        { Routes }
        <Footer data={ data } />
      </div>
    )
  }

}
