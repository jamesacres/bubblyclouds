'use client';

import UserProvider from '@/components/UserProvider';
import { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren) {
  return <UserProvider>{children}</UserProvider>;
}
