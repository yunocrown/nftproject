import React , { useContext , useEffect } from 'react'
import classes from "./Explore.module.css"
import ProductCard from "../UI/ProductCard/ProductCard.jsx"
import productContext from "../../Contexts/ProductContext/productContext.js"

const Explore = () => {
	const { getAllProducts, allProducts } = useContext(productContext);
	useEffect(() => {
		getAllProducts();
	}, []);
	console.log(allProducts);
	return (
		<>
			<div className={classes.cart_container}>
				<h1 className={classes.cart_text}>
					Explore our Products ✨{/* <CartIcon />{" "} */}
				</h1>
				<div className={classes.cart_products}>
					{allProducts.length > 0 &&
						allProducts.map((p, i) => {
							return (
								<ProductCard
									key={i}
									id={p._id}
									image={p.image}
									name={p.title}
									price={p.price}
								/>
							);
						})}
				</div>
			</div>
		</>
	);
};

export default Explore