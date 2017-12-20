import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router';

export default BlogList extends Component {
  scrollTop() {
    $('html, body').animate({
      scrollTop: $("#main-content").offset().top
    }, 500)
  }

  render() {
    let data = this.props.data;
    let item_num = data.item_num;
    let posts = data.posts;

    let load_more;
    let show_more_text = "Show More Posts";

    if(data.loading){
      show_more_text = "Loading...";
    }

    if(posts && item_num <= posts.length){
      load_more = (
        <div>
          <button className="btn btn-default center-block" onClick={this.props.getMorePosts.bind(this)}>
            { show_more_text }
          </button>
        </div>
      )
    }

    posts = _.take(posts, item_num);

    let posts_html = posts.map((post) => {
      let date_obj = new Data(post.created);
      let created = (date_obj.getMonth() + 1) + '/' + date_obj.getDate() + '/' + date_obj.getFullYear();

      return (
        <div key={ 'key-' + post.slug}>
          <div className="post-preview">
            <h2 className="post-title pointer">
              <Link to={ '/blog/' + post.slug } onClick={ this.scrollTop }>{ post.title }</Link>
            </h2>
            <p className="post-meta">Posted by <a href="https://cosmicjs.com" target="_blank">Moe</a> on { created }</p>
          </div>
          <hr />
        </div>
      )
    })

    return (
      <div>
        <div>{ posts_html }</div>
        { load_more }
      </div>
    )

  }
}
