import { useState } from "react";
import Layout from "../components/layout";
import Head from "next/head";

const v2AppInfo = {
    name: "마음장부",
    company: "아우라포스트프로덕션 주식회사",
    version: "2.0.0",
    effectiveDate: "2026년 5월 10일",
    privacyOfficer: {
        name: "최원영",
        position: "CTO",
        phone: "010-2029-2579",
        email: "dev@aura-postproduction.com",
    },
};

const v2Summary = [
    "성별과 태어난 연도는 필수 수집 항목이 아니라 선택 수집 항목으로 정리했습니다.",
    "월간 리포트 및 연령대/성별 기반 비교 통계 제공 목적을 명시했습니다.",
    "FCM 디바이스 토큰, 기기 정보, 푸시 알림 발송 이력 처리 내용을 실제 DB 구조에 맞게 반영했습니다.",
    "계정 탈퇴 시 삭제 대상에 알림 이력, 거래 내역, 경조사 기록, 사용자 정의 카테고리, 디바이스 토큰, 사용자 프로필, Supabase Auth 계정을 포함했습니다.",
    "Supabase, Firebase, Google AdMob 이용에 따른 처리위탁 및 국외 이전 내용을 통합 정리했습니다.",
    "가명정보, 민감정보, 자동화된 결정, 행태정보 관련 내용을 별도 조항으로 정리했습니다.",
];

