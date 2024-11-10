function ArticleTitle({ title, date }) {
  return (
    <>
      <h3 className="date">{date}</h3>
      <h2 className="article-title">{title}</h2>
    </>
  );
}

export default ArticleTitle;
