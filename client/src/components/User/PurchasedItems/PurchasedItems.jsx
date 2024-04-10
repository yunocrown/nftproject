import React, { useEffect, useContext } from "react";
import classes from "./PurchasedItems.module.css";

import Card from "../../UI/Card/Card.jsx";
import ProductCard from "../../UI/ProductCard/ProductCard.jsx";
import productContext from "../../../Contexts/ProductContext/productContext.js";

const PurchasedItems = () => {
	const { getPurchasedProducts, purchasedProducts } =
		useContext(productContext);

	useEffect(() => {
		getPurchasedProducts();
		console.log(purchasedProducts);
	}, []);

	return (
		<>
			<div className={classes.purchased_products}>
				<h1 className={classes.text}>Purchased Items</h1>
				<Card smooth width="auto" height="auto">
					<div className={classes.cards_container}>
						{purchasedProducts.map((product, index) => {
							return (
								<ProductCard
									key={index}
									id={product._id}
									image={product.image}
									name={product.title}
									price={product.price}
								/>
							);
						})}
					</div>
				</Card>
			</div>
		</>
	);
};

export default PurchasedItems;
