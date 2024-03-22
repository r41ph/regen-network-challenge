import Link from 'next/link';

export function Button({
  text,
  className = '',
  to,
}: {
  text: string;
  className?: string;
  to: string;
}) {
  return (
    <Link
      className={`${className} inline-flex items-center rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600`}
      href={to}
    >
      {text}
    </Link>
  );
}
