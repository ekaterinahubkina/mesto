class Section {
    constructor({items, renderer}, containerSelector) {
        this._renderedInitialArray = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }
    renderItems() {
        this._renderedInitialArray.forEach(item => {
            this._renderer(item);
        });
    }

    addItem(element) {
        this._container.prepend(element);

    }
}

export default Section;