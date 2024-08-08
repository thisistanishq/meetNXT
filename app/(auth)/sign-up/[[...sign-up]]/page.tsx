'use client';

import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignUp
        appearance={{
          elements: {
            button: {
              backgroundColor: '#74740C',
              color: '#ffffff', // Optional: change text color to white for better contrast
              '&:hover': {
                backgroundColor: '#0C2A2E',
              },
            },
            input: {
              color: '#0C2A2E',
              '&:focus': {
                color: '#0C2A2E',
              },
            },
          },
        }}
      />
    </main>
  );
}
