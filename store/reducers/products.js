const initialState = {
	products: [
		{
			name: 'Iced Latte',
		},
		{
			name: 'Doubleshot Iced Coffee',
		},
		{
			name: 'Doubleshot Vanilla Iced Coffee',
		},
		{
			name: 'Caramel Macchiato',
		},
		{
			name: 'Iced Caramel Macchiato',
		},
		{
			name: 'Iced Cappuccino',
		},
		{
			name: 'Ristretto Bianco',
		},
		{
			name: 'Cold Brew Latte',
		},
		{
			name: 'Mocha',
		},
		{
			name: 'Iced Mocha',
		},
		{
			name: 'Americano',
		},
		{
			name: 'Iced Americano',
		},
		{
			name: 'Café Filtre',
		},
		{
			name: 'Café Filtre Glacé',
		},
		{
			name: 'Chocolat Viennois Signature',
		},
		{
			name: 'Chocolat Viennois Signature Glacé',
		},
	],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_PRODUCT':
			const updatedProducts = state.products.unshift({
				name: action.product,
			});
			console.log(`action.product =>`, action.product);
			console.log(`updatedProducts =>`, updatedProducts);
			return {
				...state,
				products: updatedProducts,
			};
		default:
			return state;
	}
};
