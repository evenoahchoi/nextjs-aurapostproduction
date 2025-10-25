import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

export default function AccountDeletion() {
    return (
        <Layout>
            <Head>
                <title>계정 및 데이터 삭제 요청 - 마음장부</title>
                <meta name="description" content="마음장부 계정 및 데이터 삭제 요청 안내" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <h1 className="text-3xl font-bold text-red-600 mb-8 text-center border-b-4 border-red-600 pb-4">
                            🗑️ 계정 및 데이터 삭제 요청
                        </h1>
                        
                        <div className="prose prose-lg max-w-none">
                            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-lg">
                                <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
                                    ⚠️ 중요 안내
                                </h3>
                                <p className="text-red-700 font-semibold">
                                    계정 삭제는 되돌릴 수 없는 작업입니다. 계정을 삭제하면 모든 데이터가 영구적으로 삭제되며 복구할 수 없습니다.
                                </p>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-lg">
                                <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                                    📱 앱 정보
                                </h3>
                                <div className="text-blue-700 space-y-1">
                                    <p><strong>앱명:</strong> 마음장부</p>
                                    <p><strong>개발사:</strong> 아우라포스트프로덕션 주식회사</p>
                                    <p><strong>문의:</strong> dev@aura-postproduction.com</p>
                                </div>
                            </div>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    📋 삭제되는 데이터 유형
                                </h2>
                                <p className="text-gray-700 mb-6">
                                    계정 삭제 시 다음 데이터가 영구적으로 삭제됩니다:
                                </p>
                                
                                <div className="bg-gray-50 p-6 rounded-lg mb-6 border-l-4 border-green-500">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                        🔐 계정 정보
                                    </h3>
                                    <ul className="text-gray-700 space-y-2">
                                        <li>• 소셜로그인 프로바이더 고유 식별자 (Provider ID)</li>
                                        <li>• 디스플레이네임 (카카오 로그인 시)</li>
                                        <li>• 성별, 태어난 연도</li>
                                        <li>• 닉네임 (서비스 내 사용자 식별용)</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg mb-6 border-l-4 border-green-500">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                        📝 경조사 기록
                                    </h3>
                                    <ul className="text-gray-700 space-y-2">
                                        <li>• 경조사 기록 정보 (상대방 이름, 장소, 메모, 금액, 날짜, 참석여부)</li>
                                        <li>• 사용자 정의 카테고리 정보</li>
                                        <li>• 암호화된 개인정보 (AES-256 암호화된 데이터)</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg mb-6 border-l-4 border-green-500">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                        📊 서비스 이용 데이터
                                    </h3>
                                    <ul className="text-gray-700 space-y-2">
                                        <li>• 서비스 이용 기록, 접속 로그</li>
                                        <li>• 앱 사용 통계 및 성능 데이터</li>
                                        <li>• 푸시 알림 토큰 (FCM 토큰)</li>
                                        <li>• PIN 보안 정보 (암호화된 4자리 숫자)</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg mb-6 border-l-4 border-green-500">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                        📱 기기 정보
                                    </h3>
                                    <ul className="text-gray-700 space-y-2">
                                        <li>• 기기 정보 (OS 버전, 기기 모델명, 기기 고유 식별자)</li>
                                        <li>• Google AdMob 광고 식별자</li>
                                        <li>• 광고 시청 기록 및 빈도</li>
                                    </ul>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    🔄 계정 삭제 절차
                                </h2>
                                
                                <div className="bg-gray-50 p-6 rounded-lg mb-6 border-l-4 border-green-500">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                        1단계: 데이터 백업 (권장)
                                    </h3>
                                    <p className="text-gray-700 mb-3">계정 삭제 전에 중요한 데이터를 백업하세요.</p>
                                    <ul className="text-gray-700 space-y-2">
                                        <li>• 앱 내 &quot;데이터 내보내기&quot; 기능 사용</li>
                                        <li>• Excel 파일로 경조사 기록 다운로드</li>
                                        <li>• 백업 파일을 안전한 곳에 저장</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg mb-6 border-l-4 border-green-500">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                        2단계: 앱 내 계정 삭제
                                    </h3>
                                    <p className="text-gray-700 mb-3">마음장부 앱에서 다음 단계를 따라주세요:</p>
                                    <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                                        <li>앱 실행 후 설정 메뉴로 이동</li>
                                        <li>&quot;계정 탈퇴&quot; 선택</li>
                                        <li>경고 메시지 확인 후 &quot;탈퇴하기&quot; 입력</li>
                                        <li>최종 확인 후 탈퇴 완료</li>
                                    </ol>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg mb-6 border-l-4 border-green-500">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                        3단계: 자동 삭제 프로세스
                                    </h3>
                                    <p className="text-gray-700 mb-3">계정 탈퇴 요청 시 다음 순서로 자동 삭제됩니다:</p>
                                    <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                                        <li>거래 내역 삭제 (암호화된 설명 포함)</li>
                                        <li>경조사 데이터 삭제 (암호화된 이름, 장소, 메모 포함)</li>
                                        <li>사용자 정의 카테고리 삭제</li>
                                        <li>사용자 계정 삭제</li>
                                        <li>암호화 캐시 정리</li>
                                        <li>로컬 저장소 데이터 완전 정리</li>
                                        <li>Supabase Auth 삭제</li>
                                    </ol>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    ⏰ 데이터 보관 기간
                                </h2>
                                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                                    <p className="text-gray-700 mb-2"><strong>즉시 삭제:</strong> 계정 탈퇴 요청 시 모든 개인정보가 즉시 삭제됩니다.</p>
                                    <p className="text-gray-700 mb-3"><strong>법적 보관:</strong> 관계 법령에 따라 일부 데이터는 법정 보관기간 동안 보관될 수 있습니다.</p>
                                    <ul className="text-gray-700 space-y-1">
                                        <li>• 전자상거래법: 계약 관련 기록 5년</li>
                                        <li>• 통신비밀보호법: 로그 기록 3개월</li>
                                        <li>• 전자금융거래법: 거래 기록 5년</li>
                                    </ul>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    📞 문의 및 지원
                                </h2>
                                <div className="bg-yellow-50 p-6 rounded-lg">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-3">개인정보보호책임자</h3>
                                    <div className="text-gray-700 space-y-1">
                                        <p><strong>성명:</strong> 최원영</p>
                                        <p><strong>직책:</strong> CTO</p>
                                        <p><strong>전화:</strong> 010-2029-2579</p>
                                        <p><strong>이메일:</strong> dev@aura-postproduction.com</p>
                                    </div>
                                </div>
                            </section>

                            <div className="bg-blue-50 p-6 rounded-lg mb-8">
                                <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                                    💡 추가 도움말
                                </h3>
                                <p className="text-blue-700 mb-2">
                                    계정 삭제와 관련하여 궁금한 점이 있으시면 언제든지 문의해주세요.
                                </p>
                                <p className="text-blue-700">
                                    데이터 일부만 삭제하고 싶으시다면 개인정보처리방침을 참고해주세요.
                                </p>
                            </div>

                            <div className="text-center my-8">
                                <Link 
                                    href="/privacy_policy" 
                                    className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
                                >
                                    📋 개인정보처리방침
                                </Link>
                            </div>

                            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                                <p className="text-sm text-gray-500 mb-2">
                                    본 페이지는 Google Play Console 데이터 보안 요구사항에 따라 제공됩니다.
                                </p>
                                <p className="text-sm text-gray-500">
                                    © 2025 아우라포스트프로덕션 주식회사. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
