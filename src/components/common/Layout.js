import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Navigation } from '.'
import config from '../../utils/siteConfig'

// Styles
// import '../../styles/app.css'
import '../../styles/bootstrap.min.css'
import '../../styles/style.css'
import '../../styles/custom-styles.css'
import '../../styles/custom-styles1.css'

/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const site = data.allGhostSettings.edges[0].node
    const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}` : null
    const facebookUrl = site.facebook ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}` : null

    return (
        <>
            <Helmet>
                <html lang={site.lang} />
                <style type="text/css">{`${site.codeinjection_styles}`}</style>
                <body className={bodyClass} />
            </Helmet>

            <div className="body_wrapper viewport">

                <div className="viewport-top">
                    {/* The main header section on top of the screen */}
                    <header>
                       <div className="container custom_container">
                          <div className="row">
                             <nav className="navbar navbar-expand-lg menu_center w100">
                                <div className="col-3 ml-auto">
                                   <div className="blog-logo">
                                   <a className="" href="https://www.vantagecircle.com/"> 
                                      <img src="https://www.vantagecircle.com/wp-content/uploads/2020/02/vantage-circle-logo-1.png" alt={site.title} />
                                   </a>
                                </div>
                                </div>
                                
                                <div className="col-9">
                                   <div className="inner">
                                      <div className="navigation">
                                         <ul id="menu-main-menu-global" className="navbar-nav menu mr-auto ml-auto">
                                            <li id="menu-item-28" className="menu-item nav-item">
                                               <a href="https://www.vantagecircle.com/" className="nav-link">Home </a>
                                            </li>
                                            <li id="menu-item-18" className="menu-item nav-item dropdown submenu">
                                               <a href="https://www.vantagecircle.com/solutions" className="nav-link">Solutions</a>
                                               <ul className="dropdown-menu mega_menu_three">
                                                <li className="nav-item">
                                                  <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                      <a href="https://www.vantagecircle.com/solutions/rewards-recognition/" className="nav-link">
                                                        <span className="navdropdown_link">
                                                          <span className="navdropdown_icon">
                                                            <img src="https://res.cloudinary.com/vantagecircle/image/upload/vantagecms/uploads/2020/01/vanatgerewards-icon.png" alt=" Vantage Rewards" />
                                                          </span>
                                                          <span className="navdropdown_content">
                                                            <h5>  Vantage Rewards  </h5>
                                                            <p> Employee Rewards and Recognition </p>
                                                          </span>
                                                        </span>
                                                      </a>
                                                    </li>
                                                    <li className="nav-item">
                                                      <a href="https://www.vantagecircle.com/solutions/employee-discount/" className="nav-link">
                                                        <span className="navdropdown_link">
                                                          <span className="navdropdown_icon">
                                                            <img src="https://res.cloudinary.com/vantagecircle/image/upload/vantagecms/uploads/2020/01/vantageperks-icon.png" alt=" Vantage Perks" />
                                                          </span>
                                                          <span className="navdropdown_content">
                                                            <h5>  Vantage Perks  </h5>
                                                            <p> Employee Discount and Benefits </p>
                                                          </span>
                                                        </span>
                                                      </a>
                                                    </li>
                                                    <li className="nav-item">
                                                      <a href="https://www.vantagefit.io" target="_blank" className="nav-link">
                                                        <span className="navdropdown_link">
                                                          <span className="navdropdown_icon">
                                                            <img src="https://res.cloudinary.com/vantagecircle/image/upload/vantagecms/uploads/2020/01/vantagefit-icon.png" alt=" Vantage Fit" />
                                                          </span>
                                                          <span className="navdropdown_content">
                                                            <h5>  Vantage Fit  </h5>
                                                            <p> Employee Health and Wellness </p>
                                                          </span>
                                                        </span>
                                                      </a>
                                                    </li>
                                                    <li className="nav-item">
                                                      <a href="https://www.vantagecircle.com/solutions/employee-survey/" className="nav-link">
                                                        <span className="navdropdown_link">
                                                          <span className="navdropdown_icon">
                                                            <img src="https://res.cloudinary.com/vantagecircle/image/upload/vantagecms/uploads/2020/01/vantagepulse-icon.png" alt=" Vantage Pulse" />
                                                          </span>
                                                          <span className="navdropdown_content">
                                                            <h5>  Vantage Pulse  </h5>
                                                            <p> Employee Survey and Feedback </p>
                                                          </span>
                                                        </span>
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                              </ul>
                                            </li>
                                            <li id="menu-item-489" className="menu-item nav-item">
                                               <a href="https://engage.vantagecircle.com/pricing/" className="nav-link">Pricing </a>
                                            </li>
                                            <li id="menu-item-489" className="menu-item nav-item">
                                               <a href="https://www.vantagecircle.com/corporates" className="nav-link">Partners </a>
                                            </li>
                                            <li id="menu-item-582" className="menu-item nav-item dropdown submenu">
                                               <a href="https://www.vantagecircle.com/resources/" className="nav-link">Resources</a>
                                               <ul className="dropdown-menu mega_menu_three">
                                                  <li className="nav-item">
                                                     <ul className="dropdown-menu">
                                                        <li className="nav-item">
                                                           <a href="https://blog.vantagecircle.com/" className="nav-link">
                                                              <span className="navdropdown_link">
                                                                 <span className="navdropdown_icon">
                                                                    <img src="https://res.cloudinary.com/vantagecircle/image/upload/v1590726674/vantagecms/uploads/2020/05/blog.png" alt="Blog" />
                                                                 </span>
                                                                 <span className="navdropdown_content">
                                                                    <h5>  Blog  </h5>
                                                                    <p> Insightful articles, best practices and trends in HR innovation </p>
                                                                 </span>
                                                              </span>
                                                           </a>
                                                        </li>

                                                        <li className="nav-item">
                                                           <a href="https://www.vantagecircle.com/resources/" className="nav-link">
                                                              <span className="navdropdown_link">
                                                                 <span className="navdropdown_icon">
                                                                    <img src="https://res.cloudinary.com/vantagecircle/image/upload/v1590726674/vantagecms/uploads/2020/05/ebook.png" alt="Guides and eBooks" />
                                                                 </span>
                                                                 <span className="navdropdown_content">
                                                                    <h5>  Guides and eBooks  </h5>
                                                                    <p> A free resource center with practical guides on HR management </p>
                                                                 </span>
                                                              </span>
                                                           </a>
                                                        </li>

                                                        <li className="nav-item">
                                                           <a href="https://blog.vantagecircle.com/podcasts/" className="nav-link">
                                                              <span className="navdropdown_link">
                                                                 <span className="navdropdown_icon">
                                                                    <img src="https://res.cloudinary.com/vantagecircle/image/upload/v1590726674/vantagecms/uploads/2020/05/podcast.png" alt="Vantage Influencers Podcast" />
                                                                 </span>
                                                                 <span className="navdropdown_content">
                                                                    <h5>  Vantage Influencers Podcast  </h5>
                                                                    <p> Listen to thought leaders on best HR practices and trends </p>
                                                                 </span>
                                                              </span>
                                                           </a>
                                                        </li>
                                                        <li className="nav-item">
                                                           <a href="https://www.vantagecircle.com/webinars/" className="nav-link">
                                                              <span className="navdropdown_link">
                                                                 <span className="navdropdown_icon">
                                                                    <img src="https://res.cloudinary.com/vantagecircle/image/upload/v1590726674/vantagecms/uploads/2020/06/webinar-icon.png" alt="Vantage Doers Webinar" />
                                                                 </span>
                                                                 <span className="navdropdown_content">
                                                                    <h5>  Vantage Doers Webinar  </h5>
                                                                    <p>  Changing things together </p>
                                                                 </span>
                                                              </span>
                                                           </a>
                                                        </li>
                                                     </ul>
                                                  </li>
                                               </ul>
                                            </li>
                                            
                                            <li id="menu-item-475" className="menu-item nav-item">
                                               <a href="https://www.vantagecircle.com/contact-us" className="nav-link">Contact Us </a>
                                            </li>
                                         </ul>
                                      </div>
                                     
                                      <div className="navbar-nav right-btns">
                                         <a href="#" data-toggle="modal" data-target="#search" className="search-trigger"></a>
                                         <a href="#" data-toggle="modal" data-target="#bookmark" className="bookmark-trigger"><span className="counter hidden"></span><i className="far fa-bookmark"></i><i className="fas fa-bookmark"></i></a>
                                         <a className="menu_cus btn_get btn-meta btn_hover" href="https://www.vantagecircle.com/request-demo/?vc_page_source=home&amp;vc_button_name=menu_bottom_cta">Request Demo </a>
                                      </div>
                                   </div>
                                </div>
                             </nav>
                          </div>
                       </div>

                    </header>
                    {isHome ? 
                        <main className="main-container" role="main">
                            {/* All the main content gets inserted here, index.js, post.js */}
                            <div id="content" className="container">
                                <div className="row loop">
                                    <div className="col-12">
                                        
                                        {children}
                                        
                                    </div>
                                </div>
                            </div>
                        </main> :
                        <main id="content" className="blog-content-container container-top" role="main">  
                            <div className="single-blog-post">
                                {children}
                            </div>
                        </main>
                    }
                </div>

                <div className="viewport-bottom">
                    {/* The footer at the very bottom of the screen */}
                    <footer className="new_footer_area bg_color blog-content-container">
                        <div className="new_footer_top">
                          <div className="container">
                             <div className="row">
                                <div id="custom_html-2" className="widget_text widget footer-widget col-lg-3 col-md-12 col-sm-12 widget_custom_html">
                                   <div className="widget_text f_widget about-widget">
                                      <div className="textwidget custom-html-widget">
                                         <p> <img src="https://www.vantagecircle.com/wp-content/uploads/2020/02/vantage-circle-logo-1.png" alt="Vantage Circle" /></p>
                                         <p> Collaborate with us to provide your employees an engaging and rewarding experience.</p>
                                         <div className="social-icons">
                                            <div className="icons"> <a href="https://www.facebook.com/vantagecircle" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></div>
                                            <div className="icons"> <a href="https://twitter.com/VantageCircle" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" aria-hidden="true"></i></a></div>
                                            <div className="icons"> <a href="https://www.linkedin.com/company/vantage-circle" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a></div>
                                            <div className="icons"> <a href="https://www.youtube.com/channel/UCzb6J4NEmhuGpj_-u2kz7aw" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube" aria-hidden="true"></i></a></div>
                                            <div className="icons"> <a href="https://in.pinterest.com/vantagecircle/" target="_blank" rel="noopener noreferrer"><i className="fab fa-pinterest" aria-hidden="true"></i></a></div>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                                <div id="nav_menu-3" className="widget footer-widget col-lg-3 col-md-12 widget_nav_menu col-sm-12">
                                   <div className="f_widget about-widget pl_70">
                                      <h3 className="widget_title f-title f_600 t_color f_size_18 mb_40">Company</h3>
                                      <div className="menu-footer-3-company-container">
                                         <ul id="menu-footer-3-company" className="menu">
                                            <li id="menu-item-586" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-586"><a href="https://www.vantagecircle.com/about-us/" className="nav-link">About Us </a></li>
                                            <li id="menu-item-541" className="menu-item menu-item-type-post_type_archive menu-item-object-career menu-item-541"><a href="https://www.vantagecircle.com/careers/" className="nav-link">Careers - <b style={{color: "#2c2d4f",fontWeight: "500" }}>We're hiring!</b> </a></li>
                                            <li id="menu-item-611" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-611"><a href="https://www.vantagecircle.com/advertisers/" className="nav-link">Advertise with us </a></li>
                                            <li id="menu-item-608" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-608"><a href="https://www.vantagecircle.com/contact-us/" className="nav-link">Contact Us </a></li>
                                         </ul>
                                      </div>
                                   </div>
                                </div>
                                <div id="nav_menu-2" className="widget footer-widget col-lg-3 col-md-12 widget_nav_menu col-sm-12">
                                   <div className="f_widget about-widget pl_70">
                                      <h3 className="widget_title f-title f_600 t_color f_size_18 mb_40">Solutions</h3>
                                      <div className="menu-footer-2-solutions-container">
                                         <ul id="menu-footer-2-solutions" className="menu">
                                            <li id="menu-item-382" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-382"><a href="https://www.vantagecircle.com/solutions/rewards-recognition/" className="nav-link">Employee Recognition </a></li>
                                            <li id="menu-item-380" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-380"><a href="https://www.vantagecircle.com/solutions/employee-discount/" className="nav-link">Employee Discount </a></li>
                                            <li id="menu-item-381" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-381"><a href="https://www.vantagecircle.com/solutions/employee-survey/" className="nav-link">Employee Survey </a></li>
                                            <li id="menu-item-394" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-394"><a href="https://www.vantagefit.io" target="_blank" className="nav-link">Employee Wellness </a></li>
                                            <li id="menu-item-393" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-393"><a href="https://www.vantagecircle.com/employee-engagement-platform/" className="nav-link">Employee Engagement </a></li>
                                         </ul>
                                      </div>
                                   </div>
                                </div>
                                <div id="nav_menu-4" className="widget footer-widget col-lg-3 col-md-12 widget_nav_menu col-sm-12">
                                   <div className="f_widget about-widget pl_70">
                                      <h3 className="widget_title f-title f_600 t_color f_size_18 mb_40">Resource Center</h3>
                                      <div className="menu-footer-4-links-container">
                                         <ul id="menu-footer-4-links" className="menu">
                                            <li id="menu-item-587" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-587"><a href="https://www.vantagecircle.com/resources/" className="nav-link">Resources </a></li>
                                            <li id="menu-item-389" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-389"><a href="https://blog.vantagecircle.com/" className="nav-link">Blog </a></li>
                                            <li id="menu-item-389" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-389"><a href="https://blog.vantagecircle.com/podcasts/" className="nav-link">Vantage Podcasts </a></li>
                                            <li id="menu-item-607" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-607"><a href="https://blog.vantagecircle.com/become-a-contributor/" className="nav-link">Become a Contributor </a></li>
                                            <li id="menu-item-607" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-607"><a href="https://www.vantagecircle.com/in-the-press/" className="nav-link">In the Press </a></li>
                                         </ul>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="footer_bottom">
                          <div className="container">
                             <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-7 col-md-6">
                                   <p>© Vantage Circle. 2020 All rights reserved.</p>
                                </div>
                                <div className="col-lg-6 col-sm-5 text-right col-md-6">
                                   <p><a href="https://www.vantagecircle.com/terms-conditions/">Terms and Conditions</a>&nbsp; |&nbsp; <a href="https://www.vantagecircle.com/privacy-policy/">Privacy Policy</a></p>
                                </div>
                             </div>
                          </div>
                       </div>
                    </footer>


                </div>
            </div>

        </>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
}

const DefaultLayoutSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: {eq: "ghost-icon.png"}) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={data => <DefaultLayout data={data} {...props} />}
    />
)

export default DefaultLayoutSettingsQuery
