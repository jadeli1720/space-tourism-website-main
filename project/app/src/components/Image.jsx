
const Image = ({pngImg, webPImg, name, page}) => {

	// TODO: may want to add height and width of @each image to data.json image{} and then pass it through props. 
	
  return (
		<>
			<picture>
				<source srcSet={webPImg} type='image/webp' />
				<img loading="lazy" src={pngImg} alt={name} className={`${page}-image`}/>
			</picture>
		</>
  );
}

export default Image;