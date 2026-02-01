"use client";

import { useLang } from "@/context/lang-context";

export default function AboutPage() {
  const { lang } = useLang();

  return (
    <main className="container py-10">
      <h1 className="h1-bold text-dark-100 dark:text-light-900">
        {lang === "en" ? "About Me" : "เกี่ยวกับฉัน"}
      </h1>
      <div className="prose mt-6 max-w-none dark:prose-invert">
        {lang === "en" ? (
          <>
            <p className="paragraph-regular text-dark-500 dark:text-light-700">
              Hi! I&apos;m a software engineer and researcher. Welcome to my personal site
              where I share my projects, research, and blog posts.
            </p>
            <p className="paragraph-regular text-dark-500 dark:text-light-700">
              Feel free to explore and reach out if you&apos;d like to connect.
            </p>
          </>
        ) : (
          <>
            <p className="paragraph-regular text-dark-500 dark:text-light-700">
              สวัสดีค่ะ! ฉันเป็นวิศวกรซอฟต์แวร์และนักวิจัย ยินดีต้อนรับสู่เว็บไซต์ส่วนตัว
              ที่ฉันแชร์โปรเจกต์ งานวิจัย และบล็อกโพสต์
            </p>
            <p className="paragraph-regular text-dark-500 dark:text-light-700">
              เชิญสำรวจและติดต่อได้เลยนะคะ
            </p>
          </>
        )}
      </div>
    </main>
  );
}
