import Image from 'next/image';

export function PostCardImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="relative mb-3 h-64 w-full">
      <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} />
    </figure>
  );
}
