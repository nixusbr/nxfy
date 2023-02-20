import HeaderDocs from "../docs/header";

export default function FourOhFour() {

	return (
		<>
			<HeaderDocs />
			<main id="main" className="site-main main">
				<section className="section">
					<div className="container">
						<div className="row">
							<section className="hero w-100 text-center py-5">
								<div className="container mt-5">
									<h1 className="display-1 mb-1">404! 😭</h1>
									<h5 className="text-gray-soft text-regular">There doesn&apos;t seem to be a page here.</h5>
									<a className="btn btn-brand mt-4" href="/docs">Back to homepage</a>
								</div>
							</section>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}




