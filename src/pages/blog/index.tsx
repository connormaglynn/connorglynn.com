import Container from '../../components/util/container'
import MoreStories from '../../components/blog/more-stories'
import HeroPost from '../../components/blog/hero-post'

import Layout from '../../components/layout/layout'
import { getAllPosts } from '../../lib/api'
import Head from 'next/head'
import { PostType } from '../../interfaces/post'
import Header from '../../components/layout/header'
import Intro from '../../components/blog/intro'
import { config } from '../../lib/config'

type Props = {
  allPosts: PostType[]
}

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>🚀{config.author.name}</title>
        </Head>
        <Header />
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              date={heroPost.date}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'status', 'excerpt'])

  return {
    props: { allPosts },
  }
}
