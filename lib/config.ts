const production = process.env.NODE_ENV === 'production'
const get = <T>(
  name: string,
  fallback: T,
  options = { requireInProduction: false }
): T | string => {
  if (process.env[name]) {
    return process.env[name]
  }
  if (fallback !== undefined && (!production || !options.requireInProduction)) {
    return fallback
  }
  throw new Error(`Missing env var ${name}`)
}

export const config = {
  author: {
    name: 'Connor Glynn',
    image: '/assets/blog/authors/connor.jpg',
  },
  posts: {
    releasedEnabled: get('POSTS_RELEASED_ENABLED', 'true') === 'true',
    draftEnabled: get('POSTS_DRAFT_ENABLED', 'false') === 'true',
    devEnabled: get('POSTS_DEV_ENABLED', 'false') === 'true',
  },
}
