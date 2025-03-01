import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { config } from './config'
import { PostStatus } from '../interfaces/post'

const postsDirectory = join(process.cwd(), 'src/_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  return (
    slugs
      .map((slug) => getPostBySlug(slug, fields))
      .filter((post) => {
        if (
          (config.posts.releasedEnabled &&
            post.status == PostStatus.RELEASED) ||
          (config.posts.draftEnabled && post.status == PostStatus.DRAFT) ||
          (config.posts.devEnabled && post.status == PostStatus.DEV)
        ) {
          return post
        }
      })
      // sort posts by date in descending order
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  )
}
