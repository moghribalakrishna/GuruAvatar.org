'use client'
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import UnifiedRegistrationForm from './UnifiedRegistrationForm';

function RegistrationContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  return (
    <div>
      <UnifiedRegistrationForm formType={type || ''} /> {/* Ensure type is a string */}
    </div>
  );
}

export default function RegistrationPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegistrationContent />
    </Suspense>
  );
}