'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { encrypt } from '@/app/lib/session';

export type LoginState = {
  error?: string;
};

// 데모용 하드코딩 계정
const DEMO_USERS = [
  { id: '1', email: 'admin@example.com', password: 'password123' },
];

export async function login(prevState: LoginState, formData: FormData): Promise<LoginState> {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { error: '이메일과 비밀번호를 입력해주세요.' };
  }

  const user = DEMO_USERS.find((u) => u.email === email && u.password === password);
  if (!user) {
    return { error: '이메일 또는 비밀번호가 올바르지 않습니다.' };
  }

  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId: user.id, email: user.email, expiresAt });

  const cookieStore = await cookies();
  cookieStore.set('session', session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  });

  redirect('/dashboard');
}

export async function logout(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete('session');
  redirect('/login');
}
