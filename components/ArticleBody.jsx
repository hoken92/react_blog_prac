function ArticleBody({ content }) {
  return (
    <>
      <p className="text-content">{content}</p>
      <a className="view-more" href="#">
        Continues ...
      </a>
    </>
  );
}

export default ArticleBody;
