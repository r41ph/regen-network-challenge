'use client';

import Link from 'next/link';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div className="grid h-full w-full align-middle">
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <Link href="/">Go back to Home</Link>
    </div>
  );
}
