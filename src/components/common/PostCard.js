import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
// import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const PostCard = ({ post }) => {
    const url = `/${post.slug}/`
    const tag = `/tag/${post.tags[0].slug}/`
    const readingTime = readingTimeHelper(post)
    console.log(post)
    return (
        <article className="post">
            <div className="post-inner-content">
                <div className="img-holder">
                    <a href={url} className="featured-image" title={ post.title}>
                        <img className="img-responsive" src={ post.feature_image } alt={ post.title}/>
                    </a>
                </div>

                <div className="inner">
                    {post.tags && <div className="tags"><Link to={tag}>{ post.tags[0].name }</Link></div>}
                    <h2 className="post-title"><a href={url} title={ post.title }> { post.title }</a></h2> 
                    <a href={url} className="excerpt" title={ post.title }>
                        { post.excerpt }
                    </a>
                    <div className="readtime_wrapper hidden-sm hidden-xs">
                        <div className="tags">{ post.updated_at_pretty } &nbsp;&nbsp;|&nbsp;&nbsp;</div>
                        <div className="readtime">{ readingTime }</div>
                    </div>
                </div>

            </div>
        </article>           
    )
}

PostCard.propTypes = {
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

export default PostCard
