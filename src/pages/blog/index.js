import React from 'react';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="is-size-3">Latest Blog Posts</h1>
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
