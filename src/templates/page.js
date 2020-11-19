import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Layout, PostCard, Podcasts } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Single page (/:slug)
*
* This file renders a single page and loads all the content.
*
*/
const Page = ({ data, location }) => {
    console.log(data)
    console.log(location.pathname)

    const posts = data.allGhostPost.edges
    const page = data.ghostPage

    console.log(posts)
    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="website"
            />
            <Helmet>
                <style type="text/css">{`${page.codeinjection_styles}`}</style>
            </Helmet>
            <Layout>

                <div className="content-inner">
                    <article className="content tag text-center">
                        <h1 className="content-title">{page.title}</h1>

                        {/* The main page content */}
                        <section
                            className="content-body load-external-scripts"
                            dangerouslySetInnerHTML={{ __html: page.html }}
                        />
                    </article>
                    {location.pathname === '/podcasts/' || location.pathname === '/podcasts' ? 
                        <div className="row loop">
                            {posts.map(({ node }) => (
                                <div className="col-12 item">
                                    <Podcasts key={node.id} post={node} />
                                </div>
                            ))}
                        </div> : null 
                    }
                </div>
                
            </Layout>
        </>
    )
}

Page.propTypes = {
    data: PropTypes.shape({
        ghostPage: PropTypes.shape({
            codeinjection_styles: PropTypes.object,
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
}

export default Page

export const postQuery = graphql`
    query($slug: String!) {
        ghostPage(slug: { eq: $slug }) {
            ...GhostPageFields
        }
        allGhostPost(
            sort: { order: DESC, fields: [published_at] },
            filter: {tags: {elemMatch: {name: {eq: "#Podcasts"}}}}
        ) {
            edges {
                node {
                ...GhostPostFields
                }
            }
        }
    }
`
