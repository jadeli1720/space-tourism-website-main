import homeDesktop from '../assets/images/home/background-home-desktop.jpg';
import homeTablet from '../assets/images/home/background-home-tablet.jpg';
import homeMobile from '../assets/images/home/background-home-mobile.jpg';
import destinationDesktop from '../assets/images/destination/background-destination-desktop.jpg';
import destinationTablet from '../assets/images/destination/background-destination-tablet.jpg';
import destinationMobile from '../assets/images/destination/background-destination-mobile.jpg';
import crewDesktop from '../assets/images/crew/background-crew-desktop.jpg';
import crewTablet from '../assets/images/crew/background-crew-tablet.jpg';
import crewMobile from '../assets/images/crew/background-crew-mobile.jpg';
import techDesktop from '../assets/images/technology/background-technology-desktop.jpg';
import techTablet from '../assets/images/technology/background-technology-tablet.jpg';
import techMobile from '../assets/images/technology/background-technology-mobile.jpg';

const changeBackground = (pageName) => {
  let backgroundDesktop, backgroundTablet, backgroundMobile;

  //TODO: console.log() cleanup
  switch (pageName) {
		case 'homepage':
      console.log("homepage")
			backgroundDesktop = `url(${homeDesktop})`;
			backgroundTablet = `url(${homeTablet})`;
			backgroundMobile = `url(${homeMobile})`;
			break;

		case 'destinationPage':
      console.log('destination');
			backgroundDesktop = `url(${destinationDesktop})`;
			backgroundTablet = `url(${destinationTablet})`;
			backgroundMobile = `url(${destinationMobile})`;
			break;

		case 'crewPage':
      console.log('crew');
			backgroundDesktop = `url(${crewDesktop})`;
			backgroundTablet = `url(${crewTablet})`;
			backgroundMobile = `url(${crewMobile})`;
			break;

		case 'technologyPage':
      console.log('technology');
			backgroundDesktop = `url(${techDesktop})`;
			backgroundTablet = `url(${techTablet})`;
			backgroundMobile = `url(${techMobile})`;
			break;

		default:
			console.log('Error...');
			break;
  }

  document.documentElement.style.setProperty(
    '--background-desktop',
    backgroundDesktop
  );
  document.documentElement.style.setProperty(
		'--background-tablet',
		backgroundTablet
  );
  document.documentElement.style.setProperty(
		'--background-mobile',
		backgroundMobile
  );


}

export default changeBackground;
