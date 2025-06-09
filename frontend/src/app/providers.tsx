// app/providers.tsx or app/providers.js
'use client';

import { Provider } from 'react-redux';
import { store } from '../rtk/store';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
