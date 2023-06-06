// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client'

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType]
}
/** Content for blog_article documents */
interface BlogArticleDocumentData {
  /**
   * release_date field in *blog_article*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_article.release_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/date
   *
   */
  release_date: prismic.DateField
  /**
   * release_date field in *blog_article*
   *
   * - **Field Type**: Timestamp
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_article.release_date_timestamp
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/timestamp
   *
   */
  release_date_timestamp: prismic.TimestampField
  /**
   * title field in *blog_article*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_article.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField
  /**
   * Slice Zone field in *blog_article*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_article.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<BlogArticleDocumentDataSlicesSlice>
  /**
   * Meta Description field in *blog_article*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog_article.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  meta_description: prismic.RichTextField
  /**
   * Meta Image field in *blog_article*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_article.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>
  /**
   * Meta Title field in *blog_article*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog_article.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField
}
/**
 * Slice for *blog_article → Slice Zone*
 *
 */
type BlogArticleDocumentDataSlicesSlice = HeroSlice | ArticleScreenshotComponentSlice
/**
 * blog_article document from Prismic
 *
 * - **API ID**: `blog_article`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogArticleDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
  Simplify<BlogArticleDocumentData>,
  'blog_article',
  Lang
>
export type AllDocumentTypes = BlogArticleDocument
/**
 * Primary content in ArticleEmbedVideoComponent → Primary
 *
 */
interface ArticleEmbedVideoComponentSliceDefaultPrimary {
  /**
   * video field in *ArticleEmbedVideoComponent → Primary*
   *
   * - **Field Type**: Embed
   * - **Placeholder**: *None*
   * - **API ID Path**: article_embed_video_component.primary.video
   * - **Documentation**: https://prismic.io/docs/core-concepts/embed
   *
   */
  video: prismic.EmbedField
  /**
   * legend field in *ArticleEmbedVideoComponent → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article_embed_video_component.primary.legend
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  legend: prismic.KeyTextField
}
/**
 * Default variation for ArticleEmbedVideoComponent Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ArticleEmbedVideoComponentSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<ArticleEmbedVideoComponentSliceDefaultPrimary>,
  never
>
/**
 * Slice variation for *ArticleEmbedVideoComponent*
 *
 */
type ArticleEmbedVideoComponentSliceVariation = ArticleEmbedVideoComponentSliceDefault
/**
 * ArticleEmbedVideoComponent Shared Slice
 *
 * - **API ID**: `article_embed_video_component`
 * - **Description**: `ArticleEmbedVideoComponent`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ArticleEmbedVideoComponentSlice = prismic.SharedSlice<
  'article_embed_video_component',
  ArticleEmbedVideoComponentSliceVariation
>
/**
 * Primary content in ArticleScreenshotComponent → Primary
 *
 */
interface ArticleScreenshotComponentSliceDefaultPrimary {
  /**
   * screenshot field in *ArticleScreenshotComponent → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: article_screenshot_component.primary.screenshot
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  screenshot: prismic.ImageField<never>
  /**
   * legend field in *ArticleScreenshotComponent → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article_screenshot_component.primary.legend
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  legend: prismic.KeyTextField
}
/**
 * Default variation for ArticleScreenshotComponent Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ArticleScreenshotComponentSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<ArticleScreenshotComponentSliceDefaultPrimary>,
  never
>
/**
 * Slice variation for *ArticleScreenshotComponent*
 *
 */
type ArticleScreenshotComponentSliceVariation = ArticleScreenshotComponentSliceDefault
/**
 * ArticleScreenshotComponent Shared Slice
 *
 * - **API ID**: `article_screenshot_component`
 * - **Description**: `ArticleScreenshotComponent`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ArticleScreenshotComponentSlice = prismic.SharedSlice<
  'article_screenshot_component',
  ArticleScreenshotComponentSliceVariation
>
/**
 * Primary content in ArticleHeroComponent → Primary
 *
 */
interface HeroSliceDefaultPrimary {
  /**
   * image field in *ArticleHeroComponent → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>
  /**
   * title field in *ArticleHeroComponent → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField
}
/**
 * Default variation for ArticleHeroComponent Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<HeroSliceDefaultPrimary>,
  never
>
/**
 * Slice variation for *ArticleHeroComponent*
 *
 */
type HeroSliceVariation = HeroSliceDefault
/**
 * ArticleHeroComponent Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSlice = prismic.SharedSlice<'hero', HeroSliceVariation>
declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>
  }
  namespace Content {
    export type {
      BlogArticleDocumentData,
      BlogArticleDocumentDataSlicesSlice,
      BlogArticleDocument,
      AllDocumentTypes,
      ArticleEmbedVideoComponentSliceDefaultPrimary,
      ArticleEmbedVideoComponentSliceDefault,
      ArticleEmbedVideoComponentSliceVariation,
      ArticleEmbedVideoComponentSlice,
      ArticleScreenshotComponentSliceDefaultPrimary,
      ArticleScreenshotComponentSliceDefault,
      ArticleScreenshotComponentSliceVariation,
      ArticleScreenshotComponentSlice,
      HeroSliceDefaultPrimary,
      HeroSliceDefault,
      HeroSliceVariation,
      HeroSlice
    }
  }
}