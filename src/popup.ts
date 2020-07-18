interface Ipopup {
    width?: string;
    height?: string;
    title?: string;
    pos?: string;
    mask?: string;
    content?: () => {};
}

interface Icomponent {
    tempContiner: HTMLElement;
    init: () => void;
    template: () => void;
    handle: () => void;
}

function popup(options: Ipopup) {
    return new Popup(options)
}

class Popup implements Icomponent {
    tempContiner: HTMLElement;
    constructor(private settings: Ipopup) {
        this.settings = Object.assign({
            width: '100%',
            height: '100%',
            title: '',
            pos: 'center',
            mask: true,
            content: function () { },
        }, this.settings);
        this.init();
    }
    init() { }

    template() { }

    handle() { }
}