import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-light-700 py-6 dark:border-dark-400">
      <div className="container flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="small-regular text-light-400">
          &copy; {new Date().getFullYear()} Spanwich. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="https://github.com/spanwich" target="_blank" rel="noopener noreferrer" className="small-medium text-dark-400 hover:text-primary-500 dark:text-light-500">
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
