import Link from "next/link";

export default function CustomNotFound() {
  return (
    <div className="not-found" style={{ height: "calc(100dvh - 78px)", textAlign: "center" }}>
      <p>Could not find requested resource 404</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
