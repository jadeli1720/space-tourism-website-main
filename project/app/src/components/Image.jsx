
const Image = ({pngImg, webPImg, name}) => {
  return (
		<>
			<picture>
				{/* <source srcSet={webPImg} type='image/webp' /> */}
				<img loading='lazy' src={pngImg} alt={name} className="destination-image"/>
			</picture>
		</>
  );
}

export default Image;