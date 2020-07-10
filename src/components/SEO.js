import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, grapql, graphql } from 'gatsby'
import PropTypes from "prop-types"

const SEO = ({ title, meta, lang, description }) => {
    const { site } = useStaticQuery(
        graphql`
            query{
                site{
                    siteMetadata{
                        title
                        description
                        social{
                            linkedin
                        }
                    }
                }
            }
        `
    )

    const metaDescription = description || site.siteMetadata.description

    return (
        <Helmet 
            defer = {false}
            htmlAttributes = {{lang}}
            title = {title}
            titleTemplate = {`%s | ${site.siteMetadata.title}`}
            meta = {
                [
                    {
                        name: `description`,
                        content: metaDescription
                    },
                    {
                        property:  `og:title`,
                        content: title
                    },
                    {
                        property: `og:description`,
                        content: metaDescription
                    },
                    {
                        property: `og:type`,
                        content: `website`
                    }
                ].concat(meta)
            }
        />
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired
}

export default SEO