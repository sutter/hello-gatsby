import React from 'react';
import { text } from '@storybook/addon-knobs';
import BlogArticle from './BlogArticle';

const BlogArticleProps = () => ({
  slug: text('slug', '/hello-world'),
  title: text('title', 'Hello World'),
  date: text('date', 'November 30, 2018'),
  excerpt: text(
    'excerpt',
    "This is my first post on my new fake blog! How exciting! I'm sure I'll write a lot more interesting things in the future. Oh, and here's a…",
  ),
});

export default {
  title: 'Base|BlogArticle',
};

export const base = () => <BlogArticle {...BlogArticleProps()} />;
