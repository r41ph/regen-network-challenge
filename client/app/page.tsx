import { Button } from '@/components/button/button';

export default function Home() {
  return (
    <div className="grid place-items-center">
      <Button
        text="View project"
        to={`/project/${'b7823232-81a9-4cd8-a3fc-63dda206d63f'}`}
      />
    </div>
  );
}
