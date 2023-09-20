const SubHeading =({number, heading}) => {
  return(
    <h2>
      <span className="subheading-number">0{number}</span>
      {heading}
    </h2>
  )
}