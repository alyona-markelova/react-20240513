import { Dish } from "../dish/component.jsx";

export const Menu = ({menu}) => {
	return (
	  <div>
		<h3>Menu</h3>
		<ul>
		  {menu.map((dish) => ( //ключи выключили
			<li> 
			  <Dish dish={dish} />
			</li>
		  ))}
		</ul>
	  </div>
	);
};