const v2Content = `아우라포스트프로덕션 주식회사(이하 "회사")는 마음장부 서비스(이하 "서비스")를 이용하는 이용자의 개인정보를 보호하고, 개인정보와 관련한 고충을 신속하고 원활하게 처리하기 위하여 개인정보 보호법 등 관련 법령에 따라 다음과 같이 개인정보처리방침을 수립·공개합니다.

제1조 (개인정보의 처리 목적)
회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리한 개인정보는 다음 목적 외의 용도로 이용하지 않으며, 이용 목적이 변경되는 경우에는 관련 법령에 따라 별도의 동의를 받는 등 필요한 조치를 이행합니다.

1. 회원 가입, 로그인 및 이용자 식별
   - 소셜 로그인 기반 회원 식별
   - 서비스 이용자 본인 확인 및 계정 관리
   - 중복 가입 및 부정 이용 방지

2. 마음장부 서비스 제공
   - 경조사 기록, 거래 내역, 관계 및 카테고리 관리
   - 사용자 입력 데이터의 저장, 조회, 수정, 삭제
   - Excel 파일 형태의 데이터 내보내기 및 가져오기 기능 제공

3. 월간 리포트 및 통계 서비스 제공
   - 월별 경조사 기록 및 거래 내역 요약
   - 이용자 본인의 월간 이용 현황 분석
   - 이용자가 성별과 태어난 연도를 선택적으로 제공한 경우 연령대/성별 기반 비교 통계 및 맞춤형 월간 리포트 제공

4. 알림 서비스 제공
   - 경조사 일정 알림, 서비스 공지, 월간 리포트 알림 등 푸시 알림 발송
   - 알림 수신 상태 및 발송 이력 관리

5. 서비스 안정성 확보 및 개선
   - 오류 분석, 장애 대응, 앱 성능 개선
   - 서비스 이용 통계 분석
   - 보안, 접근 통제, 비정상 이용 탐지

6. 광고 제공 및 광고 빈도 관리
   - Google AdMob을 통한 광고 표시
   - 광고 노출 및 빈도 관리
   - 맞춤형 광고 제공 여부는 이용자의 기기 설정 및 광고 네트워크 정책에 따릅니다.

7. 이용자 문의 및 권리 행사 처리
   - 문의, 불만, 삭제 요청, 열람·정정·처리정지 요청 처리
   - 처리 결과 안내 및 기록 보관

제2조 (처리하는 개인정보 항목)
회사는 서비스 제공을 위하여 아래와 같은 개인정보를 처리합니다.

1. 회원 가입 및 로그인 과정에서 처리하는 정보
   - 필수: Supabase Auth 사용자 ID, 소셜 로그인 제공자, 소셜 로그인 식별자(social_id, provider_id 등), 인증 토큰 관련 정보
   - 조건부: 소셜 로그인 제공자가 전달하는 프로필명 또는 닉네임 등 기본 프로필 정보. 단, 서비스 내 닉네임은 이용자가 직접 설정할 수 있습니다.

2. 프로필 설정 정보
   - 필수: 닉네임
   - 선택: 성별, 태어난 연도
   - 성별과 태어난 연도는 월간 리포트의 비교 그룹 산출 및 통계 분석을 위해 선택적으로 처리하며, 선택하지 않아도 기본 서비스 이용은 가능합니다.

3. 이용자가 직접 입력하는 서비스 정보
   - 경조사 기록: 상대방 이름, 경조사 유형, 날짜, 장소, 메모, 관계, 참석 여부, 생성·수정 일시
   - 거래 내역: 수입/지출 구분, 금액, 거래 설명, 생성·수정 일시
   - 사용자 정의 카테고리: 경조사 카테고리, 관계 카테고리, 표시 순서 등
   - 데이터 내보내기 및 가져오기 과정에서 포함되는 경조사 기록, 거래 내역, 카테고리, 프로필 정보

4. 서비스 이용 과정에서 자동 또는 기기 기반으로 처리되는 정보
   - 접속 및 이용 기록, 앱 사용 통계, 오류 로그, 성능 데이터
   - 접속 IP, 기기 정보, OS, OS 버전, 기기명, 기기 식별자, 앱 버전
   - FCM 디바이스 토큰, 토큰 활성화 여부, 마지막 로그인 기기 여부, 토큰 생성·갱신·마지막 사용 일시
   - 푸시 알림 발송 이력: 알림 제목, 본문, 유형, 발송 상태, 오류 메시지, FCM 메시지 ID, 알림 데이터, 발송·도달·생성 일시

5. 보안 및 로컬 저장 정보
   - PIN 보안 정보
   - 로그인 세션, 임시 세션, 로컬 설정, 알림 설정, 앱 설정, 캐시 정보
   - PIN 및 일부 로컬 정보는 이용자 기기에 저장될 수 있습니다.

6. 광고 관련 정보
   - Google AdMob 광고 식별자, 광고 요청 및 노출 관련 정보, 광고 시청 또는 노출 빈도 정보
   - 광고 관련 정보는 Google의 정책 및 이용자의 기기 광고 설정에 따라 처리될 수 있습니다.

제3조 (개인정보의 수집 방법)
회사는 다음의 방법으로 개인정보를 수집하거나 생성합니다.

1. 이용자가 앱 화면에 직접 입력하는 방법
2. 카카오, Apple 등 소셜 로그인 제공자를 통한 인증 연동 과정에서 제공받는 방법
3. Supabase Auth, Supabase Database, Supabase Edge Functions를 통한 인증 및 서비스 이용 과정에서 처리되는 방법
4. Firebase Analytics, Firebase Crashlytics, Firebase Cloud Messaging 등 모바일 SDK를 통해 자동 생성·수집되는 방법
5. Google AdMob SDK를 통해 광고 제공 과정에서 처리되는 방법
6. 이용자가 고객센터 이메일 등으로 문의하는 과정에서 제공하는 방법

제4조 (개인정보의 보유 및 이용 기간)
회사는 개인정보의 처리 목적이 달성될 때까지 개인정보를 보유·이용합니다. 다만, 관계 법령에 따라 보존할 필요가 있는 경우에는 해당 법령에서 정한 기간 동안 보관합니다.

1. 회원 및 프로필 정보: 회원 탈퇴 시까지
2. 경조사 기록, 거래 내역, 사용자 정의 카테고리: 회원 탈퇴 시까지 또는 이용자가 직접 삭제할 때까지
3. FCM 디바이스 토큰 및 알림 설정: 회원 탈퇴 시까지, 토큰 비활성화 또는 알림 설정 변경 시까지
4. 푸시 알림 발송 이력: 서비스 운영, 발송 오류 확인 및 이용자 문의 대응에 필요한 기간 동안 보관 후 파기
5. 앱 사용 통계, 오류 로그, 성능 데이터: 서비스 안정성 확보 및 개선에 필요한 기간 동안 보관 후 파기
6. 부정 이용 방지 기록: 부정 가입 및 비정상 이용 방지를 위하여 회원 탈퇴 후 최대 1년까지 보관할 수 있음
7. 웹사이트 또는 앱 접속 로그: 통신비밀보호법 등 관계 법령에 따라 필요한 경우 3개월 보관

제5조 (법령에 따른 보존)
회사는 관계 법령에 따라 보존할 의무가 있는 개인정보를 해당 기간 동안 보관할 수 있습니다. 현재 서비스 운영 과정에서 해당 기록이 발생하는 경우에 한하여 적용됩니다.

1. 통신비밀보호법
   - 접속 로그 등 통신사실확인자료: 3개월

2. 전자상거래 등에서의 소비자보호에 관한 법률
   - 계약 또는 청약철회 등에 관한 기록: 5년
   - 대금결제 및 재화 등의 공급에 관한 기록: 5년
   - 소비자의 불만 또는 분쟁처리에 관한 기록: 3년
   - 표시·광고에 관한 기록: 6개월

제6조 (개인정보의 파기)
회사는 개인정보 보유기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.

1. 전자적 파일 형태의 정보는 복구 또는 재생되지 않도록 안전한 방법으로 삭제합니다.
2. 종이 문서가 발생한 경우 분쇄 또는 소각 등 안전한 방법으로 파기합니다.
3. 서비스 운영을 위해 클라우드 시스템에 저장된 정보는 해당 시스템의 삭제 절차와 보안 기준에 따라 삭제합니다.
4. 법령에 따라 보존해야 하는 정보는 다른 개인정보와 분리하여 보관하고, 보존 기간이 종료되면 지체 없이 파기합니다.

제7조 (계정 탈퇴 시 개인정보 처리)
이용자가 계정 탈퇴를 요청하면 회사는 본인 확인 후 다음 정보를 삭제합니다.

1. 서버 저장 정보
   - 푸시 알림 발송 이력
   - 거래 내역
   - 경조사 기록
   - 사용자 정의 관계 카테고리
   - 사용자 정의 경조사 카테고리
   - FCM 디바이스 토큰
   - 사용자 프로필 정보
   - Supabase Auth 계정 정보

2. 앱 로컬 정보
   - 로그인 세션 및 임시 세션
   - 로컬 설정, 캐시, 암호화 캐시
   - 브라우저 세션 및 OAuth 관련 캐시
   - SharedPreferences 등 앱 내부 저장소에 보관된 정보

3. 유의사항
   - 계정 탈퇴 후 삭제된 개인정보는 복구할 수 없습니다.
   - 이용자가 기기에 직접 저장한 Excel 내보내기 파일, 스크린샷, 백업 파일 등은 회사가 삭제할 수 없으므로 이용자가 직접 관리해야 합니다.
   - 탈퇴 전 필요한 데이터는 내보내기 기능으로 백업할 수 있습니다.

제8조 (개인정보의 제3자 제공)
회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다.

1. 이용자가 사전에 동의한 경우
2. 법령에 특별한 규정이 있거나 수사기관, 감독기관 등이 법령에 정해진 절차와 방법에 따라 요구하는 경우
3. 통계 작성, 서비스 분석 등을 위하여 특정 개인을 알아볼 수 없는 형태로 처리하여 제공하는 경우

제9조 (개인정보 처리업무의 위탁 및 국외 이전)
회사는 서비스 제공을 위하여 아래와 같이 개인정보 처리업무를 위탁하거나 국외로 이전할 수 있습니다.

1. Supabase Inc.
   - 업무 내용: 클라우드 데이터베이스, 인증, 스토리지, Edge Functions 등 서비스 인프라 제공
   - 처리 항목: 회원 식별 정보, 프로필 정보, 경조사 기록, 거래 내역, 카테고리 정보, 디바이스 토큰, 알림 관련 정보
   - 이전 국가: 미국, 싱가포르 등 회사가 이용하는 Supabase 인프라 소재 국가
   - 이전 일시 및 방법: 회원가입, 로그인, 서비스 이용 시 네트워크를 통한 전송
   - 보유 및 이용 기간: 회원 탈퇴 시 또는 위탁계약 종료 시까지

2. Google LLC - Firebase
   - 업무 내용: 앱 분석, 오류 추적, 성능 모니터링, 푸시 알림 전송
   - 처리 항목: 앱 사용 통계, 오류 로그, 성능 데이터, 기기 정보, FCM 디바이스 토큰, 알림 관련 정보
   - 이전 국가: 미국 등 Google 인프라 소재 국가
   - 이전 일시 및 방법: 앱 실행, 오류 발생, 알림 발송 등 서비스 이용 시 네트워크를 통한 전송
   - 보유 및 이용 기간: 회원 탈퇴 시, SDK 설정에 따른 보관 기간 만료 시 또는 위탁계약 종료 시까지

3. Google LLC - Google AdMob
   - 업무 내용: 모바일 광고 표시, 광고 성과 측정, 광고 빈도 관리
   - 처리 항목: 광고 식별자, 광고 요청 및 노출 관련 정보, 기기 정보, 광고 상호작용 정보
   - 이전 국가: 미국 등 Google 인프라 소재 국가
   - 이전 일시 및 방법: 광고 요청 및 노출 시 네트워크를 통한 전송
   - 보유 및 이용 기간: Google 정책 및 이용자 기기 광고 설정에 따름

4. 소셜 로그인 제공자
   - 대상: 카카오, Apple 등 이용자가 선택한 로그인 제공자
   - 업무 내용: 소셜 로그인 인증 및 계정 연동
   - 처리 항목: 소셜 로그인 식별자, 인증 토큰 관련 정보, 제공자가 전달하는 기본 프로필 정보

이용자는 개인정보 국외 이전을 거부할 수 있습니다. 다만, Supabase, Firebase 등은 서비스 제공에 필요한 인프라이므로 국외 이전을 거부하는 경우 회원가입, 로그인, 데이터 저장, 푸시 알림 등 서비스 이용이 제한될 수 있습니다.

제10조 (행태정보 및 광고 식별자 처리)
회사는 Google AdMob, Firebase Analytics 등을 통해 앱 이용 행태, 광고 요청 및 노출 정보, 광고 식별자 등을 처리할 수 있습니다.

1. 처리 목적: 광고 제공, 광고 성과 측정, 광고 빈도 관리, 서비스 이용 분석
2. 처리 항목: 광고 식별자, 앱 사용 이벤트, 광고 요청 및 노출 정보, 기기 정보
3. 보유 및 이용 기간: 각 SDK 제공자의 정책 및 이용자 기기 설정에 따름
4. 이용자 통제 방법:
   - Android: 설정 > 개인정보 보호 > 광고 > 광고 ID 재설정 또는 광고 개인 최적화 제한
   - iOS: 설정 > 개인정보 보호 및 보안 > 추적 또는 Apple 광고 설정 변경

제11조 (개인정보의 안전성 확보조치)
회사는 개인정보의 안전성 확보를 위하여 다음과 같은 조치를 하고 있습니다.

1. 기술적 조치
   - 중요한 데이터의 암호화 저장 및 전송구간 암호화
   - 경조사 기록 중 상대방 이름, 장소, 메모 및 거래 설명의 AES-256 암호화 처리
   - 사용자별 암호화 키 및 접근 통제 적용
   - 인증 토큰 및 세션 관리
   - 오류 로그 및 접근 기록 점검

2. 관리적 조치
   - 개인정보 처리 담당자 최소화
   - 개인정보보호 책임자 지정
   - 개인정보 취급자 교육 및 권한 관리
   - 수탁자 관리·감독

3. 물리적 조치
   - 클라우드 인프라 제공자의 보안 정책 및 인증 체계를 확인하고, 접근 권한을 제한합니다.

제12조 (이용자와 법정대리인의 권리 및 행사 방법)
이용자는 언제든지 자신의 개인정보에 대하여 열람, 정정, 삭제, 처리정지, 동의 철회를 요청할 수 있습니다.

1. 앱 내 기능을 통한 행사
   - 프로필 수정
   - 경조사 기록 및 카테고리 삭제
   - 알림 설정 변경
   - 데이터 내보내기
   - 계정 탈퇴

2. 이메일을 통한 행사
   - 이메일: dev@aura-postproduction.com
   - 요청 시 본인 확인을 위해 필요한 최소한의 정보를 요청할 수 있습니다.

3. 회사는 관련 법령에 따라 이용자의 요청을 지체 없이 처리하며, 법령상 정당한 사유가 있는 경우 처리 제한 또는 거절 사유를 안내할 수 있습니다.

제13조 (데이터 내보내기 및 가져오기)
회사는 이용자가 자신의 데이터를 관리할 수 있도록 Excel 파일 형태의 데이터 내보내기 및 가져오기 기능을 제공할 수 있습니다.

1. 내보내기 항목: 경조사 기록, 거래 내역, 사용자 정의 카테고리, 프로필 정보
2. 가져오기 항목: 경조사 기록, 거래 내역, 사용자 정의 카테고리 등 서비스가 지원하는 항목
3. 내보내기 파일은 이용자의 기기에 저장되며, 회사는 이용자 기기에 저장된 파일의 보안 및 관리에 책임을 지지 않습니다.

제14조 (모바일 애플리케이션 접근 권한)
회사는 서비스 제공을 위해 다음 접근 권한을 요청할 수 있습니다.

1. 선택적 접근 권한
   - 알림: 경조사 일정, 서비스 공지, 월간 리포트 알림 등 푸시 알림 제공
   - 저장소 또는 파일 접근: Excel 파일 내보내기 및 가져오기 기능 제공

2. 선택적 접근 권한은 해당 기능 사용 시 허용을 요청하며, 허용하지 않아도 해당 기능 외의 서비스 이용은 가능합니다.

3. 접근 권한 변경 방법
   - Android: 설정 > 애플리케이션 > 마음장부 > 권한
   - iOS: 설정 > 마음장부 > 권한 설정

제15조 (아동의 개인정보 보호)
회사는 만 14세 미만 아동을 대상으로 서비스를 제공하지 않으며, 만 14세 미만 아동의 개인정보를 의도적으로 수집하지 않습니다. 만 14세 미만 아동의 개인정보가 수집된 사실을 확인한 경우 지체 없이 삭제 등 필요한 조치를 합니다.

제16조 (민감정보, 고유식별정보 및 가명정보 처리)
회사는 주민등록번호, 여권번호, 운전면허번호, 외국인등록번호 등 고유식별정보를 수집하지 않습니다. 또한 사상·신념, 노동조합·정당 가입, 건강정보 등 민감정보를 의도적으로 수집하지 않습니다.

이용자가 메모 등 자유 입력란에 민감정보 또는 타인의 개인정보를 입력하는 경우 회사가 이를 사전에 인지하기 어렵습니다. 이용자는 필요한 범위 내에서만 정보를 입력해야 하며, 회사는 삭제 요청이 있는 경우 관련 법령에 따라 조치합니다.

회사는 현재 가명정보를 별도로 생성하거나 결합하여 처리하지 않습니다. 향후 가명정보를 처리하는 경우 처리 목적, 항목, 보유기간 등을 본 방침에 공개합니다.

제17조 (자동화된 결정)
회사는 이용자에게 법적 효력 또는 이에 준하는 중대한 영향을 미치는 완전히 자동화된 결정을 수행하지 않습니다. 월간 리포트, 통계, 광고 노출 등은 서비스 편의와 정보 제공을 위한 기능이며, 이용자의 권리·의무에 중대한 영향을 미치는 자동화된 결정으로 사용하지 않습니다.

제18조 (개인정보 유출 등에 대한 조치)
회사는 개인정보의 분실, 도난, 유출, 위조, 변조 또는 훼손 사실을 알게 된 경우 관련 법령에 따라 지체 없이 이용자에게 알리고 관계기관에 신고하는 등 필요한 조치를 합니다.

통지 항목은 다음과 같습니다.
1. 유출 등이 된 개인정보 항목
2. 유출 등이 발생한 시점
3. 이용자가 취할 수 있는 조치
4. 회사의 대응 조치
5. 상담 및 피해구제 접수 부서와 연락처

제19조 (개인정보보호 책임자)
회사는 개인정보 처리에 관한 업무를 총괄하고, 개인정보 처리와 관련한 이용자의 불만처리 및 피해구제를 위하여 아래와 같이 개인정보보호 책임자를 지정하고 있습니다.

개인정보보호책임자
- 성명: 최원영
- 직책: CTO
- 전화번호: 010-2029-2579
- 이메일: dev@aura-postproduction.com

제20조 (권익침해 구제방법)
이용자는 개인정보 침해로 인한 구제를 받기 위하여 아래 기관에 상담 또는 분쟁해결을 신청할 수 있습니다.

1. 개인정보분쟁조정위원회: 1833-6972, www.kopico.go.kr
2. 개인정보침해신고센터: 118, privacy.kisa.or.kr
3. 대검찰청: 1301, www.spo.go.kr
4. 경찰청: 182, ecrm.police.go.kr
5. 중앙행정심판위원회: 110, www.simpan.go.kr

제21조 (개인정보처리방침의 공개 및 변경)
회사는 이용자가 언제든지 쉽게 확인할 수 있도록 본 방침을 앱 내 화면 또는 회사가 운영하는 웹페이지에 공개합니다.

본 방침은 법령, 지침, 서비스 정책, 처리하는 개인정보 항목의 변경에 따라 개정될 수 있습니다. 회사는 방침을 변경하는 경우 시행일, 변경 내용 및 사유를 앱 공지사항, 웹페이지, 이메일, 푸시 알림 등 적절한 방법으로 안내합니다.

중요한 변경이 있는 경우 시행일 최소 30일 전부터 안내하며, 그 밖의 변경은 시행일 최소 7일 전부터 안내합니다. 단, 이용자 권리 보호를 위해 긴급히 변경할 필요가 있는 경우에는 변경 후 지체 없이 안내할 수 있습니다.

부칙
본 개인정보처리방침은 2026년 5월 10일부터 시행합니다.`;

