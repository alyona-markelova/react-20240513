//import React from "react"; //
import { restaurants } from "../../constants/mock.js";
import { Restaurant } from "../restaurant/component.jsx";
	
export const Restaurants = ({restaurants}) => {
	return (
	  //<React.Fragment> //вспомогательный элемент самого реакта, в дом он не попадает/ полнная форма, если хотим на фрагмент повесить ключ! если без ключа, используем сокращённую форму <></>
	  <div> 
		{restaurants.map(restaurant => ( // см.39:53 ругается на ключи, - выключаем, пока они не нужны: disable ... for the entire file 
		  <Restaurant restaurant = {restaurant} />
		))}
	  </div>
	  //</React.Fragment>
	);
};	