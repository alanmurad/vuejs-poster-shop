new Vue({
	el: '#app',
	data: {
		total: 0,
		products: [
			{title: 'Product 1', id: 1, price: 9.99 },
			{title: 'Product 2', id: 2, price: 9.99 },
			{title: 'Product 3', id: 3, price: 9.99 }
		],
		cart: [],
		search: ""
	},
	methods: {
		addItem: function(product) {
			this.total += product.price;
			var found = false;
			for (var i = 0; i < this.cart.length; i++) {
				if (this.cart[i].id === product.id) {
					this.cart[i].qty++;
					found = true;
				}
			}
			if (!found) {
				this.cart.push({
					id: product.id,
					price: product.price,
					qty: 1
				});
			}
		},
		inc: function(item) {
			console.log("inc");
			item.qty++;
			this.total += item.price;
		},
		dec: function(item) {
			console.log("dec");
			item.qty--;
			this.total -= item.price;
			if (item.qty <= 0) {
				var i = this.cart.indexOf(item);
				this.cart.splice(i, 1);
			}
		},
		onSubmit: function() {
			console.log("Search");
		}
	},
	filters: {
		currency: function(price) {
			return "$".concat(price.toFixed(2));
		}
	}
});
