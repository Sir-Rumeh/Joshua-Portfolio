const Services = () => {
	return (
		<section id="services">
			<div className="container">
				<div className="roww">
					{/* Main Title */}
					<div className="resumo_fn_main_title">
						<h3 className="subtitle">Services</h3>
						<h3 className="title">What I Do</h3>
						<p className="desc">
							I help ambitious businesses like yours
							generate more profits by building awareness,
							driving web traffic, connecting with
							customers and growing overall sales.
						</p>
					</div>
					{/* /Main Title */}
					{/* Services List */}
					<div className="resumo_fn_service_list">
						<ul>
							<li>
								<div className="item">
									<div className="item_left">
										<h3>UI/UX Solutions</h3>
										<p>
											Design direction for
											business. Get your
											business on the next
											level. We help to create
											great experiences.
										</p>
									</div>
									<div className="item_right">
										<p>Starts from</p>
										<h3>$499</h3>
									</div>
								</div>
							</li>
						</ul>
					</div>
					{/* /Services List */}
				</div>
			</div>
		</section>
	);
};

export default Services;
