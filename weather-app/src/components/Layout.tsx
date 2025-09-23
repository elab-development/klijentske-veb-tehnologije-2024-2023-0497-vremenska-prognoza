import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />
      <main className='container mx-auto px-4 py-6'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}