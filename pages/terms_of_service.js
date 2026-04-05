import Layout from "../components/layout";
import Head from "next/head";

export default function Terms() {
    return (
        <Layout>
            <Head>
                <title>이용약관 - 마이핑(MYPING)</title>
                <meta charSet="utf-8" />
                <meta name="description" content="마이핑(MYPING) 이용약관" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                            이용약관
                        </h1>
                        
                        <div className="prose prose-lg max-w-none">
                            <p className="text-sm text-gray-600 mb-8 text-right">
                                시행일자: 2026년 4월 6일
                            </p>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제1조 (목적)
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    본 이용약관(이하 &apos;약관&apos;)은 마이핑(MYPING)(이하 &apos;회사&apos;)가 제공하는 마이핑(MYPING) 모바일 애플리케이션 및 관련 서비스(이하 &apos;서비스&apos;)를 이용하는 이용자(이하 &apos;이용자&apos;)와 회사 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제2조 (용어의 정의)
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                                </p>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="text-gray-700 space-y-2">
                                        <p>1. <strong>&apos;서비스&apos;</strong>란 회사가 제공하는 마이핑(MYPING) 모바일 애플리케이션과 이에 부속된 모든 기능으로, 사용자가 등록한 키워드 기반 실시간 정보 모니터링, AI 브리핑 알림, 트렌드 검색 등을 포함합니다.</p>
                                        <p>2. <strong>&apos;이용자&apos;</strong>란 본 약관에 동의하고 회사가 제공하는 서비스를 이용하는 자를 말합니다. 익명 기반으로 서비스를 이용하거나 제휴사(카카오, 애플 등)의 소셜 계정을 연동하여 모든 플랫폼 기기에서 제한 없이 서비스를 이용할 수 있습니다.</p>
                                        <p>3. <strong>&apos;기기 식별자&apos;</strong>란 이용자의 스마트기기를 식별하기 위해 앱 설치 시 자동으로 생성되는 임의의 익명 UUID를 말하며, 이는 이용자 개인을 특정하거나 추적하지 않습니다.</p>
                                        <p>4. <strong>&apos;관심사(키워드)&apos;</strong>란 이용자가 앱 내에서 직접 등록하는 정보 모니터링 대상이 되는 단어 또는 문구를 말합니다.</p>
                                        <p>5. <strong>&apos;프리미엄 기능&apos;</strong>이란 무료로 제공되는 기본 기능 외에, 인앱 결제를 통해 이용 가능한 추가 기능(알림 횟수 증가, 키워드 슬롯 추가 등)을 말합니다.</p>
                                        <p>6. <strong>&apos;콘텐츠&apos;</strong>란 AI를 통해 생성되거나 외부 뉴스·정보 소스에서 가져온 브리핑, 요약, 기사 링크 등 서비스 내에서 제공되는 모든 정보를 말합니다.</p>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제3조 (약관의 게시 및 개정)
                                </h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 회사는 본 약관의 내용을 이용자가 확인할 수 있도록 앱 내 설정 화면 및 회사 웹사이트에 게시합니다.</p>
                                    <p>2. 회사는 필요한 경우 관련 법령을 위반하지 않는 범위 내에서 본 약관을 개정할 수 있습니다.</p>
                                    <p>3. 약관 변경 시, 회사는 시행일로부터 최소 7일 전에 앱 내 공지사항 또는 푸시 알림을 통하여 이용자에게 고지합니다. 이용자의 권리 또는 의무에 중대한 변경이 있을 경우에는 최소 30일 전에 고지합니다.</p>
                                    <p>4. 이용자는 개정된 약관에 동의하지 않을 경우 서비스 이용을 중단하거나 앱을 삭제할 수 있습니다. 고지 이후에도 서비스를 계속 이용하는 경우 개정 약관에 동의한 것으로 간주합니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제4조 (서비스의 제공)
                                </h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 회사는 다음의 서비스를 제공합니다.</p>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <div className="text-gray-700 space-y-1">
                                            <p>가. <strong>키워드 등록 및 관리</strong>: 이용자가 원하는 관심 키워드를 등록하고 관리하는 기능</p>
                                            <p>나. <strong>AI 브리핑 알림</strong>: 등록된 키워드와 관련된 뉴스 및 정보를 AI가 요약하여 설정된 시간에 푸시 알림으로 전달하는 기능</p>
                                            <p>다. <strong>Today 탭</strong>: 당일 수집된 관심사별 최신 브리핑 카드를 확인하는 기능</p>
                                            <p>라. <strong>검색 탭</strong>: 트렌드 키워드 탐색 및 새로운 관심사를 찾아 추가하는 기능</p>
                                            <p>마. <strong>프리미엄 기능</strong>: 인앱 결제를 통해 제공되는 추가 기능(알림 슬롯 확장 등)</p>
                                        </div>
                                    </div>
                                    <p>2. 회사는 운영상, 기술상의 필요에 따라 제공하는 서비스를 변경·추가·중단할 수 있으며, 이 경우 제3조 3항의 방법으로 이용자에게 고지합니다.</p>
                                    <p>3. 서비스는 연중무휴 24시간 제공하는 것을 원칙으로 하나, 시스템 점검, 업데이트, 천재지변, 서버 장애 등의 불가피한 사유로 서비스가 일시 중단될 수 있습니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제5조 (서비스 이용 개시 및 동의)
                                </h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 마이핑(MYPING) 서비스는 기본적으로 익명 환경을 제공하여 앱을 설치하고 실행하는 것으로 이용이 시작됩니다.</p>
                                    <p>2. 이용자는 기기 분실, 재설치 등 기기 변경 시 데이터를 안전하게 복구하고 유지하기 위해 회사가 제공하는 소셜 로그인(카카오, 애플) 기능을 선택적으로 활용하여 계정을 연동할 수 있습니다.</p>
                                    <p>3. 이용자는 앱을 설치하고 최초 실행(또는 로그인)함으로써 본 이용약관 및 개인정보처리방침에 동의한 것으로 간주됩니다.</p>
                                    <p>4. 만 14세 미만의 이용자는 법정대리인의 동의를 받은 경우에 한해 서비스를 이용할 수 있습니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제6조 (유료 서비스 및 결제)
                                </h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 회사는 기본 서비스를 무료로 제공하며, 일부 프리미엄 기능(베이직, 프로 요금제 등)에 대해서는 구독형 인앱 결제(In-App Purchase) 방식으로 유료 서비스를 제공합니다.</p>
                                    <p>2. 유료 서비스의 결제는 이용자가 사용하는 기기의 앱 마켓(Google Play Store, Apple App Store)의 결제 시스템을 통해 처리됩니다.</p>
                                    <p>3. <strong>자동 갱신 및 해지:</strong> 월간 및 연간 구독 상품은 만료 24시간 전까지 구독을 취소하지 않으면 자동으로 다음 결제 주기에 요금이 갱신되어 청구됩니다. 유저는 자신의 기기 계정 설정(구글 플레이 스토어, 애플 앱스토어의 구독 메뉴)에서 언제든지 직접 구독을 취소(자동 갱신 해지)할 수 있습니다.</p>
                                    <p>4. <strong>환불 정책:</strong> 결제 취소 및 환불 처리는 각 앱 마켓의 운영 정책에 전적으로 구속됩니다. 환불을 원할 경우 사용자는 결제를 진행한 스토어의 고객센터(Apple 문제 신고 웹사이트 또는 Google Play 고객센터)를 통해 직접 환불을 신청해야 합니다. 회사는 스토어의 결제 인프라를 사용하므로 직접 임의 환불을 실행할 수 있는 물리적 권한과 방법이 없습니다.</p>
                                    <p>5. 회사는 유료 서비스의 가격 및 내용을 변경할 경우 사전에 앱을 통하여 이용자에게 고지합니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제7조 (광고 서비스)
                                </h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 회사는 서비스 운영을 위해 Google AdMob을 통한 광고를 제공합니다. 광고는 배너, 전면, 보상형 광고 등의 형태로 노출될 수 있습니다.</p>
                                    <p>2. 이용자는 기기의 운영체제 설정을 통해 맞춤형 광고 수신을 거부할 수 있습니다.</p>
                                    <p>3. 프리미엄 기능을 구매한 이용자에게는 광고 노출이 제한될 수 있습니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제8조 (이용자의 의무)
                                </h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>이용자는 다음 각 호의 행위를 하여서는 안 됩니다.</p>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <div className="text-gray-700 space-y-1">
                                            <p>1. 회사나 제3자의 저작권, 상표권 등 지식재산권을 침해하는 행위</p>
                                            <p>2. 서비스를 이용하여 불법적인 활동을 위한 키워드를 등록하거나, 개인 또는 단체를 부당하게 추적·감시하는 행위</p>
                                            <p>3. 서비스 시스템에 과부하를 유발하거나, 정상적인 서비스 운영을 방해하는 행위 (예: 자동화 도구를 이용한 비정상적인 API 호출 등)</p>
                                            <p>4. 서비스에서 제공하는 콘텐츠를 무단으로 복제, 배포, 판매, 상업적으로 이용하는 행위</p>
                                            <p>5. 관련 법령, 본 약관, 미풍양속에 위반되는 행위 일체</p>
                                        </div>
                                    </div>
                                    <p>회사는 위 각 호의 행위가 확인된 경우 해당 이용자에 대해 서비스 이용을 제한하거나 법적 조치를 취할 수 있습니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제9조 (콘텐츠에 관한 책임)
                                </h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 마이핑이 제공하는 AI 브리핑, 뉴스 요약 등의 콘텐츠는 외부 정보 소스를 기반으로 AI가 생성한 정보로, <strong>투자, 법률, 의료 등 전문적인 조언이나 사실의 보증이 아닙니다.</strong></p>
                                    <p>2. 회사는 AI가 생성한 콘텐츠의 정확성, 완전성, 적시성을 보증하지 않으며, 이용자는 서비스에서 제공하는 정보를 참고용으로만 활용해야 합니다.</p>
                                    <p>3. 콘텐츠를 바탕으로 한 이용자의 의사결정 및 그로 인한 결과에 대해 회사는 책임을 지지 않습니다.</p>
                                    <p>4. 서비스에 포함된 외부 링크(뉴스 출처 등) 내용에 대한 책임은 해당 정보 제공자에게 있으며, 회사는 이에 대한 책임을 부담하지 않습니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제10조 (회사의 의무)
                                </h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 회사는 관련 법령, 본 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며, 안정적인 서비스 제공을 위하여 최선을 다합니다.</p>
                                    <p>2. 회사는 이용자의 익명성을 보호하며, 서비스를 통해 수집된 데이터를 본래의 목적 범위 내에서만 사용합니다.</p>
                                    <p>3. 회사는 서비스 이용과 관련한 이용자의 문의나 불만 사항에 대해 신속하게 처리하기 위하여 노력합니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제11조 (서비스 이용 제한 및 중지)
                                </h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 이용자가 제8조(이용자의 의무)를 위반한 경우, 회사는 사전 통지 없이 해당 기기의 서비스 이용을 제한하거나 중지할 수 있습니다.</p>
                                    <p>2. 회사는 다음 각 호의 경우 서비스의 전부 또는 일부를 제한하거나 중지할 수 있습니다.</p>
                                    <div className="ml-4 space-y-1">
                                        <p>가. 서비스용 설비의 보수 등 공사로 인한 부득이한 경우</p>
                                        <p>나. 전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지했을 경우</p>
                                        <p>다. 천재지변, 국가비상사태, 정전 등 불가항력적 사유가 있는 경우</p>
                                        <p>라. 기타 회사가 서비스를 제공할 수 없는 사유가 발생한 경우</p>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제12조 (데이터 초기화 및 서비스 탈퇴)
                                </h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 이용자는 앱 내 설정 화면에서 언제든지 자신의 관심사 키워드 및 서비스 데이터를 초기화하거나 서비스 이용을 종료할 수 있습니다.</p>
                                    <p>2. 데이터를 초기화하거나 앱을 삭제하면 이용자의 기기와 연결된 서버 상의 관심사 데이터, FCM 토큰 등이 삭제됩니다.</p>
                                    <p>3. 삭제된 데이터는 원칙적으로 복구되지 않으며, 인앱 결제로 구매한 프리미엄 기능은 재설치 후 동일 기기에서 구매 복원을 통해 이용 가능합니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제13조 (지식재산권)
                                </h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 회사가 제공하는 서비스(앱 디자인, UI/UX, 브랜드)와 그 내에서 생성된 AI 콘텐츠에 대한 저작권 및 지식재산권은 회사에 귀속됩니다.</p>
                                    <p>2. 이용자는 회사의 명시적인 허락 없이 서비스의 디자인, 로고, 콘텐츠를 복제, 배포, 상업적으로 이용할 수 없습니다.</p>
                                    <p>3. 이용자가 앱 내에서 직접 등록한 키워드 정보에 대한 권리는 이용자에게 있습니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제14조 (면책 조항)
                                </h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 회사는 천재지변, 불가항력, 이용자의 귀책사유로 인한 서비스 이용 장애에 대하여 책임을 지지 않습니다.</p>
                                    <p>2. 회사는 이용자의 기기 환경, 통신 연결 상태 등 이용자의 귀책사유로 인한 서비스 이용 장애에 대해 책임을 지지 않습니다.</p>
                                    <p>3. 회사는 서비스에서 제공하는 AI 브리핑 콘텐츠의 정확성이나 신뢰성에 대해 보증하지 않습니다.</p>
                                    <p>4. 회사는 이용자 간 또는 이용자와 제3자 간의 분쟁에 대해 개입할 의무가 없으며 이로 인한 손해를 배상할 책임도 없습니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제15조 (분쟁해결 및 관할)
                                </h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 서비스 이용에 관한 분쟁이 발생한 경우, 회사와 이용자는 상호 협의하여 해결하도록 노력합니다.</p>
                                    <p>2. 협의가 이루어지지 않을 경우, 대한민국 법률을 준거법으로 하며, 분쟁 관할 법원은 민사소송법의 규정에 따른 관할 법원으로 합니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제16조 (문의처)
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    본 약관 또는 서비스 이용에 관한 문의사항은 아래 연락처로 문의해주시기 바랍니다.
                                </p>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="text-gray-700 space-y-1">
                                        <p>• 서비스명: 마이핑(MYPING)</p>
                                        <p>• 담당부서: 마이핑(MYPING) 개발팀</p>
                                        <p>• 이메일 문의처: dev@aura-postproduction.com</p>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    부칙
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    본 약관은 2026년 4월 6일부터 시행됩니다.
                                </p>
                            </section>

                            <div className="bg-cyan-50 border-l-4 border-cyan-400 p-4 mb-8">
                                <h3 className="font-semibold text-cyan-800 mb-2">마이핑(MYPING) 이용자 여러분께</h3>
                                <p className="text-cyan-700 text-sm">
                                    마이핑은 이용자 여러분이 원하는 정보를 빠르고 편리하게 받아볼 수 있도록 최선을 다하겠습니다. 서비스 이용 중 불편한 점이나 개선 사항이 있다면 언제든지 문의해 주세요.
                                </p>
                                <p className="text-cyan-700 text-sm mt-2 font-semibold">
                                    감사합니다.
                                </p>
                            </div>

                            <div className="mt-12 pt-8 border-t border-gray-200">
                                <p className="text-sm text-gray-500 text-center">
                                    본 이용약관은 관련 법령, 지침 및 내부 운영정책의 변경에 따라 수정될 수 있습니다.
                                </p>
                                <p className="text-sm text-gray-500 text-center mt-2">
                                    © 2026 마이핑(MYPING). All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
