
export default function Footer() {

  const footer_info = {
    year: '2023',
    author: 'Michael Kwon',
  }

  return (
    <footer>
      <div className="container">
        <p>&copy; {footer_info.year}, <span>{footer_info.author}</span></p>
      </div>
    </footer>
  )
}
