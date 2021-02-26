import React from 'react'
import { blogs } from '../../../constants/data'
import { Container } from '../../../styled/styledCommons'
import {
  BlogCard,
  BlogCardCaption,
  BlogCardImg,
  BlogCardSubtitle,
  BlogCardText,
  BlogTitle,
  BlogWrapper,
} from './styles'

const Blogs = () => {
  return (
    <Container>
      <BlogWrapper>
        <BlogTitle>Lo último</BlogTitle>
        {blogs?.map((blog, i) => (
          <BlogCard key={i}>
            <BlogCardImg src={blog.img} alt={blog.subtitle} />
            <BlogCardText>
              <BlogCardCaption>{blog.caption}</BlogCardCaption>
              <BlogCardSubtitle>{blog.subtitle}</BlogCardSubtitle>
            </BlogCardText>
          </BlogCard>
        ))}
      </BlogWrapper>
    </Container>
  )
}

export default Blogs