export default function Privacy() {
    const [activeTab, setActiveTab] = useState("v2");

    return (
        <Layout>
            <Head>
                <title>개인정보처리방침 - 아우라포스트프로덕션</title>
                <meta name="description" content="아우라포스트프로덕션 개인정보처리방침" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* 버전 탭 */}
                    <div className="flex gap-2 mb-4">
                        <button
                            onClick={() => setActiveTab("v2")}
                            className={`px-4 py-2 rounded-t-lg text-sm font-medium transition-colors ${
                                activeTab === "v2"
                                    ? "bg-white text-blue-600 border border-b-white border-gray-200 shadow-sm"
                                    : "bg-gray-100 text-gray-500 hover:text-gray-700"
                            }`}
                        >
                            현행 버전 (2026년 5월 10일)
                        </button>
                        <button
                            onClick={() => setActiveTab("v1")}
                            className={`px-4 py-2 rounded-t-lg text-sm font-medium transition-colors ${
                                activeTab === "v1"
                                    ? "bg-white text-gray-700 border border-b-white border-gray-200 shadow-sm"
                                    : "bg-gray-100 text-gray-500 hover:text-gray-700"
                            }`}
                        >
                            이전 버전 (2025년 10월 25일)
                        </button>
                    </div>

                    {/* 현행 버전 (v2) */}
                    {activeTab === "v2" && (
                        <div className="bg-white shadow-lg rounded-lg rounded-tl-none p-8">
                            <p className="text-blue-600 font-bold text-sm mb-1">{v2AppInfo.company}</p>
                            <h1 className="text-3xl font-bold text-gray-900 mb-6">
                                {v2AppInfo.name} 개인정보처리방침
                            </h1>

                            <div className="grid grid-cols-3 gap-3 mb-6">
                                <div className="border border-gray-200 rounded-lg p-3">
                                    <span className="block text-xs text-gray-500 mb-1">시행일</span>
                                    <span className="font-semibold text-gray-800">{v2AppInfo.effectiveDate}</span>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-3">
                                    <span className="block text-xs text-gray-500 mb-1">버전</span>
                                    <span className="font-semibold text-gray-800">{v2AppInfo.version}</span>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-3">
                                    <span className="block text-xs text-gray-500 mb-1">개인정보보호책임자</span>
                                    <span className="font-semibold text-gray-800">{v2AppInfo.privacyOfficer.name}</span>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                                <h2 className="text-base font-semibold text-blue-800 mb-3">주요 반영 내용</h2>
                                <ul className="list-disc pl-5 space-y-1.5 text-sm text-blue-900">
                                    {v2Summary.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="prose prose-lg max-w-none">
                                <pre className="whitespace-pre-wrap font-sans text-base text-gray-700 leading-relaxed">
                                    {v2Content}
                                </pre>
                            </div>

                            <div className="mt-10 pt-6 border-t border-gray-200">
                                <p className="text-sm text-gray-500 text-center">
                                    본 개인정보처리방침은 관련 법령, 지침 및 내부 운영정책의 변경에 따라 변경될 수 있습니다.
                                </p>
                                <p className="text-sm text-gray-500 text-center mt-1">
                                    © 2026 아우라포스트프로덕션 주식회사. All rights reserved.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* 이전 버전 (v1) */}
                    {activeTab === "v1" && (
                        <div className="bg-white shadow-lg rounded-lg rounded-tl-none p-8">
                            <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6 text-sm text-amber-800">
                                이 버전은 2025년 10월 25일부터 2026년 5월 9일까지 적용된 이전 개인정보처리방침입니다.
                            </div>

                            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                                개인정보처리방침
                            </h1>

                            <div className="prose prose-lg max-w-none">
                                <p className="text-sm text-gray-600 mb-8 text-right">
                                    시행일자: 2025년 10월 25일
                                </p>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제1조 (목적)</h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        아우라포스트프로덕션 주식회사(이하 &apos;회사&apos;라고 함)는 회사가 제공하는 마음장부 서비스(이하 &apos;회사 서비스&apos; 또는 &apos;서비스&apos;)를 이용하는 개인(이하 &apos;이용자&apos; 또는 &apos;개인&apos;)의 정보(이하 &apos;개인정보&apos;)를 보호하기 위해, 개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 &apos;정보통신망법&apos;) 등 관련 법령을 준수하고, 서비스 이용자의 개인정보 보호 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침(이하 &apos;본 방침&apos;)을 수립합니다.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제2조 (개인정보 처리의 원칙)</h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        개인정보 관련 법령 및 본 방침에 따라 회사는 이용자의 개인정보를 수집할 수 있으며 수집된 개인정보는 개인의 동의가 있는 경우에 한해 제3자에게 제공될 수 있습니다. 단, 법령의 규정 등에 의해 적법하게 강제되는 경우 회사는 수집한 이용자의 개인정보를 사전에 개인의 동의 없이 제3자에게 제공할 수도 있습니다.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제3조 (본 방침의 공개)</h2>
                                    <div className="text-gray-700 leading-relaxed space-y-2">
                                        <p>1. 회사는 이용자가 언제든지 쉽게 본 방침을 확인할 수 있도록 회사 홈페이지 첫 화면 또는 첫 화면과의 연결 화면, 모바일 애플리케이션 내를 통해 본 방침을 공개하고 있습니다.</p>
                                        <p>2. 회사는 제1항에 따라 본 방침을 공개하는 경우 글자 크기, 색상 등을 활용하여 이용자가 본 방침을 쉽게 확인할 수 있도록 합니다.</p>
                                    </div>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제4조 (본 방침의 변경)</h2>
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
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제5조 (개인정보의 수집 항목)</h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">회사는 마음장부 서비스 제공을 위하여 다음과 같은 개인정보를 수집합니다.</p>
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
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제6조 (개인정보 수집 방법)</h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">회사는 다음과 같은 방법으로 이용자의 개인정보를 수집합니다.</p>
                                    <div className="text-gray-700 leading-relaxed space-y-1">
                                        <p>1. 이용자가 회사의 모바일 애플리케이션에 자신의 개인정보를 입력하는 방식</p>
                                        <p>2. 소셜로그인 서비스(카카오, 애플 등)를 통한 연동 과정에서 해당 서비스로부터 제공받는 방식</p>
                                        <p>3. Supabase Auth 인증 시스템을 통한 회원가입 및 로그인 과정에서 수집하는 방식</p>
                                        <p>4. Firebase 서비스를 통한 자동 수집 방식</p>
                                        <p>5. 모바일 애플리케이션 이용 과정에서 자동으로 생성·수집되는 방식</p>
                                    </div>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제7조 (개인정보의 이용)</h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">회사는 개인정보를 다음 각 호의 경우에 이용합니다.</p>
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
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제8조 (개인정보의 보유 및 이용기간)</h2>
                                    <div className="text-gray-700 leading-relaxed space-y-2">
                                        <p>1. 회사는 이용자의 개인정보에 대해 개인정보의 수집·이용 목적 달성을 위한 기간 동안 개인정보를 보유 및 이용합니다.</p>
                                        <p>2. 전항에도 불구하고 회사는 내부 방침에 의해 서비스 부정이용기록은 부정 가입 및 이용 방지를 위하여 회원 탈퇴 시점으로부터 최대 1년간 보관합니다.</p>
                                        <p>3. 회원 탈퇴 시 이용자의 개인정보는 지체 없이 파기합니다. 단, 관계 법령에 따라 보존할 필요가 있는 경우 해당 법령에서 정한 기간 동안 보관합니다.</p>
                                    </div>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제9조 (법령에 따른 개인정보의 보유 및 이용기간)</h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">회사는 관계법령에 따라 다음과 같이 개인정보를 보유 및 이용합니다.</p>
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
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제10조 (개인정보의 파기원칙)</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        회사는 원칙적으로 이용자의 개인정보 처리 목적의 달성, 보유·이용기간의 경과 등 개인정보가 필요하지 않을 경우에는 해당 정보를 지체 없이 파기합니다.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제11조 (개인정보 파기절차)</h2>
                                    <div className="text-gray-700 leading-relaxed space-y-2">
                                        <p>1. 이용자가 회원가입 등을 위해 입력한 정보는 개인정보 처리 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기되어집니다.</p>
                                        <p>2. 회사는 파기 사유가 발생한 개인정보를 개인정보보호 책임자의 승인절차를 거쳐 파기합니다.</p>
                                    </div>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제12조 (개인정보 파기방법)</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        회사는 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제하며, 종이로 출력된 개인정보는 분쇄기로 분쇄하거나 소각 등을 통하여 파기합니다.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제13조 (광고성 정보의 전송 조치)</h2>
                                    <div className="text-gray-700 leading-relaxed space-y-2">
                                        <p>1. 회사는 전자적 전송매체를 이용하여 영리목적의 광고성 정보를 전송하는 경우 이용자의 명시적인 사전동의를 받습니다. 다만, 다음 각호 어느 하나에 해당하는 경우에는 사전 동의를 받지 않습니다.</p>
                                        <div className="ml-4 space-y-1">
                                            <p>가. 회사가 재화 등의 거래관계를 통하여 수신자로부터 직접 연락처를 수집한 경우, 거래가 종료된 날로부터 6개월 이내에 회사가 처리하고 수신자와 거래한 것과 동종의 재화 등에 대한 영리목적의 광고성 정보를 전송하려는 경우</p>
                                            <p>나. 「방문판매 등에 관한 법률」에 따른 전화권유판매자가 육성으로 수신자에게 개인정보의 수집출처를 고지하고 전화권유를 하는 경우</p>
                                        </div>
                                        <p>2. 회사는 전항에도 불구하고 수신자가 수신거부의사를 표시하거나 사전 동의를 철회한 경우에는 영리목적의 광고성 정보를 전송하지 않으며 수신거부 및 수신동의 철회에 대한 처리 결과를 알립니다.</p>
                                        <p>3. 회사는 오후 9시부터 그다음 날 오전 8시까지의 시간에 전자적 전송매체를 이용하여 영리목적의 광고성 정보를 전송하는 경우에는 제1항에도 불구하고 그 수신자로부터 별도의 사전 동의를 받습니다.</p>
                                    </div>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제14조 (개인정보 조회 및 수집동의 철회)</h2>
                                    <div className="text-gray-700 leading-relaxed space-y-2">
                                        <p>1. 이용자 및 법정 대리인은 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 개인정보수집 동의 철회를 요청할 수 있습니다.</p>
                                        <p>2. 이용자 및 법정 대리인은 자신의 가입정보 수집 등에 대한 동의를 철회하기 위해서는 개인정보보호책임자 또는 담당자에게 서면, 전화 또는 전자우편주소로 연락하시면 회사는 지체 없이 조치하겠습니다.</p>
                                    </div>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제15조 (개인정보 정보변경 등)</h2>
                                    <div className="text-gray-700 leading-relaxed space-y-2">
                                        <p>1. 이용자는 회사에게 전조의 방법을 통해 개인정보의 오류에 대한 정정을 요청할 수 있습니다.</p>
                                        <p>2. 회사는 전항의 경우에 개인정보의 정정을 완료하기 전까지 개인정보를 이용 또는 제공하지 않으며 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다.</p>
                                    </div>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제16조 (이용자의 의무)</h2>
                                    <div className="text-gray-700 leading-relaxed space-y-2">
                                        <p>1. 이용자는 자신의 개인정보를 최신의 상태로 유지해야 하며, 이용자의 부정확한 정보 입력으로 발생하는 문제의 책임은 이용자 자신에게 있습니다.</p>
                                        <p>2. 타인의 개인정보를 도용한 회원가입의 경우 이용자 자격을 상실하거나 관련 개인정보보호 법령에 의해 처벌받을 수 있습니다.</p>
                                        <p>3. 이용자는 이메일 주소, 비밀번호 등에 대한 보안을 유지할 책임이 있으며 제3자에게 이를 양도하거나 대여할 수 없습니다.</p>
                                    </div>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제17조 (회사의 개인정보 관리)</h2>
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
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제18조 (삭제된 정보의 처리)</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        회사는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된 개인정보는 회사가 수집하는 &quot;개인정보의 보유 및 이용기간&quot;에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제19조 (비밀번호의 암호화)</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        이용자의 비밀번호는 일방향 암호화하여 저장 및 관리되고 있으며, 개인정보의 확인, 변경은 비밀번호를 알고 있는 본인에 의해서만 가능합니다.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제20조 (해킹 등에 대비한 대책)</h2>
                                    <div className="text-gray-700 leading-relaxed space-y-2">
                                        <p>1. 회사는 해킹, 컴퓨터 바이러스 등 정보통신망 침입에 의해 이용자의 개인정보가 유출되거나 훼손되는 것을 막기 위해 최선을 다하고 있습니다.</p>
                                        <p>2. 회사는 최신 백신프로그램을 이용하여 이용자들의 개인정보나 자료가 유출 또는 손상되지 않도록 방지하고 있습니다.</p>
                                        <p>3. 회사는 만일의 사태에 대비하여 침입차단 시스템을 이용하여 보안에 최선을 다하고 있습니다.</p>
                                        <p>4. 회사는 민감한 개인정보를 암호화 통신 등을 통하여 네트워크상에서 개인정보를 안전하게 전송할 수 있도록 하고 있습니다.</p>
                                    </div>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제21조 (개인정보 처리 최소화 및 교육)</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        회사는 개인정보 관련 처리 담당자를 최소한으로 제한하며, 개인정보 처리자에 대한 교육 등 관리적 조치를 통해 법령 및 내부방침 등의 준수를 강조하고 있습니다.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제22조 (개인정보 유출 등에 대한 조치)</h2>
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
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제23조 (개인정보 유출 등에 대한 조치의 예외)</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        회사는 전조에도 불구하고 이용자의 연락처를 알 수 없는 등 정당한 사유가 있는 경우에는 회사의 홈페이지 또는 모바일 애플리케이션에 30일 이상 게시하는 방법으로 전조의 통지를 갈음하는 조치를 취할 수 있습니다.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제24조 (개인정보의 국외 이전)</h2>
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
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제25조 (개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항)</h2>
                                    <div className="text-gray-700 leading-relaxed space-y-2">
                                        <p>1. 회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용 정보를 저장하고 수시로 불러오는 개인정보 자동 수집장치(이하 &apos;쿠키&apos;)를 사용합니다.</p>
                                        <p>2. 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서 이용자는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.</p>
                                        <p>3. 다만, 쿠키의 저장을 거부할 경우에는 로그인이 필요한 회사의 일부 서비스는 이용에 어려움이 있을 수 있습니다.</p>
                                    </div>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제26조 (쿠키 설치 허용 지정 방법)</h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">웹브라우저 옵션 설정을 통해 쿠키 허용, 쿠키 차단 등의 설정을 할 수 있습니다.</p>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <div className="text-gray-700 space-y-1">
                                            <p>• Edge: 웹브라우저 우측 상단의 설정 메뉴 &gt; 쿠키 및 사이트 권한 &gt; 쿠키 및 사이트 데이터 관리 및 삭제</p>
                                            <p>• Chrome: 웹브라우저 우측 상단의 설정 메뉴 &gt; 개인정보 및 보안 &gt; 쿠키 및 기타 사이트 데이터</p>
                                            <p>• Whale: 웹브라우저 우측 상단의 설정 메뉴 &gt; 개인정보 보호 &gt; 쿠키 및 기타 사이트 데이터</p>
                                        </div>
                                    </div>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제27조 (모바일 애플리케이션의 접근 권한)</h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">회사는 마음장부 모바일 애플리케이션 이용 시 다음과 같은 접근 권한을 요청할 수 있습니다.</p>
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
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제28조 (회사의 개인정보 보호 책임자 지정)</h2>
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
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제29조 (권익침해에 대한 구제방법)</h2>
                                    <div className="text-gray-700 leading-relaxed space-y-2">
                                        <p>1. 정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다.</p>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <div className="text-gray-700 space-y-1">
                                                <p>가. 개인정보분쟁조정위원회: (국번없이) 1833-6972 (www.kopico.go.kr)</p>
                                                <p>나. 개인정보침해신고센터: (국번없이) 118 (privacy.kisa.or.kr)</p>
                                                <p>다. 대검찰청: (국번없이) 1301 (www.spo.go.kr)</p>
                                                <p>라. 경찰청: (국번없이) 182 (ecrm.cyber.go.kr)</p>
                                            </div>
                                        </div>
                                        <p>2. 회사는 정보주체의 개인정보자기결정권을 보장하고, 개인정보침해로 인한 상담 및 피해 구제를 위해 노력하고 있습니다.</p>
                                        <p>3. 개인정보 보호법 제35조, 제36조, 제37조의 규정에 의한 요구에 대하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.</p>
                                        <div className="ml-4">
                                            <p>가. 중앙행정심판위원회: (국번없이) 110 (www.simpan.go.kr)</p>
                                        </div>
                                    </div>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제30조 (개인정보의 제3자 제공)</h2>
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
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제31조 (개인정보 처리업무의 위탁)</h2>
                                    <div className="text-gray-700 leading-relaxed space-y-2">
                                        <p>1. 회사는 서비스 향상을 위해서 이용자의 개인정보를 외부에 위탁하여 처리할 수 있습니다.</p>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h3 className="font-semibold text-gray-800 mb-2">개인정보 처리 위탁 현황</h3>
                                            <div className="text-gray-700 space-y-1">
                                                <p>• 수탁업체: Supabase Inc., Google LLC (Firebase)</p>
                                                <p>• 위탁업무 내용: 클라우드 서비스 제공, 데이터베이스 관리, 인증 시스템 운영, 앱 분석, 오류 추적, 푸시 알림 전송</p>
                                                <p>• 위탁하는 개인정보 항목: 소셜로그인 정보, 프로바이더 ID, 디스플레이네임, 성별, 태어난 연도, 경조사 기록 정보, 앱 사용 통계, 오류 로그, 푸시 알림 토큰</p>
                                                <p>• 보유 및 이용기간: 회원 탈퇴 시 또는 위탁계약 종료 시까지</p>
                                            </div>
                                        </div>
                                        <p>2. 회사는 위탁계약 체결 시 개인정보보호법에 따라 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.</p>
                                        <p>3. 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체 없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.</p>
                                    </div>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제32조 (서비스 제공을 위한 인프라)</h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">회사는 마음장부 서비스를 안정적으로 제공하기 위해 다음의 인프라를 사용합니다.</p>
                                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                        <div className="text-gray-700 space-y-1">
                                            <p>1. 인증 및 데이터베이스: Supabase (미국, 싱가포르 등)</p>
                                            <p>2. 앱 분석 및 오류 추적: Firebase (Google LLC)</p>
                                            <p>3. 푸시 알림: Firebase Cloud Messaging (FCM)</p>
                                            <p>4. 광고 서비스: Google AdMob</p>
                                            <p>5. 앱 배포: Google Play Store, Apple App Store</p>
                                        </div>
                                    </div>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제33조 (아동의 개인정보 보호)</h2>
                                    <div className="text-gray-700 leading-relaxed space-y-2">
                                        <p>1. 회사는 만 14세 미만 아동의 개인정보를 수집하지 않습니다.</p>
                                        <p>2. 만약 만 14세 미만 아동의 개인정보가 수집된 사실을 인지하게 되는 경우, 회사는 해당 정보를 즉시 삭제하는 등 필요한 조치를 취합니다.</p>
                                    </div>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제34조 (데이터 내보내기 및 가져오기)</h2>
                                    <div className="text-gray-700 leading-relaxed space-y-2">
                                        <p>1. 회사는 이용자가 자신의 개인정보를 관리할 수 있도록 Excel 파일 형태로 데이터를 내보내기 및 가져오기 기능을 제공합니다.</p>
                                        <p>2. 데이터 내보내기 시 다음 정보가 포함됩니다: 경조사 기록, 사용자 정의 카테고리, 프로필 정보</p>
                                        <p>3. 데이터 가져오기 시 파일 크기는 최대 10MB로 제한됩니다.</p>
                                        <p>4. 내보내기된 파일은 이용자의 디바이스에 저장되며, 회사는 해당 파일의 보안에 대한 책임을 지지 않습니다.</p>
                                    </div>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제35조 (계정 탈퇴 시 데이터 처리)</h2>
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
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">부칙</h2>
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
                    )}
                </div>
            </div>
        </Layout>
    );
}
