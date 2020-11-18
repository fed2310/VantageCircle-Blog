import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
// import { Tags } from '@tryghost/helpers-gatsby'
import { Layout, PostCard, HeadPost, Pagination } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Main index page (home page)
*
* Loads all posts from Ghost and uses pagination to navigate through them.
* The number of posts that should appear per page can be setup
* in /utils/siteConfig.js under `postsPerPage`.
*
*/
const Index = ({ data, location, pageContext }) => {
    const headpost = data.allGhostPost.edges
    const posts = data.allGhostPost.edges.slice(1)
    console.log(data)
    return (
        <>
            <MetaData location={location} />
            <Layout isHome={true}>
                <div className="row">
                    <HeadPost key={headpost[0].node.id} post={headpost[0].node} />

                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 top-posts">
                        <div className="row">
                            <div className="popular-posts">Popular Posts</div>

                            
                            <div className="col-12 item pclr"> 
                                <article>
                                    <div className="top-post-details">
                                        <h2 className="top-post-title">25 Quotes</h2>
                                        <div className="top-post-tags tags">
                                            company culture
                                        </div>
                                    </div>
                                </article>
                            </div>
                            

                        </div>
                    </div>
                </div>

                <div className="row loop">
                    {posts.map(({ node }) => (
                        <div className="col-md-6 col-lg-4 item">
                            <PostCard key={node.id} post={node} />
                        </div>
                    ))}
                </div>

                <div className="row loop">
                    <div className="col-12 pagination-aria">
                        <Pagination pageContext={pageContext} />
                    </div>
                </div>
            </Layout>
        </>
    )
}


Index.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Index

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: $limit,
        skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`
