import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

class BlogRoll extends React.Component {
  render() {
    const { posts } = this.props;

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-6 is-flex" key={post.id}>
              <article
                className="blog-list-item tile is-child is-flex box notification"
                style={{ flexDirection: 'column' }}>
                <header>
                  <p className="post-meta">
                    <Link
                      className="title is-size-4"
                      style={{ textDecoration: 'none' }}
                      to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="subtitle is-size-5">
                      {post.frontmatter.date}
                    </span>
                  </p>
                </header>
                <br />
                <p style={{ flexGrow: 1 }}>{post.frontmatter.description}</p>
                <br />
                <Link
                  className="button"
                  style={{ alignSelf: 'flex-start' }}
                  to={post.fields.slug}>
                  Keep Reading →
                </Link>
              </article>
            </div>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default BlogRoll;
