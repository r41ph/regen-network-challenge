export function CreatedAt({ timestamp }: { timestamp: string }) {
  const date = new Date(+timestamp);

  return <time dateTime={date.toISOString()}>{date.toLocaleDateString()}</time>;
};

