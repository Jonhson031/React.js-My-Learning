"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderBackground from "./HeaderBackground";
import styles from "./header.module.css";
import Image from "next/image";

import logoImg from "../../../assets/logo.png";

export default function Header() {
  const path = usePathname();

  return (
    <>
      <HeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image priority src={logoImg} alt="A plate with food on it" />
          NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link
                href="/meals"
                className={
                  path.startsWith("/meals") ? styles.active : undefined
                }
              >
                Browse Meals
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className={
                  path.startsWith("/community") ? styles.active : undefined
                }
              >
                Foodies Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
