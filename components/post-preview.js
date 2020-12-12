import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  // where does the tet goes? How that is gong to look like, the text from the professors, the ghostwriter, the articles that people share and everything. it goes to the menu button.
  // a list with the pictures displayed intuitively -> where you show all the opus in the parts
  // we could make a list  of pictures. the 
  return (
    <div>
      <div className="mb-3">
        <CoverImage slug={slug} title={title} url={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">Preview:{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}
