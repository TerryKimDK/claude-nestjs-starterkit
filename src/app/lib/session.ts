export type SessionPayload = {
  userId: string;
  email: string;
  expiresAt: Date;
};

// 데모용 Base64 인코딩 세션 — 프로덕션 전환 시 jose 라이브러리 JWT로 교체 권장
export async function encrypt(payload: SessionPayload): Promise<string> {
  return Buffer.from(JSON.stringify(payload)).toString('base64');
}

export async function decrypt(session: string | undefined): Promise<SessionPayload | null> {
  if (!session) return null;
  try {
    const payload = JSON.parse(Buffer.from(session, 'base64').toString('utf-8'));
    if (new Date(payload.expiresAt) < new Date()) return null;
    return payload as SessionPayload;
  } catch {
    return null;
  }
}
