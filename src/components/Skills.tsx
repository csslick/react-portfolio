import { skillText } from "../data/constants"

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
