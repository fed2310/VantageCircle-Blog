import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const TopPosts = ({ post }) => {
    const url = `/${post.slug}/`

    const readingTime = readingTimeHelper(post)
    console.log(post)
    return (

            
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
        
    )
}

TopPosts.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
}

export default TopPosts
