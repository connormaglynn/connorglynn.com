import Avatar from '../util/avatar'
import DateFormatter from '../util/date-formatter'
import Link from 'next/link'
import { config } from '../../lib/config'

type Props = {
  title: string
  date: string
  excerpt: string
  slug: string
}

const HeroPost = ({ title, date, excerpt, slug }: Props) => {
  return (
    <section>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              as={`/blog/posts/${slug}`}
              href="/blog/posts/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={config.author.name} picture={config.author.image} />
        </div>
      </div>
    </section>
  )
}

export default HeroPost
