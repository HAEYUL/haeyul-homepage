import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/lib/supabase';

interface Customer {
  id: string;
  name: string;
  phone: string;
  email: string;
  created_at: string;
}

export default function AdminPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');

  const fetchCustomers = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const { data, error: fetchError } = await supabase
        .from('customers')
        .select('id, name, phone, email, created_at')
        .order('created_at', { ascending: false });

      if (fetchError) {
        throw new Error(fetchError.message);
      }

      setCustomers(data || []);
    } catch (err) {
      setError('회원 목록을 불러오는데 실패했습니다.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCustomers();
  }, [fetchCustomers]);

  const filtered = customers.filter((c) =>
    c.name.includes(search) ||
    c.phone.includes(search) ||
    c.email.includes(search)
  );

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-background-50 py-12 px-4">
      <div className="container-main max-w-5xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="font-heading text-2xl font-semibold text-foreground-950">
              회원 관리
            </h1>
            <p className="text-sm text-foreground-600 mt-1">
              총 {customers.length}명의 회원이 가입되어 있습니다.
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-foreground-600 hover:text-primary-500 transition-colors no-underline"
          >
            <i className="ri-arrow-left-line" />
            홈으로 돌아가기
          </Link>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-sm">
            <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-foreground-400 text-sm" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="이름, 전화번호, 이메일 검색"
              className="w-full h-11 pl-10 pr-4 rounded-md border border-background-200 bg-background-100 text-sm text-foreground-950 placeholder:text-foreground-400 focus:outline-none focus:border-primary-400 transition-colors"
            />
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex items-center justify-center py-16">
            <div className="flex items-center gap-2 text-sm text-foreground-500">
              <i className="ri-loader-4-line animate-spin" />
              불러오는 중...
            </div>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="flex flex-col items-center gap-3 py-16">
            <p className="text-sm text-red-500">{error}</p>
            <button
              onClick={fetchCustomers}
              className="px-4 py-2 rounded-md bg-primary-500 text-background-50 text-sm hover:bg-primary-600 transition-colors cursor-pointer"
            >
              다시 시도
            </button>
          </div>
        )}

        {/* Table */}
        {!loading && !error && (
          <div className="border border-background-200/70 rounded-lg overflow-hidden bg-background-50">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <i className="ri-user-search-line text-3xl text-foreground-300 mb-3" />
                <p className="text-sm text-foreground-500">
                  {search ? '검색 결과가 없습니다.' : '아직 가입한 회원이 없습니다.'}
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-background-200 bg-background-100">
                      <th className="text-left px-5 py-3 font-medium text-foreground-700 whitespace-nowrap">
                        이름
                      </th>
                      <th className="text-left px-5 py-3 font-medium text-foreground-700 whitespace-nowrap">
                        전화번호
                      </th>
                      <th className="text-left px-5 py-3 font-medium text-foreground-700 whitespace-nowrap">
                        이메일
                      </th>
                      <th className="text-left px-5 py-3 font-medium text-foreground-700 whitespace-nowrap">
                        가입일
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((c) => (
                      <tr
                        key={c.id}
                        className="border-b border-background-100 last:border-b-0 hover:bg-background-100/50 transition-colors"
                      >
                        <td className="px-5 py-3.5 text-foreground-950 font-medium whitespace-nowrap">
                          {c.name}
                        </td>
                        <td className="px-5 py-3.5 text-foreground-700 whitespace-nowrap">
                          {c.phone}
                        </td>
                        <td className="px-5 py-3.5 text-foreground-700 whitespace-nowrap">
                          {c.email}
                        </td>
                        <td className="px-5 py-3.5 text-foreground-500 whitespace-nowrap">
                          {formatDate(c.created_at)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}