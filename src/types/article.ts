
export interface ArticleContent {
  title: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  standard: string;
  imageSrc: string;
}

export type ArticlesData = {
  [key: string]: ArticleContent;
};
