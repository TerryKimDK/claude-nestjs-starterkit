import { NextResponse } from 'next/server';

export type HelloResponse = {
  message: string;
  timestamp: string;
  data: Array<{ id: number; title: string; status: 'active' | 'inactive' }>;
};

export async function GET(): Promise<NextResponse<HelloResponse>> {
  return NextResponse.json({
    message: 'Hello from Next.js Route Handler!',
    timestamp: new Date().toISOString(),
    data: [
      { id: 1, title: '프로젝트 A', status: 'active' },
      { id: 2, title: '프로젝트 B', status: 'inactive' },
      { id: 3, title: '프로젝트 C', status: 'active' },
    ],
  });
}
