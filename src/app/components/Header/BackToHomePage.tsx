import Link from 'next/link'

const BackToHomePage: React.FC = () => (
  <Link
    className="max-sm:absolute max-sm:top-1/2 max-sm:left-1/2 max-sm:transform max-sm:-translate-x-1/2 max-sm:-translate-y-1/2"
    href="/"
  >
    <span className="font-extrabold font-heading text-xl sm:text-2xl">VC</span>
  </Link>
)

export default BackToHomePage
