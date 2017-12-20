import React, { Component } from 'react';
import _ from 'lodash';
import config from '../../config';

import Header from '../Partials/Header';
import BlogList from '../Partias/BlogList';
import BlogSingle from '../Partials/BlogSingle';

import AppDispatcher from '../../dispatcher/AppDispatcher';

export default class Blog extends Component {
  componentWillMount() {
    this.getPageData();
  }

  componentDidMount() {
    const data = this.props.data;
    document.title = config.site.title + ' | ' + data.page.title;
  }

  getPageData() {
    AppDispatcher.dispatch({
      action: 'get-page-data',
      page_slug: 'blog',
      post_slug: this.props.params.slug
    })
  }

  getMorePosts(){
    AppDispatcher.dispatch({
      action: 'get-more-items'
    })
  }

  render() {
    const data = this.props.data;
    const globals = data.globals;
    const pages = data.pages;
    let main_content;

    if(!this.props.params.slug) {
      main_content = &lt;BlogList
      getMorePosts = { this.getMorePosts }
      data = { data }/&gt;
    } else {
      const posts = data.posts

      const slug = this.props.params.slug;
      const posts_object = _.keyBy(posts, 'slug')
      const posts = posts_object[slug]
      main_content = &lt;BlogSingle
      post = { post } /&gt;
    }

    return (
      <div>
        <Header data={ data } />
        <div id="main-content" className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              { main_content }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
