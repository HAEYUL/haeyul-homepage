import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !phone.trim()) {
      setError('이름과 전화번호를 모두 입력해주세요.');
      return;
    }

    setSubmitting(true);
    const result = await login(name.trim(), phone.trim());
    setSubmitting(false);

    if (result.success) {
      navigate('/');
    } else {
      setError(result.error || '로그인에 실패했습니다.');
    }
  };

  return (
    <div className="min-h-screen bg-background-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Back to home */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-foreground-600 hover:text-primary-500 transition-colors mb-8 no-underline"
        >
          <i className="ri-arrow-left-line" />
          홈으로 돌아가기
        </Link>

        {/* Card */}
        <div className="bg-background-50 border border-background-200/70 rounded-lg p-8">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="font-heading text-2xl font-semibold text-foreground-950 mb-2">
              로그인
            </h1>
            <p className="text-sm text-foreground-600">
              이름과 전화번호로 간편하게 로그인하세요
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="login-name" className="text-sm font-medium text-foreground-800">
                이름
              </label>
              <input
                id="login-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="홍길동"
                className="w-full h-12 px-4 rounded-md border border-background-200 bg-background-100 text-sm text-foreground-950 placeholder:text-foreground-400 focus:outline-none focus:border-primary-400 transition-colors"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="login-phone" className="text-sm font-medium text-foreground-800">
                전화번호
              </label>
              <input
                id="login-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="010-1234-5678"
                className="w-full h-12 px-4 rounded-md border border-background-200 bg-background-100 text-sm text-foreground-950 placeholder:text-foreground-400 focus:outline-none focus:border-primary-400 transition-colors"
              />
            </div>

            {/* Error */}
            {error && (
              <p className="text-sm text-red-500 -mt-1">{error}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full h-12 mt-1 rounded-md bg-primary-500 text-background-50 text-sm font-medium hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
            >
              {submitting ? '처리 중...' : '로그인'}
            </button>
          </form>

          {/* Signup link */}
          <p className="text-sm text-foreground-600 text-center mt-6">
            아직 계정이 없으신가요?{' '}
            <Link to="/signup" className="text-primary-500 hover:text-primary-600 transition-colors no-underline font-medium">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}