import Article from "./Article";
import image1 from "../src/assets/image1.jpg";
import image2 from "../src/assets/image2.jpg";

function Main() {
  const articleInfo = [
    {
      title: "On the Street in Brooklyn",
      date: "11/12/20",
      img: image1,
      alt: "model in brooklyn",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam omnis quisquam rem tempore vitae sapiente dolores voluptatem adipisci ad quae voluptatum fuga accusantium ullam, voluptate alias necessitatibus. Ullam hic numquam, laudantium quod, mollitia in reprehenderit aperiam veniam delectus omnis dolorem quas cumque inventore excepturi enim pariatur minus totam deserunt nobis earum molestias ipsam facilis. Vitae corrupti eligendi, possimus magni sit aperiam, dolores nostrum assumenda laboriosam, in voluptates ipsam. Veritatis eligendi veniam numquam illo, doloribus cupiditate expedita libero sunt nam magnam, maxime necessitatibus tempora in vitae ab repellat ducimus possimus! Vero earum accusantium ut, blanditiis eius facere soluta. Eligendi mollitia suscipit ratione amet soluta minus vero provident assumenda nisi fuga, ipsam magni voluptatum, doloremque eius distinctio aut totam vel exercitationem impedit aspernatur. Voluptatum recusandae ullam velit provident ipsum in consequatur ex voluptatem adipisci odit possimus cupiditate fugiat ad, temporibus eius aliquid ut molestiae, laborum fuga quo? Porro deleniti nesciunt quam nemo.",
    },
    {
      title: "Vintage in Vouge",
      date: "11/11/20",
      img: image2,
      alt: "fashion models",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam at nobis harum vitae et numquam eos quod accusantium placeat tempora sint libero ullam a id nihil sed illum, magni odio amet ducimus eius. Totam autem quis, rerum quidem ipsam quaerat unde. Labore rem aliquam ea ipsum excepturi eligendi? Suscipit assumenda, explicabo aspernatur laudantium tempore ea at eveniet? A culpa vitae quaerat inventore, molestias sunt distinctio suscipit sed dicta unde ut magnam! Accusamus perspiciatis voluptatibus praesentium fuga hic tenetur reiciendis officiis reprehenderit animi eum dicta aut, quos et, sed natus magnam eaque id harum repellat. Voluptates aut ab reprehenderit doloribus asperiores omnis quisquam commodi labore molestiae magnam, facilis praesentium hic sequi suscipit aliquam ad iure qui. Eligendi, expedita aliquid aspernatur esse delectus illo, possimus quam sed quod, et eius quae veritatis obcaecati aliquam? Hic esse qui, in possimus suscipit quidem placeat eos quod iure quasi eius voluptates quaerat cumque illo praesentium aperiam ab, dolorum tempora? Delectus sed libero accusamus nam enim. Pariatur quas sapiente dolore dolor, deleniti culpa eius sint praesentium. Odit, et veniam modi dicta unde repellendus nam accusantium possimus laboriosam iusto, assumenda quasi eius maxime excepturi. Veritatis eius incidunt doloribus vero? Tenetur, magnam. Ad harum sapiente veritatis! Fugiat, eligendi?",
    },
  ];

  return (
    <>
      {articleInfo.map((article, i) => {
        return <Article key={i} article={article} />;
      })}
    </>
  );
}

export default Main;
