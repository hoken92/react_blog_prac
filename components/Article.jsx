import ArticleTitle from "./ArticleTitle";
import ArticleBody from "./ArticleBody";
import ArticleImg from "./ArticleImg";

function Article({ article }) {
  const { title, date, img, alt, content } = article;
  return (
    <>
      <ArticleTitle title={title} date={date} />
      <ArticleImg img={img} alt={alt} />
      <ArticleBody content={content} />
    </>
  );
}

export default Article;
