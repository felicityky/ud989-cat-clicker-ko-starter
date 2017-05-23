var initialCats = [
	{
		clickCount: 0,
		name: 'Tabby',
		imgSrc: 'img/1413379559_412a540d29_z.jpg',
		nickNames: ['Tabtab', 'T-Bone']
	},
	{
		clickCount: 0,
		name: 'Tiger',
		imgSrc: 'img/22252709_010df3379e_z.jpg',
		nickNames: ['Mr.T']
	},
	{
		clickCount: 0,
		name: 'Scaredy',
		imgSrc: 'img/4154543904_6e2428c421_z.jpg',
		nickNames: ['Tabitha Tab']
	},
	{
		clickCount: 0,
		name: 'Shadow',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		nickNames: ['Tabby Catty Cat']
	}
];
//分离Modal
var Cat = function(data) {
	// Modal,也就是数据
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.fullName = ko.computed(function() {
		if(this.clickCount() < 10) {
			return 'NewBorn';
		}
		else if(this.clickCount() >= 10 && this.clickCount() < 20) {
			return 'Infant';
		}
		else if(this.clickCount() >= 20 && this.clickCount() < 30) {
			return 'Teen';
		}else{
			return 'GrownCat';
		}
	},this);

	this.nickNames = data.nickNames;
}
var ViewModal = function() {
	var self = this;
	this.catList = ko.observableArray([]);
	initialCats.forEach(function(catItem){
		self.catList.push( new Cat(catItem) );
	});

	this.currentCat = ko.observable( this.catList()[0]);
	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};


	// this.changeCurrentCat = function(index) {
	// 	self.currentCat(self.catList()[index]);
	// };


};

// apply Bindings
ko.applyBindings(new ViewModal());