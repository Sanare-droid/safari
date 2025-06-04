import { SignIn } from "@clerk/nextjs";
import React from 'react'; // Import React for JSX

export default function Page() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      <SignIn />
    </div>
  );
}
