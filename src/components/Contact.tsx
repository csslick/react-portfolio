
export default function Contact() {

  const contact_info = {
    email: 'tailofmoon@naver.com',
    phone: '010-000-1234',
    address: '서울특별시 관악구 행운5길 15-5(봉천동) 08740',
    map: 'http://kko.to/cdKCU8trQx'
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-box">
          <h2>Contact</h2>
          <ul className="address">
            <li>
              <a href={`mailto:${contact_info.email}`}>{contact_info.email}</a><br/>
              <a href={`tel:${contact_info.phone}`}>{contact_info.phone}</a>
            </li>
            <li>
              <h4>Address</h4>
              <a
                target="_blank"
                href={contact_info.map}>{contact_info.address}</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
