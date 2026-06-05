'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Settings, Users, BarChart, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/dashboard', label: '대시보드', icon: LayoutDashboard },
  { href: '/dashboard/analytics', label: '분석', icon: BarChart },
  { href: '/dashboard/users', label: '사용자', icon: Users },
  { href: '/dashboard/settings', label: '설정', icon: Settings },
];

function NavContent() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1 p-4">
      <p className="text-muted-foreground mb-2 px-2 text-xs font-semibold tracking-wider uppercase">
        메뉴
      </p>
      {navItems.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
            'hover:bg-accent hover:text-accent-foreground',
            pathname === href ? 'bg-accent text-accent-foreground' : 'text-muted-foreground',
          )}
        >
          <Icon className="h-4 w-4 shrink-0" />
          {label}
        </Link>
      ))}
    </nav>
  );
}

export function Sidebar() {
  return (
    <aside className="bg-background sticky top-0 hidden h-screen w-60 shrink-0 flex-col border-r md:flex">
      <div className="flex h-14 items-center border-b px-4">
        <span className="text-sm font-semibold">Starterkit</span>
      </div>
      <Separator />
      <NavContent />
    </aside>
  );
}

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="ghost" size="icon" className="md:hidden" />}>
        <Menu className="h-5 w-5" />
        <span className="sr-only">메뉴 열기</span>
      </SheetTrigger>
      <SheetContent side="left" className="w-60 p-0" showCloseButton={false}>
        <div className="flex h-14 items-center border-b px-4">
          <span className="text-sm font-semibold">Starterkit</span>
        </div>
        <NavContent />
      </SheetContent>
    </Sheet>
  );
}
