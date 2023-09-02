import FooterItems from "./units/FooterItems";

async function Footer() {
  const texts = [
    "© 2023",
    "Twitter",
    "LinkedIn",
    "Email",
    "RSS feed",
    "Add to Feedly",
  ];
  return (
    <footer>
      <div className="container">
        {texts.map((el, inx) => (
          <FooterItems key={inx} text={el} />
        ))}
      </div>
    </footer>
  );
}

export default Footer;
