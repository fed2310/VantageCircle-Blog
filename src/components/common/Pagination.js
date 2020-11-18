import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Pagination = ({ pageContext }) => {
    console.log(pageContext)
    const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages } = pageContext
    const prevPageUrl = `${previousPagePath}/`
    const nextPageUrl = `${nextPagePath}/`


    return (
        <nav className="pagination mrauto" role="navigation">
            <div>
                {prevPageUrl && (

                    <Link to={prevPageUrl} rel="prev" className="previouscss ">
                            Previous
                    </Link>

                )}
            </div>
            <div className="page-selection">
                {numberOfPages > 1 && <button className="pagination-location" onClick={openList}>Page {humanPageNumber}/{numberOfPages}</button>}
                <div className="page-dropdown" id="page-dropdown">
                    <ul className="pagination-list">      
                        {Array.from({ length: numberOfPages }, (_, i) => (
                            <li key={`pagination-number${i + 1}`}>
                                <Link  to={i==0 ? "/" : `/page/${i + 1 }/`}  >
                                    {i + 1}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                {nextPageUrl && (

                    <Link to={nextPageUrl} rel="next" className="previouscssnext">
                            Next
                    </Link>
                )}
            </div>
        </nav>
    )
}

Pagination.propTypes = {
    pageContext: PropTypes.object.isRequired,
}

function openList(){
    document.getElementById(`page-dropdown`).classList.add(`open-dropdown`)   
}

export default Pagination
