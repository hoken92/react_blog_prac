function CopyRight({ id, publisher }) {
  console.log(publisher);
  return (
    <>
      <p id={id}>&copy;{publisher}</p>
    </>
  );
}

export default CopyRight;
