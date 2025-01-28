import rehypeSlug from 'rehype-slug'
import rehypePrismPlus from 'rehype-prism-plus'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import rehypeStringify from 'rehype-stringify'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrismPlus, { showLineNumbers: true })
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeStringify)
    .process(markdown)

  return result.toString()
}
