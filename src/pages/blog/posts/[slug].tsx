import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../../components/util/container'
import PostBody from '../../../components/post/post-body'
import Header from '../../../components/layout/header'
import PostHeader from '../../../components/post/post-header'
import Layout from '../../../components/layout/layout'
import { getAllPosts, getPostBySlug } from '../../../lib/api'
import PostTitle from '../../../components/post/post-title'
import Head from 'next/head'
import markdownToHtml from '../../../lib/markdownToHtml'
import { PostType } from '../../../interfaces/post'
import { config } from '../../../lib/config'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter()
  const pageTitle = `${post.title} | ${config.author.name}`
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Header />
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{pageTitle}</title>
              </Head>
              <PostHeader title={post.title} date={post.date} />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'status',
    'content',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug', 'status'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
