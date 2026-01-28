import Link from "next/link";

export default function LinkButton({ text, href, styles, target = "_self", rel=null }) {
  return (
    <Link href={href} className={styles} target={target} rel={rel}>
      {text}
    </Link>
  );
}