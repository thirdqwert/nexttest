import Link from "next/link";


export default function Home() {
  return (
    <>
      <p>
        Home
      </p>
      <ul style={{ display: "flex", gap: "20px" }}>
        <Link href={`/about`}>about</Link>
        <Link href={`/contacts`}>contacts</Link>
        <Link href={`/contacts/user`}>user</Link>
        <Link href={`/products`}>products</Link>
        <Link href={`/profile`}>profile</Link>
        <Link href={`/support`}>support</Link>
      </ul>
    </>
  );
}
