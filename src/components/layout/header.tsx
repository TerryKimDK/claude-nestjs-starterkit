import { cookies } from 'next/headers';
import { decrypt } from '@/app/lib/session';
import { logout } from '@/app/actions/auth';
import { ModeToggle } from '@/components/mode-toggle';
import { MobileSidebar } from '@/components/layout/sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export async function Header() {
  const cookieStore = await cookies();
  const session = await decrypt(cookieStore.get('session')?.value);
  const email = session?.email ?? '';
  const initials = email.slice(0, 2).toUpperCase();

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 flex h-14 items-center gap-4 border-b px-4 backdrop-blur">
      <MobileSidebar />

      <div className="md:hidden text-sm font-semibold">Starterkit</div>

      <div className="flex flex-1 items-center justify-end gap-2">
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger
            render={<Button variant="ghost" className="relative h-8 w-8 rounded-full" />}
          >
            <Avatar className="h-8 w-8">
              <AvatarFallback className="text-xs">{initials}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">내 계정</p>
                <p className="text-muted-foreground text-xs leading-none">{email}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <form action={logout}>
              <DropdownMenuItem render={<button type="submit" className="w-full" />}>
                로그아웃
              </DropdownMenuItem>
            </form>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
