import { Header } from "./components/header/component";
import { Footer } from "./components/footer/component";
import { Restaurants } from "./components/restaurants/component"; //import { Restaurants } from "./components/restaurants/component.jsx";
import { restaurants } from "./constants/mock"; // - 

export const App = () => {
	return (
	  <div>
		<Header />
		<Restaurants restaurants = {restaurants} />
		<Footer />
	  </div>
	);
};  