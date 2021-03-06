const BLOG_URL = "http://blog.naver.com/h0661h";
const TITLE    = "한국건축설비누수";

exports.header = function(){
	
   //eader:function(){
	   
		const dataList = [
			{url:"/"              , menuNm:"홈"     },
			{url:"/company"       , menuNm:"회사소개"},
			{url:BLOG_URL         , menuNm:"시공사례"},
			{url:"/reqQuote"      , menuNm:"견적문의"}  
		  ];

		//console.log(">>sss dataList :"+JSON.stringify(dataList));

		let list = '<ul class="gnb">';
		dataList.forEach((data)=>{
			// console.log(">>>"+data.url+" : "+data.url);
			list += `<li><a href="${data.url}" ${data.url.indexOf('http') > -1 ? `target="_blank"` : ``} > ${data.menuNm}</a><span class="sub_menu_toggle_btn">하위 메뉴 토글 버튼</span></li>`
		});		
		list += '</ul>';


		return `
			<h1 class="logo">
				<a href="/">${TITLE}</a>
			</h1>
				<nav class="nav">
					${list}
				</nav>
			<span class="menu_toggle_btn">전체 메뉴 토글 버튼</span>
		`;
   
}

exports.footer = function(){

	return `
	<div class="py-5 mx-10 text-gray-300 text-xs">
     <div class="py-5 cursor-pointer" id="btnPrivacyOpen">개인정보처리방침</div>
		 <div class="pb-3 text-sm">한국건축설비누수</div>
		 <div class="pb-2">대표 : 허재균 | 사업자등록번호 : 122-14-63748</div>
		<div class="pb-4">주소 : 인천 부평구 부평동 191-10</div>
		<div >copyright&copy;${TITLE} all rights reserved.</div>
  </div> `
  + privacyModal();
}


function privacyModal(){
  return `
  <div class="modal hidden" id="privacyModal">
    <div class="md:w-2/3 sm:w-full rounded-lg shadow-lg bg-white my-3 modal-content">
        <div class="flex border-b border-gray-100 px-5 pt-3">
              <span class="font-bold text-lg py-2">개인정보 처리방침</span>
        </div>

        <div class="px-5 py-2 text-gray-600">
            
            <p class="py-5 leading-normal">한국건축설비누수(이하 ‘한국건축설비누수’라고 합니다)는 개인정보 보호법 및 정보통신망 이용촉진 및 정보보호 등에 관한 법률등 관련 법령에 따라 이용자의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립․공개합니다.
            </p>

            <h2 class="font-bold text-gray-700 text-lg py-2">1. 개인정보의 처리 목적</h2>
            <p class="py-2 leading-normal">한국건축설비누수는  다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.<br>
- 이용자 견적 의사 확인, 이용자 본인 식별·인증, 상담 및 방문견적 등 각종 서비스 제공을 위한 정보 제공,  약관 개정 등의 고지사항 전달, 분쟁조정을 위한 기록 보존, 민원처리 등 이용자 보호 및 서비스 운영, 서비스 이용기록과 접속 빈도 분석, 서비스 이용에 대한 통계, 서비스 분석 및 통계에 따른 맞춤 서비스 제공 및 광고 게재, 보안, 프라이버시, 안전 측면에서 이용자가 안심하고 이용할 수 있는 서비스 이용환경 구축 등
            </p>


            <h2 class="font-bold text-gray-700 text-lg py-2">2. 개인정보의 수집 항목</h2>
            <p class="py-2 leading-normal"><견적문의><br>
            - 필수항목 : 휴대전화번호, 이름<br>
            - 선택항목 : 이메일, 자택주소
            </p>

            <h2 class="font-bold text-gray-700 text-lg py-2">3. 개인정보의 보유 및 이용 기간</h2>
            <p class="py-2 leading-normal">① 한국건축설비누수는 정보주체로부터 개인정보를 수집할 때 동의 받은 개인정보 보유․이용기간 또는 법령에 따른 개인정보 보유․이용기간 내에서 개인정보를 처리․보유합니다.<br>

② 구체적인 개인정보 처리 및 보유 기간은 다음과 같습니다.<br>

- 전자상거래 등에서 소비자 보호에 관한 법률<br>

계약 또는 청약철회 등에 관한 기록: 5년 보관<br>
대금결제 및 재화 등의 공급에 관한 기록: 5년 보관<br>
소비자의 불만 또는 분쟁처리에 관한 기록: 3년 보관<br>

- 전자금융거래법<br>

전자금융에 관한 기록: 5년 보관<br>

<!-- - 통신비밀보호법

로그인 기록: 3개월 -->
            </p>

            <h2 class="font-bold text-gray-700 text-lg py-2">4. 정보주체와 법정대리인의 권리·의무 및 그 행사방법 이용자는 개인정보주체로써 다음과 같은 권리를 행사할 수 있습니다.</h2>
            <p class="py-2 leading-normal">① 정보주체는 한국건축설비누수에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.<br>
1. 개인정보 열람요구<br>
2. 오류 등이 있을 경우 정정 요구<br>
3. 삭제요구<br>
4. 처리정지 요구

            </p>

            <h2 class="font-bold text-gray-700 text-lg py-2">5. 개인정보의 파기 한국건축설비누수는 원칙적으로 개인정보 처리목적이 달성된 경우에는 지체없이 해당 개인정보를 파기합니다. 파기의 절차, 기한 및 방법은 다음과 같습니다.</h2>
              <p class="py-2 leading-normal">-파기절차<br>
이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다. 이 때, DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다.<br>

-파기기한<br>
이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는 보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을 때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일 이내에 그 개인정보를 파기합니다.
            </p>

          <h2 class="font-bold text-gray-700 text-lg py-2">6. 개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항</h2>
              <p class="py-2 leading-normal">① 한국건축설비누수 은 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠기(cookie)’를 사용합니다. ② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다. 가. 쿠키의 사용 목적 : 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다. 나. 쿠키의 설치•운영 및 거부 : 웹브라우저 상단의 도구>인터넷 옵션>개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다. 다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.
            </p>

          <h2 class="font-bold text-gray-700 text-lg py-2">7. 개인정보 보호책임자 작성</h2>
              <p class="py-2 leading-normal">① 한국건축설비누수는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
</p>

<p>
▶ 개인정보 보호책임자<br>
성명 :허재균<br>
직위 :대표<br>
연락처 :01075041822, h0661@naver.com,
</p>
<p>
▶ 개인정보 보호 담당부서<br>
부서명 :개발팀<br>
담당자 :허미숙<br>
연락처 :01091798723, altnr23@naver.com,
</p>

<p>
② 정보주체께서는 한국건축설비누수의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 한국건축설비누수는 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
</p>

            <h2 class="font-bold text-gray-700 text-lg py-2">8. 개인정보 처리방침 변경</h2>
              <p class="py-2 leading-normal">이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다<br>
- 개인정보처리방침 시행일자 : 2020-01-01
            </p>
   
        </div>

        <div class="px-5 py-4 flex justify-end">
          <button id="btnPrivacyClose" class="text-sm py-2 px-3 text-gray-500 hover:text-gray-600 transition duration-150">확인</button>
        </div>
    </div>
  </div>
`;
}

	