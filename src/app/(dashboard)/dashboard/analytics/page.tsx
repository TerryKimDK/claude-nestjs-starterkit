import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">분석</h1>
        <p className="text-muted-foreground text-sm">서비스 사용 현황 및 통계를 확인하세요.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">총 방문자</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">12,345</p>
            <p className="text-xs text-muted-foreground mt-1">전월 대비 +8.2%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">페이지뷰</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">48,210</p>
            <p className="text-xs text-muted-foreground mt-1">전월 대비 +12.5%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">평균 체류 시간</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">3분 42초</p>
            <p className="text-xs text-muted-foreground mt-1">전월 대비 -1.1%</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>월별 방문자 추이</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">차트 컴포넌트를 여기에 추가하세요.</p>
        </CardContent>
      </Card>
    </div>
  );
}
