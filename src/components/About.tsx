
export default function About() {

  const aboutText = [
    {
      title: "성장을 즐기는 개발자",
      desc: "나는 항상 자기주도적으로 문제를 해결하고 새로운 기술을 익히는데 즐거움을 느낍니다. 배움에 대한 열정으로 지식을 쌓으며 성장하는 모습을 보여드리고 싶습니다. 끊임없는 도전과 개발의 즐거움을 통해 저만의 발전을 이루고자 합니다.",
    },
    {
      title: "열정과 팀워크로 혁신을 이끄는 개발자",
      desc: "나는 프론트엔드 개발에 대한 끊임없는 열정과 팀워크를 가지고 있습니다. 새로운 기술과 트렌드를 학습하고, 팀원들과 협력하여 혁신적인 솔루션을 창출하는 것을 즐깁니다. 사용자 중심의 웹 경험을 위해 최선을 다하며, 함께 성장하고 발전하는 개발자로서 기여하고자 합니다.",
    },
    {
      title: "디자인과 기술의 융합 개발자",
      desc: "나는 디자인과 기술의 융합을 통해 창의적인 웹 애플리케이션을 개발하는 것을 즐깁니다. 사용자들에게 아름다운 UI/UX를 제공하면서도 기술적으로 혁신적인 서비스를 구현하고자 합니다. 디자인과 개발의 조합으로 독창적인 웹 경험을 제공하는데 주력하며, 끊임없는 탐구와 실험으로 새로운 가능성을 모색합니다.",
    },
];

  return (
    <section id="about" className="scroll-area">
      <div className="container">
        <h2>나를 소개합니다</h2>
        <ul className="about_text">
          {aboutText.map((about, i) => {
            return (
              <li key={i}>
                <h3>{i+1}. {about.title}</h3>
                <p>{about.desc}</p>
              </li>
            )
          }) }
        </ul>
      </div>
    </section>
  )
}
