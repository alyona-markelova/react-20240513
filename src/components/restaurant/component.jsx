import { Reviews } from "../reviews/component.jsx";
import { Menu } from "../menu/component.jsx";

export const Restaurant = ({restaurant}) => {
	return (
		  <div>
			<h2>{restaurant.name}</h2>
			<Menu menu={restaurant.menu} />
			<Reviews reviews={restaurant.reviews} />
		  </div>
	);
};