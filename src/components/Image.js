import React from 'react'
import Img from 'gatsby-image'

export const Image = ({source,alternate}) => (
    <Img fluid={source} alt={alternate} />
);