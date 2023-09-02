import Link from "next/link";

type props = {
  text: string;
};

function FooterItems({ text }: props) {
  return (
    <p className="footer-items">
      <Link href={"#"}>{text}</Link>
    </p>
  );
}

export default FooterItems;
