import Layout from "../components/layout";
import Head from "next/head";

export default function Privacy() {
    return (
        <Layout>
            <Head>
                <title>개인정보처리방침 - 아우라포스트프로덕션</title>
                <meta name="description" content="아우라포스트프로덕션 개인정보처리방침" />
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
                                시행일자: 2025년 10월 25일
                            </p>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제1조 (목적)
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    아우라포스트프로덕션 주식회사(이하 &apos;회사&apos;라고 함)는 회사가 제공하는 마음장부 서비스(이하 &apos;회사 서비스&apos; 또는 &apos;서비스&apos;)를 이용하는 개인(이하 &apos;이용자&apos; 또는 &apos;개인&apos;)의 정보(이하 &apos;개인정보&apos;)를 보호하기 위해, 개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 &apos;정보통신망법&apos;) 등 관련 법령을 준수하고, 서비스 이용자의 개인정보 보호 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침(이하 &apos;본 방침&apos;)을 수립합니다.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제2조 (개인정보 처리의 원칙)
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    개인정보 관련 법령 및 본 방침에 따라 회사는 이용자의 개인정보를 수집할 수 있으며 수집된 개인정보는 개인의 동의가 있는 경우에 한해 제3자에게 제공될 수 있습니다. 단, 법령의 규정 등에 의해 적법하게 강제되는 경우 회사는 수집한 이용자의 개인정보를 사전에 개인의 동의 없이 제3자에게 제공할 수도 있습니다.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제3조 (본 방침의 공개)
                                </h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 회사는 이용자가 언제든지 쉽게 본 방침을 확인할 수 있도록 회사 홈페이지 첫 화면 또는 첫 화면과의 연결 화면, 모바일 애플리케이션 내를 통해 본 방침을 공개하고 있습니다.</p>
                                    <p>2. 회사는 제1항에 따라 본 방침을 공개하는 경우 글자 크기, 색상 등을 활용하여 이용자가 본 방침을 쉽게 확인할 수 있도록 합니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제4조 (본 방침의 변경)
                                </h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 본 방침은 개인정보 관련 법령, 지침, 고시 또는 정부나 회사 서비스의 정책이나 내용의 변경에 따라 개정될 수 있습니다.</p>
                                    <p>2. 회사는 제1항에 따라 본 방침을 개정하는 경우 다음 각 호 하나 이상의 방법으로 공지합니다.</p>
                                    <div className="ml-4 space-y-1">
                                        <p>가. 회사가 운영하는 인터넷 홈페이지의 첫 화면의 공지사항란 또는 별도의 창을 통하여 공지하는 방법</p>
                                        <p>나. 모바일 애플리케이션의 공지사항 또는 푸시알림을 통하여 공지하는 방법</p>
                                        <p>다. 서면·모사전송·전자우편 또는 이와 비슷한 방법으로 이용자에게 공지하는 방법</p>
                                    </div>
                                    <p>3. 회사는 제2항의 공지는 본 방침 개정의 시행일로부터 최소 7일 이전에 공지합니다. 다만, 이용자 권리의 중요한 변경이 있을 경우에는 최소 30일 전에 공지합니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제5조 (개인정보의 수집 항목)
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    회사는 마음장부 서비스 제공을 위하여 다음과 같은 개인정보를 수집합니다.
                                </p>
                                
                                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                    <h3 className="font-semibold text-gray-800 mb-2">1. 필수 수집 정보</h3>
                                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                                        <li>소셜로그인 프로바이더 고유 식별자(Provider ID)</li>
                                        <li>디스플레이네임(카카오 로그인 시)</li>
                                        <li>성별</li>
                                        <li>태어난 연도</li>
                                        <li>닉네임(서비스 내 사용자 식별용)</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                    <h3 className="font-semibold text-gray-800 mb-2">2. 서비스 이용 과정에서 생성·수집되는 정보</h3>
                                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                                        <li>경조사 기록 정보(상대방 이름, 장소, 메모, 금액, 날짜, 참석여부 등)</li>
                                        <li>사용자 정의 카테고리 정보(경조사 유형, 관계 카테고리)</li>
                                        <li>서비스 이용 기록, 접속 로그, 접속 IP 정보</li>
                                        <li>기기 정보(OS 버전, 기기 모델명, 기기 고유 식별자)</li>
                                        <li>앱 사용 통계 및 성능 데이터</li>
                                        <li>푸시 알림 토큰(FCM 토큰)</li>
                                        <li>PIN 보안 정보(암호화된 4자리 숫자)</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-800 mb-2">3. 광고 관련 정보</h3>
                                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                                        <li>Google AdMob 광고 식별자</li>
                                        <li>광고 시청 기록 및 빈도</li>
                                    </ul>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제6조 (개인정보 수집 방법)
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    회사는 다음과 같은 방법으로 이용자의 개인정보를 수집합니다.
                                </p>
                                <div className="text-gray-700 leading-relaxed space-y-1">
                                    <p>1. 이용자가 회사의 모바일 애플리케이션에 자신의 개인정보를 입력하는 방식</p>
                                    <p>2. 소셜로그인 서비스(카카오, 애플 등)를 통한 연동 과정에서 해당 서비스로부터 제공받는 방식</p>
                                    <p>3. Supabase Auth 인증 시스템을 통한 회원가입 및 로그인 과정에서 수집하는 방식</p>
                                    <p>4. Firebase 서비스를 통한 자동 수집 방식</p>
                                    <p>5. 모바일 애플리케이션 이용 과정에서 자동으로 생성·수집되는 방식</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제7조 (개인정보의 이용)
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    회사는 개인정보를 다음 각 호의 경우에 이용합니다.
                                </p>
                                <div className="text-gray-700 leading-relaxed space-y-1">
                                    <p>1. 회원 가입 및 본인 확인, 회원 식별 및 관리</p>
                                    <p>2. 경조사 기록 관리 서비스 제공</p>
                                    <p>3. 서비스 이용 통계 분석 및 맞춤형 서비스 제공</p>
                                    <p>4. 공지사항의 전달 등 회사운영에 필요한 경우</p>
                                    <p>5. 이용문의에 대한 회신, 불만의 처리 등 이용자에 대한 서비스 개선을 위한 경우</p>
                                    <p>6. 법령 및 회사약관을 위반하는 회원에 대한 이용제한 조치, 부정 이용행위를 포함하여 서비스의 원활한 운영에 지장을 주는 행위에 대한 방지 및 제재를 위한 경우</p>
                                    <p>7. 신규 서비스 개발 및 마케팅·광고 활용을 위한 경우</p>
                                    <p>8. 푸시 알림 전송 및 앱 잠금 기능 제공</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제8조 (개인정보의 보유 및 이용기간)
                                </h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 회사는 이용자의 개인정보에 대해 개인정보의 수집·이용 목적 달성을 위한 기간 동안 개인정보를 보유 및 이용합니다.</p>
                                    <p>2. 전항에도 불구하고 회사는 내부 방침에 의해 서비스 부정이용기록은 부정 가입 및 이용 방지를 위하여 회원 탈퇴 시점으로부터 최대 1년간 보관합니다.</p>
                                    <p>3. 회원 탈퇴 시 이용자의 개인정보는 지체 없이 파기합니다. 단, 관계 법령에 따라 보존할 필요가 있는 경우 해당 법령에서 정한 기간 동안 보관합니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제9조 (법령에 따른 개인정보의 보유 및 이용기간)
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    회사는 관계법령에 따라 다음과 같이 개인정보를 보유 및 이용합니다.
                                </p>
                                
                                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                    <h3 className="font-semibold text-gray-800 mb-2">1. 전자상거래 등에서의 소비자보호에 관한 법률에 따른 보유정보 및 보유기간</h3>
                                    <div className="text-gray-700 space-y-1">
                                        <p>가. 계약 또는 청약철회 등에 관한 기록: 5년</p>
                                        <p>나. 대금결제 및 재화 등의 공급에 관한 기록: 5년</p>
                                        <p>다. 소비자의 불만 또는 분쟁처리에 관한 기록: 3년</p>
                                        <p>라. 표시·광고에 관한 기록: 6개월</p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                    <h3 className="font-semibold text-gray-800 mb-2">2. 통신비밀보호법에 따른 보유정보 및 보유기간</h3>
                                    <div className="text-gray-700 space-y-1">
                                        <p>가. 웹사이트 및 앱 로그 기록 자료: 3개월</p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-800 mb-2">3. 전자금융거래법에 따른 보유정보 및 보유기간</h3>
                                    <div className="text-gray-700 space-y-1">
                                        <p>가. 전자금융거래에 관한 기록: 5년</p>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제10조 (개인정보의 파기원칙)
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    회사는 원칙적으로 이용자의 개인정보 처리 목적의 달성, 보유·이용기간의 경과 등 개인정보가 필요하지 않을 경우에는 해당 정보를 지체 없이 파기합니다.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제11조 (개인정보 파기절차)
                                </h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 이용자가 회원가입 등을 위해 입력한 정보는 개인정보 처리 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기되어집니다.</p>
                                    <p>2. 회사는 파기 사유가 발생한 개인정보를 개인정보보호 책임자의 승인절차를 거쳐 파기합니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제12조 (개인정보 파기방법)
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    회사는 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제하며, 종이로 출력된 개인정보는 분쇄기로 분쇄하거나 소각 등을 통하여 파기합니다.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제13조 (광고성 정보의 전송 조치)
                                </h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 회사는 전자적 전송매체를 이용하여 영리목적의 광고성 정보를 전송하는 경우 이용자의 명시적인 사전동의를 받습니다. 다만, 다음 각호 어느 하나에 해당하는 경우에는 사전 동의를 받지 않습니다.</p>
                                    <div className="ml-4 space-y-1">
                                        <p>가. 회사가 재화 등의 거래관계를 통하여 수신자로부터 직접 연락처를 수집한 경우, 거래가 종료된 날로부터 6개월 이내에 회사가 처리하고 수신자와 거래한 것과 동종의 재화 등에 대한 영리목적의 광고성 정보를 전송하려는 경우</p>
                                        <p>나. 「방문판매 등에 관한 법률」에 따른 전화권유판매자가 육성으로 수신자에게 개인정보의 수집출처를 고지하고 전화권유를 하는 경우</p>
                                    </div>
                                    <p>2. 회사는 전항에도 불구하고 수신자가 수신거부의사를 표시하거나 사전 동의를 철회한 경우에는 영리목적의 광고성 정보를 전송하지 않으며 수신거부 및 수신동의 철회에 대한 처리 결과를 알립니다.</p>
                                    <p>3. 회사는 오후 9시부터 그다음 날 오전 8시까지의 시간에 전자적 전송매체를 이용하여 영리목적의 광고성 정보를 전송하는 경우에는 제1항에도 불구하고 그 수신자로부터 별도의 사전 동의를 받습니다.</p>
                                    <p>4. 회사는 전자적 전송매체를 이용하여 영리목적의 광고성 정보를 전송하는 경우 다음의 사항 등을 광고성 정보에 구체적으로 밝힙니다.</p>
                                    <div className="ml-4 space-y-1">
                                        <p>가. 회사명 및 연락처</p>
                                        <p>나. 수신 거부 또는 수신 동의의 철회 의사표시에 관한 사항의 표시</p>
                                    </div>
                                    <p>5. 회사는 전자적 전송매체를 이용하여 영리목적의 광고성 정보를 전송하는 경우 다음 각 호의 어느 하나에 해당하는 조치를 하지 않습니다.</p>
                                    <div className="ml-4 space-y-1">
                                        <p>가. 광고성 정보 수신자의 수신거부 또는 수신동의의 철회를 회피·방해하는 조치</p>
                                        <p>나. 숫자·부호 또는 문자를 조합하여 전화번호·전자우편주소 등 수신자의 연락처를 자동으로 만들어내는 조치</p>
                                        <p>다. 영리목적의 광고성 정보를 전송할 목적으로 전화번호 또는 전자우편주소를 자동으로 등록하는 조치</p>
                                        <p>라. 광고성 정보 전송자의 신원이나 광고 전송 출처를 감추기 위한 각종 조치</p>
                                        <p>마. 영리목적의 광고성 정보를 전송할 목적으로 수신자를 기망하여 회신을 유도하는 각종 조치</p>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제14조 (개인정보 조회 및 수집동의 철회)
                                </h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 이용자 및 법정 대리인은 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 개인정보수집 동의 철회를 요청할 수 있습니다.</p>
                                    <p>2. 이용자 및 법정 대리인은 자신의 가입정보 수집 등에 대한 동의를 철회하기 위해서는 개인정보보호책임자 또는 담당자에게 서면, 전화 또는 전자우편주소로 연락하시면 회사는 지체 없이 조치하겠습니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제15조 (개인정보 정보변경 등)
                                </h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 이용자는 회사에게 전조의 방법을 통해 개인정보의 오류에 대한 정정을 요청할 수 있습니다.</p>
                                    <p>2. 회사는 전항의 경우에 개인정보의 정정을 완료하기 전까지 개인정보를 이용 또는 제공하지 않으며 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제16조 (이용자의 의무)
                                </h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 이용자는 자신의 개인정보를 최신의 상태로 유지해야 하며, 이용자의 부정확한 정보 입력으로 발생하는 문제의 책임은 이용자 자신에게 있습니다.</p>
                                    <p>2. 타인의 개인정보를 도용한 회원가입의 경우 이용자 자격을 상실하거나 관련 개인정보보호 법령에 의해 처벌받을 수 있습니다.</p>
                                    <p>3. 이용자는 이메일 주소, 비밀번호 등에 대한 보안을 유지할 책임이 있으며 제3자에게 이를 양도하거나 대여할 수 없습니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제17조 (회사의 개인정보 관리)
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    회사는 이용자의 개인정보를 처리함에 있어 개인정보가 분실, 도난, 유출, 변조, 훼손 등이 되지 아니하도록 안전성을 확보하기 위하여 다음과 같은 기술적·관리적 보호대책을 강구하고 있습니다.
                                </p>
                                
                                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                    <h3 className="font-semibold text-gray-800 mb-2">1. 기술적 보호조치</h3>
                                    <div className="text-gray-700 space-y-1">
                                        <p>가. 개인정보는 비밀번호에 의해 보호되며, 중요한 데이터는 암호화하여 저장 및 관리됩니다.</p>
                                        <p>나. 경조사 기록 중 상대방 이름, 장소, 메모, 거래 설명은 AES-256 암호화하여 저장·관리되며, 권한이 있는 본인만 복호화하여 확인할 수 있습니다.</p>
                                        <p>다. 사용자별 고유 암호화 키를 사용하여 데이터를 보호합니다.</p>
                                        <p>라. PIN 보안 정보는 암호화되어 로컬 저장소에 안전하게 보관됩니다.</p>
                                        <p>마. 해킹이나 컴퓨터 바이러스 등에 의해 개인정보가 유출되거나 훼손되는 것을 막기 위해 외부로부터 접근이 통제된 구역에 시스템을 설치합니다.</p>
                                        <p>바. 침입차단시스템 및 침입탐지시스템 등을 이용하여 보안에 만전을 기하고 있습니다.</p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-800 mb-2">2. 관리적 보호조치</h3>
                                    <div className="text-gray-700 space-y-1">
                                        <p>가. 개인정보 관련 처리 담당자를 최소한으로 제한하며, 개인정보 처리자에 대한 교육 등 관리적 조치를 통해 법령 및 내부방침 등의 준수를 강조하고 있습니다.</p>
                                        <p>나. 개인정보를 처리하는 직원을 지정하고 담당자에 한정시켜 최소화하여 개인정보를 관리합니다.</p>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제18조 (삭제된 정보의 처리)
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    회사는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된 개인정보는 회사가 수집하는 &quot;개인정보의 보유 및 이용기간&quot;에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제19조 (비밀번호의 암호화)
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    이용자의 비밀번호는 일방향 암호화하여 저장 및 관리되고 있으며, 개인정보의 확인, 변경은 비밀번호를 알고 있는 본인에 의해서만 가능합니다.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제20조 (해킹 등에 대비한 대책)
                                </h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 회사는 해킹, 컴퓨터 바이러스 등 정보통신망 침입에 의해 이용자의 개인정보가 유출되거나 훼손되는 것을 막기 위해 최선을 다하고 있습니다.</p>
                                    <p>2. 회사는 최신 백신프로그램을 이용하여 이용자들의 개인정보나 자료가 유출 또는 손상되지 않도록 방지하고 있습니다.</p>
                                    <p>3. 회사는 만일의 사태에 대비하여 침입차단 시스템을 이용하여 보안에 최선을 다하고 있습니다.</p>
                                    <p>4. 회사는 민감한 개인정보를 암호화 통신 등을 통하여 네트워크상에서 개인정보를 안전하게 전송할 수 있도록 하고 있습니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제21조 (개인정보 처리 최소화 및 교육)
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    회사는 개인정보 관련 처리 담당자를 최소한으로 제한하며, 개인정보 처리자에 대한 교육 등 관리적 조치를 통해 법령 및 내부방침 등의 준수를 강조하고 있습니다.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제22조 (개인정보 유출 등에 대한 조치)
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    회사는 개인정보의 분실·도난·유출(이하 &quot;유출 등&quot;이라 한다) 사실을 안 때에는 지체 없이 다음 각 호의 모든 사항을 해당 이용자에게 알리고 방송통신위원회 또는 한국인터넷진흥원에 신고합니다.
                                </p>
                                <div className="text-gray-700 leading-relaxed space-y-1">
                                    <p>1. 유출 등이 된 개인정보 항목</p>
                                    <p>2. 유출 등이 발생한 시점</p>
                                    <p>3. 이용자가 취할 수 있는 조치</p>
                                    <p>4. 정보통신서비스 제공자 등의 대응 조치</p>
                                    <p>5. 이용자가 상담 등을 접수할 수 있는 부서 및 연락처</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제23조 (개인정보 유출 등에 대한 조치의 예외)
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    회사는 전조에도 불구하고 이용자의 연락처를 알 수 없는 등 정당한 사유가 있는 경우에는 회사의 홈페이지 또는 모바일 애플리케이션에 30일 이상 게시하는 방법으로 전조의 통지를 갈음하는 조치를 취할 수 있습니다.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제24조 (개인정보의 국외 이전)
                                </h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 회사는 마음장부 서비스 제공을 위해 Supabase 클라우드 서비스와 Firebase 서비스를 이용하며, 이에 따라 이용자의 개인정보가 국외로 이전될 수 있습니다.</p>
                                    
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h3 className="font-semibold text-gray-800 mb-2">2. 개인정보 국외 이전 현황</h3>
                                        <div className="text-gray-700 space-y-1">
                                            <p>가. 이전되는 개인정보 항목: 소셜로그인 정보, 프로바이더 ID, 디스플레이네임, 성별, 태어난 연도, 경조사 기록 정보, 앱 사용 통계, 오류 로그, 푸시 알림 토큰</p>
                                            <p>나. 개인정보가 이전되는 국가: 미국, 싱가포르 등 (Supabase, Firebase 서버 위치에 따름)</p>
                                            <p>다. 개인정보를 이전받는 자: Supabase Inc., Google LLC (Firebase)</p>
                                            <p>라. 이전일시 및 방법: 회원가입 및 서비스 이용 시 네트워크를 통한 전송</p>
                                            <p>마. 이전받는 자의 이용목적: 클라우드 인프라 제공, 데이터 저장, 인증 시스템 운영, 앱 분석, 오류 추적, 푸시 알림 전송</p>
                                            <p>바. 이전받는 자의 보유·이용 기간: 회원 탈퇴 시 또는 위탁계약 종료 시까지</p>
                                        </div>
                                    </div>
                                    
                                    <p>3. 회사는 이용자의 개인정보에 관하여 개인정보보호법 등 관계 법규를 위반하는 사항을 내용으로 하는 국제계약을 체결하지 않습니다.</p>
                                    <p>4. 회사는 개인정보를 국외로 이전하는 경우 개인정보보호법 및 관계 법규에서 정하는 바에 따라 안전성 확보에 필요한 보호조치를 하고 있습니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제25조 (개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항)
                                </h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용 정보를 저장하고 수시로 불러오는 개인정보 자동 수집장치(이하 &apos;쿠키&apos;)를 사용합니다. 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 웹브라우저(PC 및 모바일을 포함)에게 보내는 소량의 정보이며 이용자의 저장공간에 저장되기도 합니다.</p>
                                    <p>2. 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서 이용자는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.</p>
                                    <p>3. 다만, 쿠키의 저장을 거부할 경우에는 로그인이 필요한 회사의 일부 서비스는 이용에 어려움이 있을 수 있습니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제26조 (쿠키 설치 허용 지정 방법)
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    웹브라우저 옵션 설정을 통해 쿠키 허용, 쿠키 차단 등의 설정을 할 수 있습니다.
                                </p>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="text-gray-700 space-y-1">
                                        <p>• Edge: 웹브라우저 우측 상단의 설정 메뉴 &gt; 쿠키 및 사이트 권한 &gt; 쿠키 및 사이트 데이터 관리 및 삭제</p>
                                        <p>• Chrome: 웹브라우저 우측 상단의 설정 메뉴 &gt; 개인정보 및 보안 &gt; 쿠키 및 기타 사이트 데이터</p>
                                        <p>• Whale: 웹브라우저 우측 상단의 설정 메뉴 &gt; 개인정보 보호 &gt; 쿠키 및 기타 사이트 데이터</p>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제27조 (모바일 애플리케이션의 접근 권한)
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    회사는 마음장부 모바일 애플리케이션 이용 시 다음과 같은 접근 권한을 요청할 수 있습니다.
                                </p>
                                
                                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                    <h3 className="font-semibold text-gray-800 mb-2">1. 선택적 접근 권한</h3>
                                    <div className="text-gray-700 space-y-1">
                                        <p>가. 알림(Push Notification): 서비스 관련 공지사항 및 이벤트 정보 전달</p>
                                        <p>나. 저장소: Excel 파일 다운로드 및 업로드를 위한 파일 접근</p>
                                    </div>
                                </div>

                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>2. 선택적 접근 권한은 해당 기능 사용 시에만 권한을 허용받으며, 허용하지 않아도 해당 기능 외 서비스 이용이 가능합니다.</p>
                                    <p>3. 접근 권한의 변경은 다음의 방법으로 가능합니다.</p>
                                    <div className="ml-4 space-y-1">
                                        <p>가. Android: 설정 &gt; 애플리케이션 관리자 &gt; 해당 앱 선택 &gt; 권한</p>
                                        <p>나. iOS: 설정 &gt; 해당 앱 선택 &gt; 권한 설정 변경</p>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제28조 (회사의 개인정보 보호 책임자 지정)
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    회사는 이용자의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보 보호 책임자를 지정하고 있습니다.
                                </p>
                                
                                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                    <h3 className="font-semibold text-gray-800 mb-2">개인정보보호책임자</h3>
                                    <div className="text-gray-700 space-y-1">
                                        <p>• 성명: 최원영</p>
                                        <p>• 직책: CTO</p>
                                        <p>• 전화번호: 010-2029-2579</p>
                                        <p>• 이메일: dev@aura-postproduction.com</p>
                                    </div>
                                </div>

                                <p className="text-gray-700 leading-relaxed">
                                    이용자는 회사의 서비스를 이용하시면서 발생한 모든 개인정보보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호 책임자에게 문의하실 수 있습니다. 회사는 이용자의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제29조 (권익침해에 대한 구제방법)
                                </h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.</p>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <div className="text-gray-700 space-y-1">
                                            <p>가. 개인정보분쟁조정위원회: (국번없이) 1833-6972 (www.kopico.go.kr)</p>
                                            <p>나. 개인정보침해신고센터: (국번없이) 118 (privacy.kisa.or.kr)</p>
                                            <p>다. 대검찰청: (국번없이) 1301 (www.spo.go.kr)</p>
                                            <p>라. 경찰청: (국번없이) 182 (ecrm.cyber.go.kr)</p>
                                        </div>
                                    </div>
                                    <p>2. 회사는 정보주체의 개인정보자기결정권을 보장하고, 개인정보침해로 인한 상담 및 피해 구제를 위해 노력하고 있으며, 신고나 상담이 필요한 경우 제1항의 담당부서로 연락해주시기 바랍니다.</p>
                                    <p>3. 개인정보 보호법 제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.</p>
                                    <div className="ml-4">
                                        <p>가. 중앙행정심판위원회: (국번없이) 110 (www.simpan.go.kr)</p>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제30조 (개인정보의 제3자 제공)
                                </h2>
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
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제31조 (개인정보 처리업무의 위탁)
                                </h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 회사는 서비스 향상을 위해서 이용자의 개인정보를 외부에 위탁하여 처리할 수 있습니다.</p>
                                    <p>2. 회사가 개인정보의 처리를 위탁하는 경우 다음의 내용을 이용자에게 고지합니다.</p>
                                    
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h3 className="font-semibold text-gray-800 mb-2">개인정보 처리 위탁 현황</h3>
                                        <div className="text-gray-700 space-y-1">
                                            <p>• 수탁업체: Supabase Inc., Google LLC (Firebase)</p>
                                            <p>• 위탁업무 내용: 클라우드 서비스 제공, 데이터베이스 관리, 인증 시스템 운영, 앱 분석, 오류 추적, 푸시 알림 전송</p>
                                            <p>• 위탁하는 개인정보 항목: 소셜로그인 정보, 프로바이더 ID, 디스플레이네임, 성별, 태어난 연도, 경조사 기록 정보, 앱 사용 통계, 오류 로그, 푸시 알림 토큰</p>
                                            <p>• 보유 및 이용기간: 회원 탈퇴 시 또는 위탁계약 종료 시까지</p>
                                        </div>
                                    </div>
                                    
                                    <p>3. 회사는 위탁계약 체결 시 개인정보보호법에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.</p>
                                    <p>4. 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체 없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제32조 (서비스 제공을 위한 인프라)
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    회사는 마음장부 서비스를 안정적으로 제공하기 위해 다음의 인프라를 사용합니다.
                                </p>
                                
                                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                    <div className="text-gray-700 space-y-1">
                                        <p>1. 인증 및 데이터베이스: Supabase (미국, 싱가포르 등)</p>
                                        <p>2. 앱 분석 및 오류 추적: Firebase (Google LLC)</p>
                                        <p>3. 푸시 알림: Firebase Cloud Messaging (FCM)</p>
                                        <p>4. 광고 서비스: Google AdMob</p>
                                        <p>5. 앱 배포: Google Play Store, Apple App Store</p>
                                    </div>
                                </div>

                                <p className="text-gray-700 leading-relaxed">
                                    회사는 상기 인프라 제공자가 개인정보보호 관련 국제 인증(SOC 2, ISO 27001 등)을 보유하고 있음을 확인하였으며, 안전한 개인정보 처리를 위해 지속적으로 관리·감독하고 있습니다.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제33조 (아동의 개인정보 보호)
                                </h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 회사는 만 14세 미만 아동의 개인정보를 수집하지 않습니다.</p>
                                    <p>2. 만약 만 14세 미만 아동의 개인정보가 수집된 사실을 인지하게 되는 경우, 회사는 해당 정보를 즉시 삭제하는 등 필요한 조치를 취합니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제34조 (데이터 내보내기 및 가져오기)
                                </h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 회사는 이용자가 자신의 개인정보를 관리할 수 있도록 Excel 파일 형태로 데이터를 내보내기 및 가져오기 기능을 제공합니다.</p>
                                    <p>2. 데이터 내보내기 시 다음 정보가 포함됩니다: 경조사 기록, 사용자 정의 카테고리, 프로필 정보</p>
                                    <p>3. 데이터 가져오기 시 파일 크기는 최대 10MB로 제한됩니다.</p>
                                    <p>4. 내보내기된 파일은 이용자의 디바이스에 저장되며, 회사는 해당 파일의 보안에 대한 책임을 지지 않습니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    제35조 (계정 탈퇴 시 데이터 처리)
                                </h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <p>1. 이용자가 계정 탈퇴를 요청할 경우, 회사는 다음 순서로 데이터를 완전히 삭제합니다.</p>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <div className="text-gray-700 space-y-1">
                                            <p>가. 거래 내역 삭제 (암호화된 설명 포함)</p>
                                            <p>나. 경조사 데이터 삭제 (암호화된 이름, 장소, 메모 포함)</p>
                                            <p>다. 사용자 정의 카테고리 삭제</p>
                                            <p>라. 사용자 계정 삭제</p>
                                            <p>마. 암호화 캐시 정리</p>
                                            <p>바. 로컬 저장소 데이터 완전 정리</p>
                                            <p>사. Supabase Auth 삭제</p>
                                        </div>
                                    </div>
                                    <p>2. 탈퇴 시 모든 개인정보는 복구할 수 없으며, 탈퇴 전 데이터 백업을 권장합니다.</p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    부칙
                                </h2>
                                <div className="text-gray-700 leading-relaxed space-y-2">
                                    <h3 className="font-semibold text-gray-800 mb-2">제1조 (시행일)</h3>
                                    <p>본 방침은 2025년 10월 25일부터 시행됩니다.</p>
                                </div>
                            </section>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="font-semibold text-blue-800 mb-2">마음장부 서비스 이용자 여러분께</h3>
                                <p className="text-blue-700 text-sm">
                                    본 개인정보처리방침은 여러분의 소중한 개인정보를 보호하기 위해 마련되었습니다. 서비스 이용 중 개인정보 관련 문의사항이 있으시면 언제든지 개인정보보호책임자에게 연락주시기 바랍니다.
                                </p>
                                <p className="text-blue-700 text-sm mt-2 font-semibold">
                                    감사합니다.<br />
                                    아우라포스트프로덕션 주식회사
                                </p>
                            </div>

                            <div className="mt-12 pt-8 border-t border-gray-200">
                                <p className="text-sm text-gray-500 text-center">
                                    본 개인정보처리방침은 관련 법령, 지침 및 내부 운영정책의 변경에 따라 변경될 수 있습니다.
                                </p>
                                <p className="text-sm text-gray-500 text-center mt-2">
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
  