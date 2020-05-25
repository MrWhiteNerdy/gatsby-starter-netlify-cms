import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import BlogRoll from '../components/BlogRoll';

class BlogList extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const { currentPage, numPages } = this.props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage =
      currentPage - 1 === 1 ? '/blog' : '/blog/' + (currentPage - 1).toString();
    const nextPage = '/blog/' + (currentPage + 1).toString();

    const nextPrevButtons = (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '0.75rem',
        }}>
        <div>
          {!isFirst && (
            <Link to={prevPage} className="button" rel="prev">
              ← Previous Page
            </Link>
          )}
        </div>
        <div>
          {!isLast && (
            <Link to={nextPage} className="button" rel="next">
              Next Page →
            </Link>
          )}
        </div>
      </div>
    );

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="is-size-1">
                {isFirst
                  ? 'Latest Blog Posts'
                  : `Blog Posts - Page ${currentPage}`}
              </h1>
              {nextPrevButtons}
              <BlogRoll posts={posts} />
              {nextPrevButtons}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default BlogList;

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: $limit
      skip: $skip
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
