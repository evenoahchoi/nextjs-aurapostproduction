export default function PrivacyV2Content() {
    return (
        <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-600 mb-8 text-right">시행일자: 2026년 5월 10일</p>

            <p className="text-gray-700 leading-relaxed mb-8">
                아우라포스트프로덕션 주식회사(이하 &apos;회사&apos;)는 마음장부 서비스(이하 &apos;서비스&apos;)를 이용하는 이용자의 개인정보를 보호하고, 개인정보와 관련한 고충을 신속하고 원활하게 처리하기 위하여 개인정보 보호법 등 관련 법령에 따라 다음과 같이 개인정보처리방침을 수립·공개합니다.
            </p>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제1조 (개인정보의 처리 목적)</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리한 개인정보는 다음 목적 외의 용도로 이용하지 않으며, 이용 목적이 변경되는 경우에는 관련 법령에 따라 별도의 동의를 받는 등 필요한 조치를 이행합니다.
                </p>
                <div className="text-gray-700 leading-relaxed space-y-3">
                    <div>
                        <p className="font-medium">1. 회원 가입, 로그인 및 이용자 식별</p>
                        <ul className="list-disc pl-6 mt-1 space-y-1">
                            <li>소셜 로그인 기반 회원 식별</li>
                            <li>서비스 이용자 본인 확인 및 계정 관리</li>
                            <li>중복 가입 및 부정 이용 방지</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium">2. 마음장부 서비스 제공</p>
                        <ul className="list-disc pl-6 mt-1 space-y-1">
                            <li>경조사 기록, 거래 내역, 관계 및 카테고리 관리</li>
                            <li>사용자 입력 데이터의 저장, 조회, 수정, 삭제</li>
                            <li>Excel 파일 형태의 데이터 내보내기 및 가져오기 기능 제공</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium">3. 월간 리포트 및 통계 서비스 제공</p>
                        <ul className="list-disc pl-6 mt-1 space-y-1">
                            <li>월별 경조사 기록 및 거래 내역 요약</li>
                            <li>이용자 본인의 월간 이용 현황 분석</li>
                            <li>이용자가 성별과 태어난 연도를 선택적으로 제공한 경우 연령대/성별 기반 비교 통계 및 맞춤형 월간 리포트 제공</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium">4. 알림 서비스 제공</p>
                        <ul className="list-disc pl-6 mt-1 space-y-1">
                            <li>경조사 일정 알림, 서비스 공지, 월간 리포트 알림 등 푸시 알림 발송</li>
                            <li>알림 수신 상태 및 발송 이력 관리</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium">5. 서비스 안정성 확보 및 개선</p>
                        <ul className="list-disc pl-6 mt-1 space-y-1">
                            <li>오류 분석, 장애 대응, 앱 성능 개선</li>
                            <li>서비스 이용 통계 분석</li>
                            <li>보안, 접근 통제, 비정상 이용 탐지</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium">6. 광고 제공 및 광고 빈도 관리</p>
                        <ul className="list-disc pl-6 mt-1 space-y-1">
                            <li>Google AdMob을 통한 광고 표시</li>
                            <li>광고 노출 및 빈도 관리</li>
                            <li>맞춤형 광고 제공 여부는 이용자의 기기 설정 및 광고 네트워크 정책에 따릅니다.</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium">7. 이용자 문의 및 권리 행사 처리</p>
                        <ul className="list-disc pl-6 mt-1 space-y-1">
                            <li>문의, 불만, 삭제 요청, 열람·정정·처리정지 요청 처리</li>
                            <li>처리 결과 안내 및 기록 보관</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제2조 (처리하는 개인정보 항목)</h2>
                <p className="text-gray-700 leading-relaxed mb-4">회사는 서비스 제공을 위하여 아래와 같은 개인정보를 처리합니다.</p>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">1. 회원 가입 및 로그인 과정에서 처리하는 정보</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>필수: Supabase Auth 사용자 ID, 소셜 로그인 제공자, 소셜 로그인 식별자(social_id, provider_id 등), 인증 토큰 관련 정보</li>
                        <li>조건부: 소셜 로그인 제공자가 전달하는 프로필명 또는 닉네임 등 기본 프로필 정보. 단, 서비스 내 닉네임은 이용자가 직접 설정할 수 있습니다.</li>
                    </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">2. 프로필 설정 정보</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>필수: 닉네임</li>
                        <li>선택: 성별, 태어난 연도</li>
                        <li>성별과 태어난 연도는 월간 리포트의 비교 그룹 산출 및 통계 분석을 위해 선택적으로 처리하며, 선택하지 않아도 기본 서비스 이용은 가능합니다.</li>
                    </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">3. 이용자가 직접 입력하는 서비스 정보</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>경조사 기록: 상대방 이름, 경조사 유형, 날짜, 장소, 메모, 관계, 참석 여부, 생성·수정 일시</li>
                        <li>거래 내역: 수입/지출 구분, 금액, 거래 설명, 생성·수정 일시</li>
                        <li>사용자 정의 카테고리: 경조사 카테고리, 관계 카테고리, 표시 순서 등</li>
                        <li>데이터 내보내기 및 가져오기 과정에서 포함되는 경조사 기록, 거래 내역, 카테고리, 프로필 정보</li>
                    </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">4. 서비스 이용 과정에서 자동 또는 기기 기반으로 처리되는 정보</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>접속 및 이용 기록, 앱 사용 통계, 오류 로그, 성능 데이터</li>
                        <li>접속 IP, 기기 정보, OS, OS 버전, 기기명, 기기 식별자, 앱 버전</li>
                        <li>FCM 디바이스 토큰, 토큰 활성화 여부, 마지막 로그인 기기 여부, 토큰 생성·갱신·마지막 사용 일시</li>
                        <li>푸시 알림 발송 이력: 알림 제목, 본문, 유형, 발송 상태, 오류 메시지, FCM 메시지 ID, 알림 데이터, 발송·도달·생성 일시</li>
                    </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">5. 보안 및 로컬 저장 정보</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>PIN 보안 정보</li>
                        <li>로그인 세션, 임시 세션, 로컬 설정, 알림 설정, 앱 설정, 캐시 정보</li>
                        <li>PIN 및 일부 로컬 정보는 이용자 기기에 저장될 수 있습니다.</li>
                    </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">6. 광고 관련 정보</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Google AdMob 광고 식별자, 광고 요청 및 노출 관련 정보, 광고 시청 또는 노출 빈도 정보</li>
                        <li>광고 관련 정보는 Google의 정책 및 이용자의 기기 광고 설정에 따라 처리될 수 있습니다.</li>
                    </ul>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제3조 (개인정보의 수집 방법)</h2>
                <p className="text-gray-700 leading-relaxed mb-4">회사는 다음의 방법으로 개인정보를 수집하거나 생성합니다.</p>
                <div className="text-gray-700 leading-relaxed space-y-1">
                    <p>1. 이용자가 앱 화면에 직접 입력하는 방법</p>
                    <p>2. 카카오, Apple 등 소셜 로그인 제공자를 통한 인증 연동 과정에서 제공받는 방법</p>
                    <p>3. Supabase Auth, Supabase Database, Supabase Edge Functions를 통한 인증 및 서비스 이용 과정에서 처리되는 방법</p>
                    <p>4. Firebase Analytics, Firebase Crashlytics, Firebase Cloud Messaging 등 모바일 SDK를 통해 자동 생성·수집되는 방법</p>
                    <p>5. Google AdMob SDK를 통해 광고 제공 과정에서 처리되는 방법</p>
                    <p>6. 이용자가 고객센터 이메일 등으로 문의하는 과정에서 제공하는 방법</p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제4조 (개인정보의 보유 및 이용 기간)</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    회사는 개인정보의 처리 목적이 달성될 때까지 개인정보를 보유·이용합니다. 다만, 관계 법령에 따라 보존할 필요가 있는 경우에는 해당 법령에서 정한 기간 동안 보관합니다.
                </p>
                <div className="text-gray-700 leading-relaxed space-y-1">
                    <p>1. 회원 및 프로필 정보: 회원 탈퇴 시까지</p>
                    <p>2. 경조사 기록, 거래 내역, 사용자 정의 카테고리: 회원 탈퇴 시까지 또는 이용자가 직접 삭제할 때까지</p>
                    <p>3. FCM 디바이스 토큰 및 알림 설정: 회원 탈퇴 시까지, 토큰 비활성화 또는 알림 설정 변경 시까지</p>
                    <p>4. 푸시 알림 발송 이력: 서비스 운영, 발송 오류 확인 및 이용자 문의 대응에 필요한 기간 동안 보관 후 파기</p>
                    <p>5. 앱 사용 통계, 오류 로그, 성능 데이터: 서비스 안정성 확보 및 개선에 필요한 기간 동안 보관 후 파기</p>
                    <p>6. 부정 이용 방지 기록: 부정 가입 및 비정상 이용 방지를 위하여 회원 탈퇴 후 최대 1년까지 보관할 수 있음</p>
                    <p>7. 웹사이트 또는 앱 접속 로그: 통신비밀보호법 등 관계 법령에 따라 필요한 경우 3개월 보관</p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제5조 (법령에 따른 보존)</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    회사는 관계 법령에 따라 보존할 의무가 있는 개인정보를 해당 기간 동안 보관할 수 있습니다. 현재 서비스 운영 과정에서 해당 기록이 발생하는 경우에 한하여 적용됩니다.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">1. 통신비밀보호법</h3>
                    <div className="text-gray-700 space-y-1">
                        <p>가. 접속 로그 등 통신사실확인자료: 3개월</p>
                    </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">2. 전자상거래 등에서의 소비자보호에 관한 법률</h3>
                    <div className="text-gray-700 space-y-1">
                        <p>가. 계약 또는 청약철회 등에 관한 기록: 5년</p>
                        <p>나. 대금결제 및 재화 등의 공급에 관한 기록: 5년</p>
                        <p>다. 소비자의 불만 또는 분쟁처리에 관한 기록: 3년</p>
                        <p>라. 표시·광고에 관한 기록: 6개월</p>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제6조 (개인정보의 파기)</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    회사는 개인정보 보유기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
                </p>
                <div className="text-gray-700 leading-relaxed space-y-1">
                    <p>1. 전자적 파일 형태의 정보는 복구 또는 재생되지 않도록 안전한 방법으로 삭제합니다.</p>
                    <p>2. 종이 문서가 발생한 경우 분쇄 또는 소각 등 안전한 방법으로 파기합니다.</p>
                    <p>3. 서비스 운영을 위해 클라우드 시스템에 저장된 정보는 해당 시스템의 삭제 절차와 보안 기준에 따라 삭제합니다.</p>
                    <p>4. 법령에 따라 보존해야 하는 정보는 다른 개인정보와 분리하여 보관하고, 보존 기간이 종료되면 지체 없이 파기합니다.</p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제7조 (계정 탈퇴 시 개인정보 처리)</h2>
                <p className="text-gray-700 leading-relaxed mb-4">이용자가 계정 탈퇴를 요청하면 회사는 본인 확인 후 다음 정보를 삭제합니다.</p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">1. 서버 저장 정보</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>푸시 알림 발송 이력</li>
                        <li>거래 내역</li>
                        <li>경조사 기록</li>
                        <li>사용자 정의 관계 카테고리 / 경조사 카테고리</li>
                        <li>FCM 디바이스 토큰</li>
                        <li>사용자 프로필 정보</li>
                        <li>Supabase Auth 계정 정보</li>
                    </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">2. 앱 로컬 정보</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>로그인 세션 및 임시 세션</li>
                        <li>로컬 설정, 캐시, 암호화 캐시</li>
                        <li>브라우저 세션 및 OAuth 관련 캐시</li>
                        <li>SharedPreferences 등 앱 내부 저장소에 보관된 정보</li>
                    </ul>
                </div>
                <div className="text-gray-700 leading-relaxed space-y-1">
                    <p className="font-semibold text-gray-800 mb-2">3. 유의사항</p>
                    <p>가. 계정 탈퇴 후 삭제된 개인정보는 복구할 수 없습니다.</p>
                    <p>나. 이용자가 기기에 직접 저장한 Excel 내보내기 파일, 스크린샷, 백업 파일 등은 회사가 삭제할 수 없으므로 이용자가 직접 관리해야 합니다.</p>
                    <p>다. 탈퇴 전 필요한 데이터는 내보내기 기능으로 백업할 수 있습니다.</p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제8조 (개인정보의 제3자 제공)</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                    <p>회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다.</p>
                    <div className="ml-4 space-y-1">
                        <p>가. 이용자가 사전에 동의한 경우</p>
                        <p>나. 법령에 특별한 규정이 있거나 수사기관, 감독기관 등이 법령에 정해진 절차와 방법에 따라 요구하는 경우</p>
                        <p>다. 통계 작성, 서비스 분석 등을 위하여 특정 개인을 알아볼 수 없는 형태로 처리하여 제공하는 경우</p>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제9조 (개인정보 처리업무의 위탁 및 국외 이전)</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    회사는 서비스 제공을 위하여 아래와 같이 개인정보 처리업무를 위탁하거나 국외로 이전할 수 있습니다.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">1. Supabase Inc.</h3>
                    <div className="text-gray-700 space-y-1">
                        <p>• 업무 내용: 클라우드 데이터베이스, 인증, 스토리지, Edge Functions 등 서비스 인프라 제공</p>
                        <p>• 처리 항목: 회원 식별 정보, 프로필 정보, 경조사 기록, 거래 내역, 카테고리 정보, 디바이스 토큰, 알림 관련 정보</p>
                        <p>• 이전 국가: 미국, 싱가포르 등 Supabase 인프라 소재 국가</p>
                        <p>• 보유 및 이용 기간: 회원 탈퇴 시 또는 위탁계약 종료 시까지</p>
                    </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">2. Google LLC - Firebase</h3>
                    <div className="text-gray-700 space-y-1">
                        <p>• 업무 내용: 앱 분석, 오류 추적, 성능 모니터링, 푸시 알림 전송</p>
                        <p>• 처리 항목: 앱 사용 통계, 오류 로그, 성능 데이터, 기기 정보, FCM 디바이스 토큰, 알림 관련 정보</p>
                        <p>• 이전 국가: 미국 등 Google 인프라 소재 국가</p>
                        <p>• 보유 및 이용 기간: 회원 탈퇴 시, SDK 보관 기간 만료 시 또는 위탁계약 종료 시까지</p>
                    </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">3. Google LLC - Google AdMob</h3>
                    <div className="text-gray-700 space-y-1">
                        <p>• 업무 내용: 모바일 광고 표시, 광고 성과 측정, 광고 빈도 관리</p>
                        <p>• 처리 항목: 광고 식별자, 광고 요청 및 노출 관련 정보, 기기 정보, 광고 상호작용 정보</p>
                        <p>• 이전 국가: 미국 등 Google 인프라 소재 국가</p>
                        <p>• 보유 및 이용 기간: Google 정책 및 이용자 기기 광고 설정에 따름</p>
                    </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">4. 소셜 로그인 제공자 (카카오, Apple 등)</h3>
                    <div className="text-gray-700 space-y-1">
                        <p>• 업무 내용: 소셜 로그인 인증 및 계정 연동</p>
                        <p>• 처리 항목: 소셜 로그인 식별자, 인증 토큰 관련 정보, 제공자가 전달하는 기본 프로필 정보</p>
                    </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                    이용자는 개인정보 국외 이전을 거부할 수 있습니다. 다만, Supabase, Firebase 등은 서비스 제공에 필요한 인프라이므로 국외 이전을 거부하는 경우 회원가입, 로그인, 데이터 저장, 푸시 알림 등 서비스 이용이 제한될 수 있습니다.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제10조 (행태정보 및 광고 식별자 처리)</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    회사는 Google AdMob, Firebase Analytics 등을 통해 앱 이용 행태, 광고 요청 및 노출 정보, 광고 식별자 등을 처리할 수 있습니다.
                </p>
                <div className="text-gray-700 leading-relaxed space-y-1">
                    <p>1. 처리 목적: 광고 제공, 광고 성과 측정, 광고 빈도 관리, 서비스 이용 분석</p>
                    <p>2. 처리 항목: 광고 식별자, 앱 사용 이벤트, 광고 요청 및 노출 정보, 기기 정보</p>
                    <p>3. 보유 및 이용 기간: 각 SDK 제공자의 정책 및 이용자 기기 설정에 따름</p>
                    <p>4. 이용자 통제 방법</p>
                    <div className="ml-4 space-y-1">
                        <p>가. Android: 설정 &gt; 개인정보 보호 &gt; 광고 &gt; 광고 ID 재설정 또는 광고 개인 최적화 제한</p>
                        <p>나. iOS: 설정 &gt; 개인정보 보호 및 보안 &gt; 추적 또는 Apple 광고 설정 변경</p>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제11조 (개인정보의 안전성 확보조치)</h2>
                <p className="text-gray-700 leading-relaxed mb-4">회사는 개인정보의 안전성 확보를 위하여 다음과 같은 조치를 하고 있습니다.</p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">1. 기술적 조치</h3>
                    <div className="text-gray-700 space-y-1">
                        <p>가. 중요한 데이터의 암호화 저장 및 전송구간 암호화</p>
                        <p>나. 경조사 기록 중 상대방 이름, 장소, 메모 및 거래 설명의 AES-256 암호화 처리</p>
                        <p>다. 사용자별 암호화 키 및 접근 통제 적용</p>
                        <p>라. 인증 토큰 및 세션 관리</p>
                        <p>마. 오류 로그 및 접근 기록 점검</p>
                    </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">2. 관리적 조치</h3>
                    <div className="text-gray-700 space-y-1">
                        <p>가. 개인정보 처리 담당자 최소화</p>
                        <p>나. 개인정보보호 책임자 지정</p>
                        <p>다. 개인정보 취급자 교육 및 권한 관리</p>
                        <p>라. 수탁자 관리·감독</p>
                    </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">3. 물리적 조치</h3>
                    <div className="text-gray-700">
                        <p>가. 클라우드 인프라 제공자의 보안 정책 및 인증 체계를 확인하고, 접근 권한을 제한합니다.</p>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제12조 (이용자와 법정대리인의 권리 및 행사 방법)</h2>
                <p className="text-gray-700 leading-relaxed mb-4">이용자는 언제든지 자신의 개인정보에 대하여 열람, 정정, 삭제, 처리정지, 동의 철회를 요청할 수 있습니다.</p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">1. 앱 내 기능을 통한 행사</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>프로필 수정</li>
                        <li>경조사 기록 및 카테고리 삭제</li>
                        <li>알림 설정 변경</li>
                        <li>데이터 내보내기</li>
                        <li>계정 탈퇴</li>
                    </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">2. 이메일을 통한 행사</h3>
                    <div className="text-gray-700 space-y-1">
                        <p>• 이메일: dev@aura-postproduction.com</p>
                        <p>• 요청 시 본인 확인을 위해 필요한 최소한의 정보를 요청할 수 있습니다.</p>
                    </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                    3. 회사는 관련 법령에 따라 이용자의 요청을 지체 없이 처리하며, 법령상 정당한 사유가 있는 경우 처리 제한 또는 거절 사유를 안내할 수 있습니다.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제13조 (데이터 내보내기 및 가져오기)</h2>
                <p className="text-gray-700 leading-relaxed mb-4">회사는 이용자가 자신의 데이터를 관리할 수 있도록 Excel 파일 형태의 데이터 내보내기 및 가져오기 기능을 제공할 수 있습니다.</p>
                <div className="text-gray-700 leading-relaxed space-y-1">
                    <p>1. 내보내기 항목: 경조사 기록, 거래 내역, 사용자 정의 카테고리, 프로필 정보</p>
                    <p>2. 가져오기 항목: 경조사 기록, 거래 내역, 사용자 정의 카테고리 등 서비스가 지원하는 항목</p>
                    <p>3. 내보내기 파일은 이용자의 기기에 저장되며, 회사는 이용자 기기에 저장된 파일의 보안 및 관리에 책임을 지지 않습니다.</p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제14조 (모바일 애플리케이션 접근 권한)</h2>
                <p className="text-gray-700 leading-relaxed mb-4">회사는 서비스 제공을 위해 다음 접근 권한을 요청할 수 있습니다.</p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">1. 선택적 접근 권한</h3>
                    <div className="text-gray-700 space-y-1">
                        <p>가. 알림: 경조사 일정, 서비스 공지, 월간 리포트 알림 등 푸시 알림 제공</p>
                        <p>나. 저장소 또는 파일 접근: Excel 파일 내보내기 및 가져오기 기능 제공</p>
                    </div>
                </div>
                <div className="text-gray-700 leading-relaxed space-y-2">
                    <p>2. 선택적 접근 권한은 해당 기능 사용 시 허용을 요청하며, 허용하지 않아도 해당 기능 외의 서비스 이용은 가능합니다.</p>
                    <p>3. 접근 권한 변경 방법</p>
                    <div className="ml-4 space-y-1">
                        <p>가. Android: 설정 &gt; 애플리케이션 &gt; 마음장부 &gt; 권한</p>
                        <p>나. iOS: 설정 &gt; 마음장부 &gt; 권한 설정</p>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제15조 (아동의 개인정보 보호)</h2>
                <p className="text-gray-700 leading-relaxed">
                    회사는 만 14세 미만 아동을 대상으로 서비스를 제공하지 않으며, 만 14세 미만 아동의 개인정보를 의도적으로 수집하지 않습니다. 만 14세 미만 아동의 개인정보가 수집된 사실을 확인한 경우 지체 없이 삭제 등 필요한 조치를 합니다.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제16조 (민감정보, 고유식별정보 및 가명정보 처리)</h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>회사는 주민등록번호, 여권번호, 운전면허번호, 외국인등록번호 등 고유식별정보를 수집하지 않습니다. 또한 사상·신념, 노동조합·정당 가입, 건강정보 등 민감정보를 의도적으로 수집하지 않습니다.</p>
                    <p>이용자가 메모 등 자유 입력란에 민감정보 또는 타인의 개인정보를 입력하는 경우 회사가 이를 사전에 인지하기 어렵습니다. 이용자는 필요한 범위 내에서만 정보를 입력해야 하며, 회사는 삭제 요청이 있는 경우 관련 법령에 따라 조치합니다.</p>
                    <p>회사는 현재 가명정보를 별도로 생성하거나 결합하여 처리하지 않습니다. 향후 가명정보를 처리하는 경우 처리 목적, 항목, 보유기간 등을 본 방침에 공개합니다.</p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제17조 (자동화된 결정)</h2>
                <p className="text-gray-700 leading-relaxed">
                    회사는 이용자에게 법적 효력 또는 이에 준하는 중대한 영향을 미치는 완전히 자동화된 결정을 수행하지 않습니다. 월간 리포트, 통계, 광고 노출 등은 서비스 편의와 정보 제공을 위한 기능이며, 이용자의 권리·의무에 중대한 영향을 미치는 자동화된 결정으로 사용하지 않습니다.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제18조 (개인정보 유출 등에 대한 조치)</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    회사는 개인정보의 분실, 도난, 유출, 위조, 변조 또는 훼손 사실을 알게 된 경우 관련 법령에 따라 지체 없이 이용자에게 알리고 관계기관에 신고하는 등 필요한 조치를 합니다. 통지 항목은 다음과 같습니다.
                </p>
                <div className="text-gray-700 leading-relaxed space-y-1">
                    <p>1. 유출 등이 된 개인정보 항목</p>
                    <p>2. 유출 등이 발생한 시점</p>
                    <p>3. 이용자가 취할 수 있는 조치</p>
                    <p>4. 회사의 대응 조치</p>
                    <p>5. 상담 및 피해구제 접수 부서와 연락처</p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제19조 (개인정보보호 책임자)</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    회사는 개인정보 처리에 관한 업무를 총괄하고, 개인정보 처리와 관련한 이용자의 불만처리 및 피해구제를 위하여 아래와 같이 개인정보보호 책임자를 지정하고 있습니다.
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
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제20조 (권익침해 구제방법)</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                    <p>이용자는 개인정보 침해로 인한 구제를 받기 위하여 아래 기관에 상담 또는 분쟁해결을 신청할 수 있습니다.</p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-gray-700 space-y-1">
                            <p>가. 개인정보분쟁조정위원회: (국번없이) 1833-6972 (www.kopico.go.kr)</p>
                            <p>나. 개인정보침해신고센터: (국번없이) 118 (privacy.kisa.or.kr)</p>
                            <p>다. 대검찰청: (국번없이) 1301 (www.spo.go.kr)</p>
                            <p>라. 경찰청: (국번없이) 182 (ecrm.police.go.kr)</p>
                            <p>마. 중앙행정심판위원회: (국번없이) 110 (www.simpan.go.kr)</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">제21조 (개인정보처리방침의 공개 및 변경)</h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>회사는 이용자가 언제든지 쉽게 확인할 수 있도록 본 방침을 앱 내 화면 또는 회사가 운영하는 웹페이지에 공개합니다.</p>
                    <p>본 방침은 법령, 지침, 서비스 정책, 처리하는 개인정보 항목의 변경에 따라 개정될 수 있습니다. 회사는 방침을 변경하는 경우 시행일, 변경 내용 및 사유를 앱 공지사항, 웹페이지, 이메일, 푸시 알림 등 적절한 방법으로 안내합니다.</p>
                    <p>중요한 변경이 있는 경우 시행일 최소 30일 전부터 안내하며, 그 밖의 변경은 시행일 최소 7일 전부터 안내합니다. 단, 이용자 권리 보호를 위해 긴급히 변경할 필요가 있는 경우에는 변경 후 지체 없이 안내할 수 있습니다.</p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">부칙</h2>
                <div className="text-gray-700 leading-relaxed">
                    <p>본 개인정보처리방침은 2026년 5월 10일부터 시행합니다.</p>
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
                    © 2026 아우라포스트프로덕션 주식회사. All rights reserved.
                </p>
            </div>
        </div>
    );
}
