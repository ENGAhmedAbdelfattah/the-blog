// "use client"
import Image from "next/image";
import logo from "@/../public/images/logo.png";

function TmPreload() {
  type styles = React.CSSProperties;
  const styles: styles = { overflow: "hidden" };
  return (
    <div className="tm-preload" style={styles}>
      <Image src={logo} alt="logo" loading="eager" />
    </div>
  );
}

export default TmPreload;