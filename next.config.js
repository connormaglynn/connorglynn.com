module.exports = {
  env: {
    NEXT_PUBLIC_GOOGLE_TAG_MANAGER_PROPERTY_ID:
      process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_PROPERTY_ID,
    POSTS_RELEASED_ENABLED: process.env.POSTS_RELEASED_ENABLED,
    POSTS_DRAFT_ENABLED: process.env.POSTS_DRAFT_ENABLED,
    POSTS_DEV_ENABLED: process.env.POSTS_DEV_ENABLED,
  },
  images: {
    unoptimized: true,
  },
}
