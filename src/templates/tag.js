import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, PostCard, HeadPost, TopPosts, Pagination } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Tag page (/tag/:slug)
*
* Loads all posts for the requested tag incl. pagination.
*
*/
const Tag = ({ data, location, pageContext }) => {
    const tag = data.ghostTag
    const posts = data.allGhostPost.edges

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="series"
            />
            <Layout>
                <div className="main-container">
                    <div id="content" className="container">
                        <div className="row loop">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="tag-header">
                                            <h1>{tag.name}</h1>
                                            {tag.description ? <p>{tag.description}</p> : null }
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <HeadPost key={posts[0].node.id} post={posts[0].node} />

                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 top-posts">
                                        <div className="row">

                                            <div className="col-12 pclr">
                                                <div className="popular-posts">Popular Posts</div>
                                                {posts.slice(0,3).map(({ node }) => (
                                                    <TopPosts key={node.id} post={node}/>
                                                ))}
                                            </div>

                                            <div className="col-12 pclr">
                                                <div className="popular-posts">Editor's Pick</div>
                                                {posts.slice(0,3).map(({ node }) => (
                                                    <TopPosts key={node.id} post={node}/>
                                                ))}
                                            </div>

                                        </div>
                                    </div>
                                    
                                </div>

                                <div className="row loop">
                                    {posts.slice(1,4).map(({ node }) => (
                                        <div className="col-md-6 col-lg-4 item">
                                            <PostCard key={node.id} post={node} />
                                        </div>
                                    ))}
                                </div>

                                <div className="row loop">
                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                        <div style={{border: "1px solid #333", height: "300px"}}>
                                            <h2>CTA Block</h2>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 item pclr">
                                        <div className="col-12 pclr">
                                            <div className="row">
                                                
                                                {posts.slice(4,6).map(({ node }) => (
                                                    <div class="col-md-6 col-lg-6 item">
                                                        <PostCard key={node.id} post={node} />
                                                    </div>
                                                ))}
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row loop">
                                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 item pclr">
                                        <div className="col-12 pclr">
                                            <div className="row">
                                                {posts.slice(6,7).map(({ node }) => (
                                                    <div className="col-md-12 col-lg-12 item">
                                                        <PostCard key={node.id} post={node} />
                                                    </div>
                                                ))}
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                        <div className="col-12 pclr">
                                            <div style={{border: "1px solid #333", height: "300px"}}>
                                                <h2>CTA Block</h2>
                                            </div>
                                        </div>
                                        <div className="col-12 pclr">
                                            <div style={{border: "1px solid #333", height: "300px"}}>
                                                <h2>CTA Block</h2>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="row loop">
                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                        <div style={{border: "1px solid #333", height: "300px"}}>
                                            <h2>CTA Block</h2>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 item pclr">
                                        <div className="col-12 pclr">
                                            <div className="row">
                                                
                                                {posts.slice(7,9).map(({ node }) => (
                                                    <div class="col-md-6 col-lg-6 item">
                                                        <PostCard key={node.id} post={node} />
                                                    </div>
                                                ))}
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row loop">
                                    {posts.slice(9,12).map(({ node }) => (
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
                            </div>
                        </div>
                    </div>
                    
                </div>
            </Layout>
        </>
    )
}

Tag.propTypes = {
    data: PropTypes.shape({
        ghostTag: PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string,
        }),
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Tag

export const pageQuery = graphql`
    query GhostTagQuery($slug: String!, $limit: Int!, $skip: Int!) {
        ghostTag(slug: { eq: $slug }) {
            ...GhostTagFields
        }
        allGhostPost(
            sort: { order: DESC, fields: [published_at] },
            filter: {tags: {elemMatch: {slug: {eq: $slug}}}},
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
