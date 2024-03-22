export function Heading({ text }: { text: string }) {
  return (
    <h1 className="my-12 font-sans text-3xl font-bold md:text-4xl lg:text-5xl">
      {text}
    </h1>
  );
}
