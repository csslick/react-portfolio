import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const worksText = [
  {
    id: 1,
    title: "뉴스 포커스",
    desc: "React로 개발된 빠르고 직관적인 뉴스 웹앱. 다양한 주제별 실시간 뉴스 제공, 반응형 디자인. 간편하게 뉴스를 확인하고 스크랩할 수 있습니다.",
    img: '/images/work1.png',
    code: "/",
    url: "#",
  },
  {
    id: 2,
    title: "포토 갤러리",
    desc: "React로 개발된 포토 갤러리 앱. 다양한 필터로 사진을 꾸며보세요. 손쉬운 공유 기능과 편리한 저장 기능을 제공합니다. 사진을 편집하고 공유하는 재미를 느껴보세요!",
    img: '/images/work2.jpg',
    code: "/",
    url: "#",
  },
  {
    id: 3,
    title: "블로그",
    desc: "React로 개발된 블로그 웹앱. 차분한 분위기의 디자인과 편리한 블로깅 기능으로 사용자들의 글쓰기를 응원합니다. 블로그를 통해 여러 이야기를 나누고 공유하세요!",
    img: '/images/work3.jpg',
    code: "/",
    url: "#",
  },
  {
    id: 4,
    title: "디자인 포트폴리오",
    desc: "개인 포트폴리오 웹사이트입니다. 다양한 프로젝트와 작업물을 소개하며, 효과적인 디자인과 사용자 경험을 강조한 사이트입니다. 브라우징의 즐거움을 느껴보세요!",
    img: '/images/work4.jpg',
    code: "/",
    url: "#",
  },
  {
    id: 5,
    title: "디지털 아트 갤러리",
    desc: "디지털 아트 전시 웹사이트. 다양한 예술가들의 작품을 감상하고 컬렉션을 구성할 수 있습니다. 아름다운 UI와 반응형 레이아웃으로 모든 기기에서 최적의 시각적 경험을 제공합니다.",
    img: '/images/work5.jpg',
    code: "/",
    url: "#",
  },
  {
    id: 6,
    title: "점심 메뉴 고르기",
    desc: "점심메뉴 추천 웹앱. 매일 다양한 식당의 점심메뉴를 추천해드립니다. 빠르고 간편한 UI로 원하는 메뉴를 선택해보세요!",
    img: '/images/work6.jpg',
    code: "/",
    url: "#",
  },
]

export default function Works() {
  const worksBoxRef = useRef(null); // 1. 작품 전체 scroll 영역
  const itemRef = useRef<HTMLElement[]>([]); // 2. 개별작품 영역

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const horizontal:any = worksBoxRef.current;
    const item = itemRef.current;

    let scrollTween = gsap.to(item, {
      xPercent: -110 * (item.length), // 1. 가로 스크롤 범위 조절
      // ease: "none",
      scrollTrigger: {
        trigger: horizontal,
        start: "top 0px", // 2. 트리거 시작
        end: 'bottom 70px', // 3. 트리거 종료
        pin: true,  // 시작시 핀 고정
        scrub: 1,
        markers: true, // 테스트용
      },
    });

    return () => {
      scrollTween.kill();
    };
  }, [])

  return (
    <section id="works" ref={worksBoxRef}>
      <div className="container">
        <h2>Works</h2>
        <ul className="works-box">
          {
            worksText.map((work, i) => (
              <li 
                key={i} 
                ref={ el => {
                  if(el) itemRef.current[i] = el;
                }}
              >
                <div className="top-info">
                  <img src={work.img} alt={work.title} />
                  <h3>{work.title}</h3>
                  <p>{work.desc}</p>
                </div>
                <a href={work.url} className="btn-link">바로가기</a>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}
