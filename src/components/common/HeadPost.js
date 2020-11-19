import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const HeadPost = ({ post }) => {
    const url = `/${post.slug}/`
    const readingTime = readingTimeHelper(post)
    // console.log(post)
    // console.log(readingTime)
    return (
        <div className="col-12 col-sm-12 col-md-8 col-lg-8 item">
            <article className="featured-content post" id="featuredpost">
                <div className="post-inner-content col-xs-12">
                    <div className="">
                        <div className="img-holder col-12">
                            <a href={url} className="featured-image" title={ post.title}>
                                <img className="img-responsive" title={ post.title} src={post.feature_image} alt={post.title}/>
                            </a>
                        </div>
                        <div className="inner col-12">
                            <div className="tags">
                                <Tags post={post} limit={1} visibility="public" />
                                
                            </div>
                            <h2 className="post-title"><a href={url} title={ post.title}> { post.title}</a></h2> 
                            
                            <a href={url} className="excerpt" title={ post.title}>
                                { post.excerpt }
                            </a>
                            <div>
                                <div className="cont_read">
                                    <div className="moretxt col-xs-12 text-center">
                                        <span>
                                            <a href={url} title={ post.title}>Continue reading</a>
                                        </span>
                                    </div>
                                </div>
                                <div className="readtime_wrapper">
                                    <div className="clock icon"></div>
                                    <div className="readtime">{readingTime}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

HeadPost.propTypes = {
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

export default HeadPost
