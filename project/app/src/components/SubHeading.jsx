const SubHeading =({number, heading}) => {
  return (
		<h2 className='page-title'>
			<span className=''>0{number}</span>
			{heading}
		</h2>
  );
}

export default SubHeading;