import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { worksText } from "../data/constants";

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
        // markers: true, // 테스트용
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
