export type PostType = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  status: PostStatus
}

export enum PostStatus {
  RELEASED = 'RELEASED',
  DRAFT = 'DRAFT',
  DEV = 'DEV',
}
