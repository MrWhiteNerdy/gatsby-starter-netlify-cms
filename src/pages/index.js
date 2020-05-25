import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import BlogRoll from '../components/BlogRoll';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    const readMoreButton = (
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: '0.75rem',
        }}>
        <Link to="/blog/2" className="button">
          Read More →
        </Link>
      </div>
    );

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="is-size-1">Latest Blog Posts</h1>
              {readMoreButton}
              <BlogRoll posts={posts} />
              {readMoreButton}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export const pageQuery = graphql`
  query indexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: 6
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            description
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  }
`;
