import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className='min-h-screen flex flex-col bg-slate-50 text-slate-900'>
      <Navbar />

      <main className='flex-1 flex items-center justify-center'>
        <div className='container mx-auto px-4 py-6'>
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}