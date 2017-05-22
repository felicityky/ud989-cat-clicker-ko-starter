//以下内容为跟着视频敲得代码
var ViewModal = function() {
	// Modal,也就是数据
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	}
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

	this.nickNames = [
	{name: 'Tabtab'},
	{name: 'T-Bone'},
	{name: 'Mr.T'},
	{name:'Tabitha Tab Tabby Catty Cat'}
	];

}

// apply Bindings
ko.applyBindings(new ViewModal());