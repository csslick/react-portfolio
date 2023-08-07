const skillText = [
  {
      title: "코어 언어에 대한 기본기",
      text: "저는 HTML, CSS, SASS, JavaScript, jQuery, TypeScript 등의 코어 언어를 다루는 프론트엔드 개발자입니다. 웹 디자인과 사용자 경험을 개선하는데 열정을 갖고 있으며, 효율적이고 섬세한 코드 작성을 지향합니다. 새로운 기술과 트렌드를 익히고 항상 성장하며 멋진 웹 애플리케이션을 만들어내는 것이 목표입니다!",
      code: "https://github.com/webstoryboy/port2023-vite",
      view: "https://port2023-vite.netlify.app",
      tag: ["HTML", "CSS", "SASS", "JavaScript", "jQuery", "TypeScript"],
  },
  {
      title: "리액트 기반 웹 개발",
      text: "리액트 기반의 웹 애플리케이션 개발이 가능하며, 프론트엔드 개발 도구를 사용하여 빠르고 효율적인 개발 환경을 구축합니다. NPM을 활용하여 모듈 관리와 라이브러리 사용을 원활하게 처리합니다. 최신 웹 트렌드와 동향에 관심을 가지며, 사용자 경험에 중점을 두는 개발을 추구합니다.",
      code: "https://github.com/webstoryboy/port2023-vite",
      view: "https://port2023-vite.netlify.app",
      tag: ["React", "Vite.js", "NPM"],
  },
  {
      title: "프로젝트 운용 능력",
      text: "Git과 GitHub를 활용합니다. 기본적인 버전 관리와 브랜치 전략을 이해하고 있으며, 기본적인 협업 흐름을 따라 코드를 업로드하고 리뷰를 받을 수 있습니다. 더 많은 경험과 학습을 통해 실력을 향상시키고 있습니다.",
      code: "https://github.com/webstoryboy/port2023-vite",
      view: "https://port2023-vite.netlify.app",
      tag: ["git", "github"],
  },

];

export default function Skills() {
  return (
    <section id='skills'>
      <div className="container">
          <h2>Skills</h2>
          <div className="article-wrap">
            {
              skillText.map((skill, i) => (
                <article className="skill-item" key={i}>
                  <div className="">
                    <h3>{skill.title}</h3>
                    <p>{skill.text}</p>
                    {skill.tag.map((item, i) => (
                      <span key={i} className="tag">{item}</span>
                    ))}
                  </div>
                </article>
              ))
            }
          </div>{/* article-wrap */ }
      </div>
    </section>
  )
}
