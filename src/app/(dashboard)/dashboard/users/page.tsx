import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DEMO_USERS = [
  { id: '1', name: '홍길동', email: 'hong@example.com', role: '관리자', status: 'active' },
  { id: '2', name: '김철수', email: 'kim@example.com', role: '사용자', status: 'active' },
  { id: '3', name: '이영희', email: 'lee@example.com', role: '사용자', status: 'inactive' },
];

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">사용자</h1>
        <p className="text-muted-foreground text-sm">등록된 사용자 목록을 관리하세요.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>사용자 목록</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="divide-y">
            {DEMO_USERS.map((user) => (
              <div key={user.id} className="flex items-center justify-between py-3">
                <div className="space-y-0.5">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground">{user.role}</span>
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${
                      user.status === 'active'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {user.status === 'active' ? '활성' : '비활성'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
