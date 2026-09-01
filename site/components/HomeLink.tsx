import Link from 'next/link';

export default function HomeLink() {
  return (
    <Link href="/" className="home-link">
      <svg viewBox="0 0 24 12" aria-hidden="true">
        <path d="M0 6h22M16 1l6 5-6 5" />
      </svg>
      HOME
    </Link>
  );
}
