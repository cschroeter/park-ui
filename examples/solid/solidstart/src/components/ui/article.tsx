import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { article, type ArticleVariantProps } from 'styled-system/recipes'

export type ArticleProps = ArticleVariantProps & ComponentProps<'article'>
export const Article = styled('article', article)
