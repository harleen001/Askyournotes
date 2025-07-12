import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { shadow } from '@/app/styles/utils';
import { Button } from './ui/button';

function Header() {
  const user = null;

  return (
    <header
      className="relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8"
      style={{ boxShadow: shadow }}
    >
      <Link href="/" className="flex items-end gap-2">
        <Image src="/logo.png" alt="logo" height={60} width={60} priority />
      </Link>

      <div className="flex gap-4">
        {user ? (
          <Button variant="outline">Logout</Button>
        ) : (
          <>
            <Button asChild>
              <Link href="/sign-up" className="hidden sm:block">
                Sign Up
              </Link>
            </Button>

            <Button asChild variant="outline">
              <Link href="/login">Login</Link>
            </Button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
