//以下内容为跟着视频敲得代码
var ViewModal = function() {
	// Modal,也就是数据
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	}
}

// apply Bindings
ko.applyBindings(new ViewModal());