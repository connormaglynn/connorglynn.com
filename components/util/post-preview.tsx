import Avatar from './avatar'
import DateFormatter from './date-formatter'
import Link from 'next/link'
import { config } from '../../lib/config'

type Props = {
  title: string
  date: string
  excerpt: string
  slug: string
}

const PostPreview = ({ title, date, excerpt, slug }: Props) => {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/blog/posts/${slug}`}
          href="/blog/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={config.author.name} picture={config.author.image} />
    </div>
  )
}

export default PostPreview
