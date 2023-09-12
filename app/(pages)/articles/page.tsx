import type { Metadata } from 'next'

import { compareDesc } from 'date-fns'
import type { Post } from 'contentlayer/generated'
import { allPosts } from 'contentlayer/generated'

import Title from '~/app/components/Title'
import Main from '~/app/components/Main'
import ListArticles from '~/app/components/ListArticles'
import HeaderSecondary from '~/app/components/HeaderSecondary'

export const metadata: Metadata = {
  title: 'Victor Campos',
  description: 'Built with TypeScript, Next.js, Tailwind, Framer Motion and Vercel.',
  keywords: ['nextjs', 'blog', 'react', 'typescript', 'development', 'tech', 'career']
  // canonical
  // robots
  // og image
  // twitter image
}

export default function Page() {
  const posts: Post[] = allPosts.sort((a, b) =>
    compareDesc(new Date(a.releaseDate), new Date(b.releaseDate))
  )

  return (
    <>
      <HeaderSecondary />

      <Main>
        <Title>All articles</Title>

        <ListArticles articles={posts} />
      </Main>
    </>
  )
}
