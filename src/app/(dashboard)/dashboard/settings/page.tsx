import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">설정</h1>
        <p className="text-muted-foreground text-sm">애플리케이션 설정을 관리하세요.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>프로필 설정</CardTitle>
          <CardDescription>계정 정보를 수정합니다.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between py-2 border-b">
            <span className="text-sm font-medium">이메일</span>
            <span className="text-sm text-muted-foreground">admin@example.com</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="text-sm font-medium">역할</span>
            <span className="text-sm text-muted-foreground">관리자</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-sm font-medium">언어</span>
            <span className="text-sm text-muted-foreground">한국어</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>알림 설정</CardTitle>
          <CardDescription>알림 수신 방법을 설정합니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">알림 설정 옵션을 여기에 추가하세요.</p>
        </CardContent>
      </Card>
    </div>
  );
}
