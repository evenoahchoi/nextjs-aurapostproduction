import Layout from "../components/layout";
import Head from "next/head";

export default function Privacy() {
    return (
        <Layout>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>개인정보처리방침 - 마이핑(MYPING)</title>
                <meta name="description" content="마이핑(MYPING) 개인정보처리방침" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                            개인정보처리방침
                        </h1>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-sm text-gray-600 mb-8 text-right">
                                시행일자: 2026년 3월 23일
                            </p>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제1조 (목적)</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    마이핑(MYPING)(이하 &apos;회사&apos;라고 함)은 회사가 제공하는 마이핑(MYPING) 서비스(이하 &apos;서비스&apos;)를 이용하는 개인(이하 &apos;이용자&apos;)의 정보를 안전하게 보호하기 위해, 개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 &apos;정보통신망법&apos;) 등 관련 법령을 준수하며, 서비스 이용자의 개인정보 보호 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침(이하 &apos;본 방침&apos;)을 수립합니다.
                                    본 서비스는 <strong>별도의 회원가입이나 로그인을 필수적으로 요구하지 않는 익명 기반 서비스</strong>입니다.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제2조 (개인정보 처리의 원칙)</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    개인정보 관련 법령 및 본 방침에 따라 회사는 이용자의 개인정보를 수집할 수 있으며 수집된 개인정보는 개인의 동의가 있는 경우에 한해 제3자에게 제공될 수 있습니다. 단, 법령의 규정 등에 의해 적법하게 강제되는 경우 회사는 수집한 이용자의 개인정보를 사전에 개인의 동의 없이 제3자에게 제공할 수도 있습니다.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제3조 (본 방침의 공개)</h2>
                                <p className="text-gray-700 leading-relaxed mb-2">
                                    1. 회사는 이용자가 언제든지 쉽게 본 방침을 확인할 수 있도록 회사 홈페이지 또는 모바일 애플리케이션 내를 통해 본 방침을 공개하고 있습니다.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    2. 회사는 제1항에 따라 본 방침을 공개하는 경우 글자 크기, 색상 등을 활용하여 이용자가 본 방침을 쉽게 확인할 수 있도록 합니다.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제4조 (본 방침의 변경)</h2>
                                <p className="text-gray-700 leading-relaxed mb-2">1. 본 방침은 개인정보 관련 법령, 지침, 고시 또는 정부나 회사 서비스의 정책이나 내용의 변경에 따라 개정될 수 있습니다.</p>
                                <p className="text-gray-700 leading-relaxed mb-2">2. 회사는 제1항에 따라 본 방침을 개정하는 경우 다음 각 호 하나 이상의 방법으로 공지합니다.</p>
                                <div className="ml-4 text-gray-700 leading-relaxed space-y-1 mb-2">
                                    <p>가. 회사가 운영하는 인터넷 홈페이지의 공지사항란 또는 별도의 창을 통하여 공지하는 방법</p>
                                    <p>나. 모바일 애플리케이션의 공지사항 또는 푸시알림을 통하여 공지하는 방법</p>
                                    <p>다. 전자우편 또는 이와 비슷한 방법으로 이용자에게 공지하는 방법</p>
                                </div>
                                <p className="text-gray-700 leading-relaxed">3. 회사는 제2항의 공지는 본 방침 개정의 시행일로부터 최소 7일 이전에 공지합니다. 다만, 이용자 권리의 중요한 변경이 있을 경우에는 최소 30일 전에 공지합니다.</p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제5조 (개인정보의 수집 항목)</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    서비스는 회원가입이나 로그인을 통해 성명, 연락처, 이메일 등의 민감한 개인 식별 정보를 수집하지 않습니다. 다만, 서비스의 원활한 제공을 위하여 다음과 같은 정보가 자동으로 수집될 수 있습니다.
                                </p>
                                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                    <h3 className="font-semibold text-gray-800 mb-2">1. 서비스 이용 과정에서 생성·수집되는 정보</h3>
                                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                                        <li>기기 식별자 (임의로 생성된 익명 UUID)</li>
                                        <li>기기 정보 (OS 버전, 기기 모델명)</li>
                                        <li>사용자가 앱 내에서 직접 등록한 관심사/키워드 정보</li>
                                        <li>서비스 이용 기록, 접속 로그, 앱 사용 통계, 오류(Crash) 로그</li>
                                        <li>푸시 알림 전송을 위한 식별 토큰 (FCM 토큰)</li>
                                        <li>인앱 결제(구독 등 프리미엄 기능) 이용 시 스토어에서 제공하는 익명화된 영수증 정보</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-800 mb-2">2. 광고 관련 수집 정보</h3>
                                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                                        <li>광고 식별자 (ADID, IDFA)</li>
                                        <li>광고 시청 기록 및 빈도</li>
                                    </ul>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제6조 (개인정보 수집 방법)</h2>
                                <p className="text-gray-700 leading-relaxed mb-2">회사는 다음과 같은 방법으로 이용자의 개인정보를 수집합니다.</p>
                                <div className="text-gray-700 leading-relaxed space-y-1">
                                    <p>1. 앱 설치 후 최초 실행 시 기기 식별자 자동 생성 및 수집</p>
                                    <p>2. 사용자가 앱 내 메뉴를 통해 키워드를 등록하거나 설정을 변경할 때 수집</p>
                                    <p>3. Firebase 서비스를 통한 자동 수집 방식</p>
                                    <p>4. Google AdMob 등 광고 플랫폼을 통한 자동 수집 방식</p>
                                    <p>5. 모바일 애플리케이션 이용 과정에서 자동으로 생성·수집되는 방식</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제7조 (개인정보의 이용)</h2>
                                <p className="text-gray-700 leading-relaxed mb-2">회사는 수집한 개인정보를 다음 각 호의 경우에 이용합니다.</p>
                                <div className="text-gray-700 leading-relaxed space-y-1">
                                    <p>1. 사용자가 등록한 키워드(관심사) 기반의 정보 모니터링 및 푸시 알림 전송 서비스 제공</p>
                                    <p>2. 익명 기기 식별자를 통한 사용자의 개인화된 설정 데이터 저장 및 동기화</p>
                                    <p>3. 인앱 결제 상품(프리미엄 기능)의 구매 유효성 검증 및 기능 해제</p>
                                    <p>4. 맞춤형 광고 전송 및 광고 노출 빈도 제어, 수익 정산 분석</p>
                                    <p>5. 서비스 품질 향상, 앱 오류 수정 및 사용자 인터페이스 개선을 위한 통계적 분석</p>
                                    <p>6. 법령 및 서비스 약관을 위반하는 이용에 대한 제재 및 부정 이용 방지</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제8조 (개인정보의 보유 및 이용기간)</h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 회사는 이용자의 개인정보에 대해 개인정보의 수집·이용 목적 달성을 위한 기간 동안 개인정보를 보유 및 이용합니다.</p>
                                    <p>2. 서비스는 익명 사용자 기반이므로, 사용자가 앱 내에서 명시적으로 &apos;데이터 초기화&apos; 또는 &apos;서비스 탈퇴&apos;를 요청하거나 1년 이상 미접속 시 시스템 정책에 따라 관련 데이터(관심사 키워드, FCM 토큰 등)를 파기할 수 있습니다.</p>
                                    <p>3. 전항에도 불구하고 회사는 내부 방침에 의해 서비스 부정이용기록은 부정 이용 방지를 위하여 최대 1년간 보관합니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제9조 (법령에 따른 개인정보의 보유 및 이용기간)</h2>
                                <p className="text-gray-700 leading-relaxed mb-2">회사는 관계법령에 따라 다음과 같이 개인정보를 보유 및 이용합니다.</p>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 전자상거래 등에서의 소비자보호에 관한 법률에 따른 보유정보 및 보유기간</p>
                                    <div className="ml-4 space-y-1">
                                        <p>가. 계약 또는 청약철회 등에 관한 기록: 5년</p>
                                        <p>나. 대금결제 및 재화 등의 공급에 관한 기록: 5년</p>
                                        <p>다. 소비자의 불만 또는 분쟁처리에 관한 기록: 3년</p>
                                        <p>라. 표시·광고에 관한 기록: 6개월</p>
                                    </div>
                                    <p>2. 통신비밀보호법에 따른 보유정보 및 보유기간</p>
                                    <div className="ml-4">
                                        <p>가. 앱 로그 기록 자료: 3개월</p>
                                    </div>
                                    <p>3. 전자금융거래법에 따른 보유정보 및 보유기간</p>
                                    <div className="ml-4">
                                        <p>가. 전자금융거래에 관한 기록: 5년</p>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제10조 (개인정보의 파기원칙)</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    회사는 원칙적으로 이용자의 개인정보 처리 목적의 달성, 보유·이용기간의 경과 등 개인정보가 필요하지 않을 경우에는 해당 정보를 지체 없이 파기합니다.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제11조 (개인정보 파기절차 및 방법)</h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 이용자가 입력한 정보는 개인정보 처리 목적이 달성된 후 내부 방침 및 관련 법령에 의한 보호 사유에 따라 일정 기간 저장된 후 파기됩니다.</p>
                                    <p>2. 회사는 파기 사유가 발생한 개인정보를 개인정보보호 책임자의 승인절차를 거쳐 파기합니다.</p>
                                    <p>3. 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제12조 (광고성 정보의 전송 조치)</h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 회사는 전자적 전송매체를 이용하여 영리목적의 광고성 정보를 전송하는 경우 이용자의 명시적인 사전동의를 받습니다.</p>
                                    <p>2. 회사는 수신자가 수신거부의사를 표시하거나 사전 동의를 철회한 경우에는 영리목적의 광고성 정보를 전송하지 않으며 수신거부 및 수신동의 철회에 대한 처리 결과를 알립니다.</p>
                                    <p>3. 서비스 내 광고(AdMob 배너, 보상형 광고 등)는 구글의 광고 정책에 따라 제공되며, 이용자는 기기 설정을 통해 맞춤형 광고를 거부할 수 있습니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제13조 (개인정보 조회 및 수집동의 철회)</h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 이용자는 언제든지 앱 내에서 자신이 등록한 관심사/키워드 정보를 조회, 수정, 삭제할 수 있습니다.</p>
                                    <p>2. 개인정보 수집 동의 철회 및 데이터 삭제를 요청하려는 경우 개인정보보호책임자 또는 담당자에게 전자우편으로 연락하시면 회사는 지체 없이 조치하겠습니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제14조 (이용자의 의무)</h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 이용자는 서비스 내에서 불법적이거나 타인의 권리를 침해하는 키워드, 음란·폭력적 내용, 타인의 개인정보가 포함된 내용 등을 등록하여서는 안 됩니다.</p>
                                    <p>2. 이용자의 부정확한 정보 입력으로 발생하는 문제의 책임은 이용자 자신에게 있습니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제15조 (회사의 개인정보 관리)</h2>
                                <p className="text-gray-700 leading-relaxed mb-2">회사는 이용자의 개인정보를 처리함에 있어 개인정보가 분실, 도난, 유출, 변조, 훼손 등이 되지 아니하도록 안전성을 확보하기 위하여 다음과 같은 보호대책을 강구하고 있습니다.</p>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 기술적 보호조치</p>
                                    <div className="ml-4 space-y-1">
                                        <p>가. 개인정보는 암호화하여 저장 및 관리됩니다.</p>
                                        <p>나. 해킹이나 바이러스 등에 의한 개인정보 유출·훼손을 막기 위해 침입차단시스템 및 침입탐지시스템을 운영합니다.</p>
                                        <p>다. 민감한 데이터는 암호화 통신(HTTPS/TLS)을 통하여 안전하게 전송됩니다.</p>
                                    </div>
                                    <p>2. 관리적 보호조치</p>
                                    <div className="ml-4 space-y-1">
                                        <p>가. 개인정보 관련 처리 담당자를 최소한으로 제한하며, 법령 및 내부방침 등의 준수를 강조하고 있습니다.</p>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제16조 (개인정보 유출 등에 대한 조치)</h2>
                                <p className="text-gray-700 leading-relaxed mb-2">회사는 개인정보의 분실·도난·유출 사실을 안 때에는 지체 없이 다음 각 호의 모든 사항을 해당 이용자에게 알리고 방송통신위원회 또는 한국인터넷진흥원에 신고합니다.</p>
                                <div className="text-gray-700 leading-relaxed space-y-1">
                                    <p>1. 유출 등이 된 개인정보 항목</p>
                                    <p>2. 유출 등이 발생한 시점</p>
                                    <p>3. 이용자가 취할 수 있는 조치</p>
                                    <p>4. 회사의 대응 조치</p>
                                    <p>5. 이용자가 상담 등을 접수할 수 있는 부서 및 연락처</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제17조 (개인정보의 국외 이전)</h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 회사는 마이핑 서비스 제공을 위해 Supabase 클라우드 서비스와 Firebase 서비스를 이용하며, 이에 따라 이용자의 개인정보가 국외로 이전될 수 있습니다.</p>
                                    <p>2. 개인정보 국외 이전 현황</p>
                                    <div className="ml-4 space-y-1">
                                        <p>가. 이전되는 개인정보 항목: 기기 식별자, 관심사/키워드 정보, 앱 사용 통계, 오류 로그, 푸시 알림 토큰, 인앱 결제 영수증 정보</p>
                                        <p>나. 개인정보가 이전되는 국가: 미국, 싱가포르 등 (Supabase, Firebase 서버 위치에 따름)</p>
                                        <p>다. 개인정보를 이전받는 자: Supabase Inc., Google LLC (Firebase, AdMob)</p>
                                        <p>라. 이전일시 및 방법: 서비스 이용 시 네트워크를 통한 전송</p>
                                        <p>마. 이전받는 자의 이용목적: 클라우드 인프라 제공, 데이터 저장, 앱 분석, 오류 추적, 푸시 알림 전송, 광고 제공</p>
                                        <p>바. 이전받는 자의 보유·이용 기간: 데이터 삭제 요청 시 또는 위탁계약 종료 시까지</p>
                                    </div>
                                    <p>3. 회사는 이용자의 개인정보에 관하여 개인정보보호법 등 관계 법규를 위반하는 사항을 내용으로 하는 국제계약을 체결하지 않습니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제18조 (모바일 애플리케이션의 접근 권한)</h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 선택적 접근 권한</p>
                                    <div className="ml-4 space-y-1">
                                        <p>가. 알림(Push Notification): 등록한 관심사 키워드에 관련된 새 정보 수신을 위한 선택적 권한</p>
                                    </div>
                                    <p>2. 선택적 접근 권한은 해당 기능 사용 시에만 권한을 허용받으며, 허용하지 않아도 해당 기능 외 서비스 이용이 가능합니다.</p>
                                    <p>3. 접근 권한의 변경은 다음의 방법으로 가능합니다.</p>
                                    <div className="ml-4 space-y-1">
                                        <p>가. Android: 설정 &gt; 애플리케이션 관리자 &gt; 마이핑(MYPING) &gt; 권한</p>
                                        <p>나. iOS: 설정 &gt; 마이핑(MYPING) &gt; 알림</p>
                                    </div>
                                    <p>4. 맞춤형 광고 거부 방법</p>
                                    <div className="ml-4 space-y-1">
                                        <p>가. Android: 설정 &gt; Google &gt; 광고 &gt; 광고 ID 삭제 (또는 맞춤설정 해제)</p>
                                        <p>나. iOS: 설정 &gt; 개인정보 보호 및 보안 &gt; 추적 &gt; &apos;앱이 추적을 요청하도록 허용&apos; 해제</p>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제19조 (서비스 제공을 위한 인프라)</h2>
                                <p className="text-gray-700 leading-relaxed mb-2">회사는 마이핑 서비스를 안정적으로 제공하기 위해 다음의 인프라를 사용합니다.</p>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="text-gray-700 space-y-1">
                                        <p>• <strong>Supabase Inc.</strong>: 클라우드 기반 데이터베이스 및 익명 사용자 식별/동기화 인프라 제공 (미국, 싱가포르 등)</p>
                                        <p>• <strong>Google LLC (Firebase)</strong>: 푸시 알림(FCM), 앱 사용 통계, 비정상 종료(Crashlytics) 인프라 제공</p>
                                        <p>• <strong>Google LLC (AdMob)</strong>: 배너, 보상형 등 맞춤 광고 송출을 위한 광고 식별자 처리</p>
                                        <p>• <strong>앱 배포</strong>: Google Play Store, Apple App Store</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed mt-2">회사는 상기 인프라 제공자가 개인정보보호 관련 국제 인증(SOC 2, ISO 27001 등)을 보유하고 있음을 확인하였으며, 안전한 개인정보 처리를 위해 지속적으로 관리·감독하고 있습니다.</p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제20조 (개인정보 처리업무의 위탁)</h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 회사는 서비스 향상을 위해서 이용자의 개인정보를 외부에 위탁하여 처리할 수 있습니다.</p>
                                    <div className="bg-gray-50 p-4 rounded-lg mt-2">
                                        <h3 className="font-semibold text-gray-800 mb-2">개인정보 처리 위탁 현황</h3>
                                        <div className="text-gray-700 space-y-1">
                                            <p>• 수탁업체: Supabase Inc., Google LLC (Firebase, AdMob)</p>
                                            <p>• 위탁업무 내용: 클라우드 서비스 제공, 데이터베이스 관리, 앱 분석, 오류 추적, 푸시 알림 전송, 광고 제공</p>
                                            <p>• 위탁하는 개인정보 항목: 기기 식별자, 관심사/키워드 정보, 앱 사용 통계, 오류 로그, 푸시 알림 토큰, 광고 식별자</p>
                                            <p>• 보유 및 이용기간: 데이터 삭제 요청 시 또는 위탁계약 종료 시까지</p>
                                        </div>
                                    </div>
                                    <p>2. 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체 없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제21조 (아동의 개인정보 보호)</h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 회사는 만 14세 미만 아동의 개인정보를 수집하지 않습니다.</p>
                                    <p>2. 만약 만 14세 미만 아동의 개인정보가 수집된 사실을 인지하게 되는 경우, 회사는 해당 정보를 즉시 삭제하는 등 필요한 조치를 취합니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제22조 (개인정보의 제3자 제공)</h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 회사는 원칙적으로 이용자의 개인정보를 제1조(목적)에서 명시한 범위 내에서 처리하며, 이용자의 사전 동의 없이는 본래의 범위를 초과하여 처리하거나 제3자에게 제공하지 않습니다.</p>
                                    <p>2. 다만, 다음의 경우에는 예외로 합니다.</p>
                                    <div className="ml-4 space-y-1">
                                        <p>가. 이용자가 사전에 제3자 제공에 동의한 경우</p>
                                        <p>나. 법령의 규정에 의거하거나, 수사·조사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관 및 감독당국의 요구가 있는 경우</p>
                                        <p>다. 통계작성, 학술연구나 시장조사를 위하여 특정 개인을 식별할 수 없는 형태로 제공하는 경우</p>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제23조 (회사의 개인정보 보호 책임자 지정)</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">회사는 이용자의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 개인정보 보호 책임자를 지정하고 있습니다.</p>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-800 mb-2">개인정보보호책임자</h3>
                                    <div className="text-gray-700 space-y-1">
                                        <p>• 성명: 최원영</p>
                                        <p>• 직책: CTO</p>
                                        <p>• 전화번호: 010-2029-2579</p>
                                        <p>• 이메일: dev@aura-postproduction.com</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed mt-4">이용자는 서비스를 이용하시면서 발생한 모든 개인정보보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호 책임자에게 문의하실 수 있습니다. 회사는 이용자의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.</p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제24조 (권익침해에 대한 구제방법)</h2>
                                <p className="text-gray-700 leading-relaxed mb-2">1. 정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다.</p>
                                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                    <div className="text-gray-700 space-y-1">
                                        <p>• 개인정보분쟁조정위원회: (국번없이) 1833-6972 (www.kopico.go.kr)</p>
                                        <p>• 개인정보침해신고센터: (국번없이) 118 (privacy.kisa.or.kr)</p>
                                        <p>• 대검찰청: (국번없이) 1301 (www.spo.go.kr)</p>
                                        <p>• 경찰청: (국번없이) 182 (ecrm.cyber.go.kr)</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed">2. 개인정보 보호법 제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.</p>
                                <div className="ml-4 mt-1">
                                    <p className="text-gray-700">• 중앙행정심판위원회: (국번없이) 110 (www.simpan.go.kr)</p>
                                </div>
                            </section>

                            <div className="bg-cyan-50 border-l-4 border-cyan-400 p-4 mb-8">
                                <h3 className="font-semibold text-cyan-800 mb-2">마이핑(MYPING) 이용자 여러분께</h3>
                                <p className="text-cyan-700 text-sm">
                                    저희 마이핑은 여러분의 불필요한 개인 식별 정보를 일절 수집하지 않는 익명 기반 서비스 운영을 원칙으로 삼고 있습니다. 오로지 사용자가 원하는 키워드를 찾아 정확하게 알려드리는 기능에만 집중하겠습니다.
                                </p>
                                <p className="text-cyan-700 text-sm mt-2 font-semibold">감사합니다.</p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <p className="text-sm text-gray-500 text-center">부칙: 본 방침은 2026년 3월 23일부터 시행됩니다.</p>
                                <p className="text-sm text-gray-500 text-center mt-2">본 개인정보처리방침은 관련 법령, 지침 및 내부 운영정책의 변경에 따라 변경될 수 있습니다.</p>
                                <p className="text-sm text-gray-500 text-center mt-2">© 2026 마이핑(MYPING). All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}