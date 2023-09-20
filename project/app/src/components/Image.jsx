
const Image = ({pngImg, webImg, name}) => {
  return (
		<>
			<picture>
				<source srcSet={webImg} type='image/webp' />
				<img loading='lazy' src={pngImg} alt={name} />
			</picture>
		</>
  );
}

export default Image;