import Search from '../Search'

export default function Header() {
  return (
    <header>
      <div className="container mx-auto px-4 sm:px-6 lg:px-14 pt-20 md:pt-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <a href="#" className="text-2xl font-bold">
            QWERy
          </a>
          <nav>
            <ul className="flex space-x-12">
              <li>
                <a
                  className="text-base hover:opacity-50 transition-opacity"
                  href="#"
                >
                  Information
                </a>
              </li>
              <li>
                <a
                  className="text-base hover:opacity-50 transition-opacity"
                  href="#"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="text-base hover:opacity-50 transition-opacity"
                  href="#"
                >
                  Culture
                </a>
              </li>
            </ul>
          </nav>
          <Search />
        </div>
      </div>
    </header>
  )
}
