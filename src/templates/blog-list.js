import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';

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

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="is-size-3">
                {isFirst
                  ? 'Latest Blog Posts'
                  : `Blog Posts - Page ${currentPage}`}
              </h1>
              <div className="columns is-multiline">
                {posts &&
                  posts.map(({ node: post }) => (
                    <div
                      className="is-parent column is-6 is-flex"
                      key={post.id}>
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
                        <p style={{ flexGrow: 1 }}>
                          {post.frontmatter.description}
                        </p>
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
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
