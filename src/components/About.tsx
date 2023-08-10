import { aboutText } from '../data/constants';

export default function About() {

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
