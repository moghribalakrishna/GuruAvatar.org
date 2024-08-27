'use client'
import { useSearchParams } from 'next/navigation';
import UnifiedRegistrationForm from './UnifiedRegistrationForm';

export default function RegistrationPage() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  return (
    <div>
      <UnifiedRegistrationForm formType={type} />
    </div>
  );
}