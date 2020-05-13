const BLOG_URL = "http://blog.naver.com/h0661h";

module.exports = {
	
	html:function(){
		 return  category_section()
           + introSection();
	}
  ,ceo:function(){
		 return  category_section()
           + ceoSection();
	}
  ,tech:function(){
		 return  category_section()
           + techSection();
	}
  ,equip:function(){
		 return  category_section()
           + equipSection();
	}
}
	
function category_section(){
	return `<section style="order:3;" class="category_section bg-indigo-dark h-50 p-8">
              <div class="container mx-auto py-8">
                <nav class="flex">
                  <a class="no-underline text-white py-3 px-4 font-medium mr-3 bg-indigo hover:bg-indigo-darker" href="/company">회사소개</a>
                  <a class="no-underline text-white py-3 px-4 font-medium mx-3 bg-indigo-darker hover:bg-indigo" href="/company?category=ceo">CEO인사말</a>
                  <a class="no-underline text-white py-3 px-4 font-medium mx-3 bg-indigo hover:bg-indigo-darker" href="/company?category=tech">기술자격보유현황</a>
                  <a class="no-underline text-white py-3 px-4 font-medium mx-3 bg-indigo-darker hover:bg-indigo" href="/company?category=equip">보유장비</a>          
              </nav>
          </div>
			</section>`;
}
        
function introSection(){
	return `<section style="order:4;" class="intro_section">
				
				<p>1. 한국건축설비누수는 가스2종 난방2종 전문건설업 등록업체이며 가스탐지기, 관로탐지기, 열화상카메라 등의 전문장비를 보유하고있는 누수탐지전문공사업체 입니다.</p>
        <p>2. 20여년 경력을 가지신 사장님이 상담 부터 시공 및 하자보수까지 모두 직접 해드립니다. 모든일에 책임감도 강하신 분이라 남들보다 꼼꼼히 처리합니다 </p>
        <p>3. 부부가 함께 출장나갑니다.<br>
                            여자 혼자사셔도 걱정마세요! 사장님이 시공하시고 사모님이 옆에서 친절히 설명드립니다. 사모님이 직접 운영하시는 블로그에서는 다양한 시공사례도 확인 하실수 있습니다. <br>
                           <a href="${BLOG_URL}" target="_blank" class="text-blue-500 underline font-semibold pt-2">한국건축설비누수 블로그 보러가기</a>
        </p>
        <p>4. 저희가 시공한 부분에서 하자가 발생한 경우 최대 2년까지 무료로 보수해드립니다. (방수 1년 / 배관 2년 )  <br>20년 동안 같은위치에서 일해오신 사장님은 어디 도망안갑니다</p>

		
			</section>`;
}


function ceoSection(){
	return `<section style="order:4;" class="ceo_section">
				<h2>안녕하십니까? 저희 홈페이지를 찾아주셔서 감사합니다.</h2>
				<h2>한국건축설비누수 허재균입니다.</h2>
				<p>20여년의 실무경험과 기술을 바탕으로 누수탐지 업계의 선두업체로 성실 시공과 책임있는 하자 보수로 고객 여러분께 꼼꼼한 누수공사 약속 드리겠습니다.
              감사합니다.
        </p>

			</section>`;
}

function techSection(){
	return `<section style="order:4;" class="tech_section">
       <div>기술자격현황</div>
      
			</section>`;
}

function equipSection(){
	return `<section style="order:4;" class="equip_section">
        <h2>보유장비</h2>
       <div>가스탐지기</div>
       <div>청음탐지기</div>
       <div>관로탐지기</div>
       <div>열화상카메라</div>
       <div>내시경카메라</div>
			
			</section>`;
}
	
	