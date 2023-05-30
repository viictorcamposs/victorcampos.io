import { NextResponse } from 'next/server'

import articles from './articles.json'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const query = searchParams.get('article')

  if (query) {
    const article = articles.find(article => article.paramId === query)
    return NextResponse.json(article)
  }

  return NextResponse.json(articles)
}
