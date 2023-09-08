import { compareDesc } from 'date-fns'
import type { Post } from 'contentlayer/generated'
import { allPosts } from 'contentlayer/generated'

import Main from '~/app/components/Main'
import ListArticles from '~/app/components/ListArticles'
import HeaderSecondary from '~/app/components/HeaderSecondary'

export default function Page() {
  const posts: Post[] = allPosts.sort((a, b) =>
    compareDesc(new Date(a.releaseDate), new Date(b.releaseDate))
  )

  return (
    <>
      <HeaderSecondary />

      <Main>
        <ListArticles articles={posts} />
      </Main>
    </>
  )
}
