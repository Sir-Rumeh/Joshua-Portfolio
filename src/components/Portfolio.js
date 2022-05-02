import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSliderProps } from "../sliderProps";
import Modalbox from "./Modalbox";
const Portfolio = () => {
	const [modal, setModal] = useState(false);
	const [modalValue, setModalValue] = useState(null);
	return (
		<section id="portfolio">
			{modal && <Modalbox close={setModal} value={modalValue} />}
			<div className="container">
				<div className="roww">
					{/* Main Title */}
					<div className="resumo_fn_main_title">
						<div className="my__nav">
							<a href="#" className="prev">
								<span />
							</a>
							<a href="#" className="next">
								<span />
							</a>
						</div>
						<h3 className="subtitle">Portfolio</h3>
						<h3 className="title">Case Study</h3>
					</div>
					{/* /Main Title */}
				</div>
			</div>
			<div className="container noright">
				<div className="roww">
					<Swiper
						{...portfolioSliderProps}
						className="owl-carousel modal_items"
						data-from="portfolio"
					>
						<SwiperSlide
							className="item modal_item"
							data-index={1}
						>
							<a href="https://www.behance.net/gallery/126300069/Zenith-Bank-app-case-study-%28A-redesign-%29">
								<div className="img_holder">
									<img
										src="img/thumb/square.jpg"
										alt="image"
									/>
									<div
										className="abs_img"
										data-bg-img="img/portfolio/1.png"
									/>
								</div>
							</a>

							<div className="title_holder">
								<p>illustration, design</p>
								<h3>
									<a href="#">Zenith Bank App</a>
								</h3>
							</div>
							<div className="fn__hidden">
								<p className="fn__cat">
									illustration, design
								</p>
								<h3 className="fn__title">
									Zenith Bank App
								</h3>
								<div className="img_holder">
									<img
										src="img/thumb/square.jpg"
										alt="image"
									/>
									<div
										className="abs_img"
										data-bg-img=""
									/>
								</div>
								<p className="fn__desc">
									Sed ornare tellus a odio bibendum,
									at tristique sapien malesuada.
									Proin sagittis maximus accumsan.
									Class aptent taciti sociosqu ad
									litora torquent per conubia nostra,
									per inceptos himenaeos. Lorem ipsum
									dolor sit amet, consectetur
									adipiscing elit. Quisque gravida
									quam sit amet elit varius tempor.
									Pellentesque purus eros, blandit eu
									mollis vel, commodo eget orci.
									Proin vel hendrerit ex. Vivamus ut
									ex at nunc consectetur efficitur ut
									quis est. Proin posuere orci eget
									vulputate fringilla. Curabitur
									placerat massa eget efficitur
									cursus. Sed sollicitudin rhoncus
									blandit. Nam accumsan vestibulum
									enim. Sed rutrum eu leo
									pellentesque lobortis. Integer
									ornare fringilla arcu, eu mattis
									risus convallis in.
								</p>
							</div>
						</SwiperSlide>
						<SwiperSlide
							className="item modal_item"
							data-index={3}
						>
							<a href="https://www.behance.net/gallery/109906393/Luxdrip-app-Ux-case-study">
								<div className="img_holder">
									<img
										src="img/thumb/square.jpg"
										alt="image"
									/>
									<div
										className="abs_img"
										data-bg-img="img/portfolio/2.png"
									/>
								</div>
							</a>

							<div className="title_holder">
								<p>web, mobile, online</p>
								<h3>
									<a href="#">
										Luxdrip App Case Study
									</a>
								</h3>
							</div>
							<div className="fn__hidden">
								<p className="fn__cat">
									web, mobile, online
								</p>
								<h3 className="fn__title">
									Luxdrip App Case Study
								</h3>
								<a href="https://www.behance.net/gallery/109906393/Luxdrip-app-Ux-case-study">
									<div className="img_holder">
										<img
											src="img/thumb/square.jpg"
											alt="image"
										/>
										<div
											className="abs_img"
											data-bg-img=""
										/>
									</div>
								</a>

								<p className="fn__desc">
									Sed ornare tellus a odio bibendum,
									at tristique sapien malesuada.
									Proin sagittis maximus accumsan.
									Class aptent taciti sociosqu ad
									litora torquent per conubia nostra,
									per inceptos himenaeos. Lorem ipsum
									dolor sit amet, consectetur
									adipiscing elit. Quisque gravida
									quam sit amet elit varius tempor.
									Pellentesque purus eros, blandit eu
									mollis vel, commodo eget orci.
									Proin vel hendrerit ex. Vivamus ut
									ex at nunc consectetur efficitur ut
									quis est. Proin posuere orci eget
									vulputate fringilla. Curabitur
									placerat massa eget efficitur
									cursus. Sed sollicitudin rhoncus
									blandit. Nam accumsan vestibulum
									enim. Sed rutrum eu leo
									pellentesque lobortis. Integer
									ornare fringilla arcu, eu mattis
									risus convallis in.
								</p>
								<p className="fn__desc">
									Quisque dui metus, eleifend at enim
									ac, imperdiet sagittis dolor.
									Vestibulum ipsum quam, feugiat non
									velit sit amet, pulvinar varius
									nisl. Mauris tristique, ipsum sit
									amet lacinia congue, mauris magna
									tempus nibh, in mollis eros enim a
									tortor. Morbi enim arcu, tristique
									vitae mi nec, hendrerit pharetra
									metus. Phasellus id feugiat purus.
									In vel elit eu lacus ultrices
									feugiat. Etiam at aliquet mi. Nunc
									sit amet libero sit amet lectus
									pellentesque sagittis. Curabitur
									blandit ante quis erat dapibus
									viverra. Maecenas consequat
									pulvinar pulvinar. Donec in aliquam
									arcu. Donec eu laoreet dolor. Ut
									nisi lectus, pulvinar ac mattis
									quis, pretium ac nulla. Morbi sed
									ligula ultrices, ornare mauris id,
									auctor arcu. Sed pellentesque ex
									sed erat faucibus, ultrices
									vehicula ex dapibus. Aenean
									venenatis metus eros, vel faucibus
									lorem porttitor eu.
								</p>
							</div>
						</SwiperSlide>
						<SwiperSlide
							className="item modal_item"
							data-index={1}
						>
							<a href="https://www.behance.net/gallery/125221615/ProBikes-AR-shop-%28UX-Case-study%29">
								<div className="img_holder">
									<img
										src="img/thumb/square.jpg"
										alt="image"
									/>
									<div
										className="abs_img"
										data-bg-img="img/portfolio/6.png"
									/>
								</div>
							</a>

							<div className="title_holder">
								<p>illustration, design</p>
								<h3>
									<a href="#">ProBikes AR Shop</a>
								</h3>
							</div>
							<div className="fn__hidden">
								<p className="fn__cat">
									illustration, design
								</p>
								<h3 className="fn__title">
									ProBikes AR Shop
								</h3>
								<a href="https://www.behance.net/gallery/125221615/ProBikes-AR-shop-%28UX-Case-study%29">
									<div className="img_holder">
										<img
											src="img/thumb/square.jpg"
											alt="image"
										/>
										<div
											className="abs_img"
											data-bg-img=""
										/>
									</div>
								</a>

								<p className="fn__desc">
									Sed ornare tellus a odio bibendum,
									at tristique sapien malesuada.
									Proin sagittis maximus accumsan.
									Class aptent taciti sociosqu ad
									litora torquent per conubia nostra,
									per inceptos himenaeos. Lorem ipsum
									dolor sit amet, consectetur
									adipiscing elit. Quisque gravida
									quam sit amet elit varius tempor.
									Pellentesque purus eros, blandit eu
									mollis vel, commodo eget orci.
									Proin vel hendrerit ex. Vivamus ut
									ex at nunc consectetur efficitur ut
									quis est. Proin posuere orci eget
									vulputate fringilla. Curabitur
									placerat massa eget efficitur
									cursus. Sed sollicitudin rhoncus
									blandit. Nam accumsan vestibulum
									enim. Sed rutrum eu leo
									pellentesque lobortis. Integer
									ornare fringilla arcu, eu mattis
									risus convallis in.
								</p>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
			<div className="container">
				<div className="roww">
					{/* Main Title */}
					<div className="resumo_fn_main_title">
						<div className="my__nav">
							<a href="#" className="prev">
								<span />
							</a>
							<a href="#" className="next">
								<span />
							</a>
						</div>
						<br />
						<br />
						<br />
						<br />
						<h3 className="title">Featured Projects</h3>
					</div>
					{/* /Main Title */}
				</div>
			</div>
			<div className="container noright">
				<div className="roww">
					<Swiper
						{...portfolioSliderProps}
						className="owl-carousel modal_items"
						data-from="portfolio"
					>
						<SwiperSlide
							className="item modal_item"
							data-index={4}
						>
							<a href="https://www.behance.net/Kingjashua">
								<div className="img_holder">
									<img
										src="img/thumb/square.jpg"
										alt="image"
									/>
									<div
										className="abs_img"
										data-bg-img="img/portfolio/4.jpg"
									/>
								</div>
							</a>

							<div className="title_holder">
								<p>mobile, design</p>
								<h3>
									<a href="#">Movie App UI Design</a>
								</h3>
							</div>
						</SwiperSlide>
						<SwiperSlide
							className="item modal_item"
							data-index={2}
						>
							<a href="https://www.behance.net/Kingjashua">
								<div className="img_holder">
									<img
										src="img/thumb/square.jpg"
										alt="image"
									/>
									<div
										className="abs_img"
										data-bg-img="img/portfolio/3.jpg"
									/>
								</div>
							</a>

							<div className="title_holder">
								<p>design, vector</p>
								<h3>
									<a href="#">
										Crypto App UI Design
									</a>
								</h3>
							</div>
						</SwiperSlide>
						<SwiperSlide
							className="item modal_item"
							data-index={5}
						>
							<a href="https://www.behance.net/Kingjashua">
								<div className="img_holder">
									<img
										src="img/thumb/square.jpg"
										alt="image"
									/>
									<div
										className="abs_img"
										data-bg-img="img/portfolio/5.png"
									/>
								</div>
							</a>

							<div className="title_holder">
								<p>mobile, design</p>
								<h3>
									<a href="#">Ear1 Hero Page</a>
								</h3>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
