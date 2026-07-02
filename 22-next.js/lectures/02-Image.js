// * Image component in Next.js
// * The Image component in Next.js is used to optimize images in the application. It provides features like lazy loading, automatic resizing, and support for modern image formats.
// * To use the Image component, you need to import it from 'next/image' and then use it in your component, passing the 'src' and 'alt' props.
// * The 'src' prop can be a local image imported from the assets folder or a remote image URL. The 'alt' prop is used for accessibility and should describe the content of the image.

import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image priority src={logoImg} alt="A plate with food on it" />
          NextLevel Food
        </Link>
      </header>
    </>
  );
}
