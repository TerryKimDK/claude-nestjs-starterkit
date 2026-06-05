import { HelloResponse } from '@/app/api/hello/route';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

async function getData(): Promise<HelloResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}/api/hello`,
    { next: { revalidate: 60 } },
  );
  if (!res.ok) throw new Error('API 호출 실패');
  return res.json();
}

export default async function DashboardPage() {
  const data = await getData();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">대시보드</h1>
        <p className="text-muted-foreground text-sm">
          API 마지막 호출: {new Date(data.timestamp).toLocaleString('ko-KR')}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {data.data.map((item) => (
          <Card key={item.id}>
            <CardHeader className="pb-2">
              <CardDescription>프로젝트 #{item.id}</CardDescription>
              <CardTitle className="text-lg">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <span
                className={`rounded-full px-2 py-1 text-xs font-medium ${
                  item.status === 'active'
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {item.status === 'active' ? '활성' : '비활성'}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>API 응답 메시지</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{data.message}</p>
        </CardContent>
      </Card>
    </div>
  );
}
