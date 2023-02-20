import Image from "next/image";

export default function Home() {

  return (
   <>
    <header className="topo-header">
      <nav className="navbar navbar-main navbar-expand-lg position-sticky top-0 navbar-light bg-white py-2 py-lg-1 px-0 border-bottom" id="navbar_main">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center gap-2">
            <Image
              src="/"
              alt="NxFy"
              width={84}
              height={56}
            />
          </a>
        </div>
      </nav>
    </header>
   </>
  )
}
