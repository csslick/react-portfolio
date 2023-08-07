import profile from '../assets/images/profile.jpg'

export default function Intro() {
  return (
    <section id="intro">
      <div className="intro_box1">
        <h1>
          <span>Hi,</span>
          <span>I'm Hae-sun,</span>
          <span>front-end developer</span>
        </h1>
        <p>창의적이고 열정적인 프론트 엔드 개발자로서 사용자 경험과 시각적 표현에 신경 쓰며 멋진 웹 앱을 만들기 위해 끊임없이 노력합니다. 새로운 기술과 트렌드를 익히며 성장하는 것을 즐기는 개발자입니다.</p>
        <a href='#works' className="btn btn-primary">see my projects</a>
      </div>
      <figure>
        <img src={profile} alt="profile" />
      </figure>
    </section>
  )
}
