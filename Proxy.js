function createSubject() {

    const subject = {
        hello: () => "hello",
        goodbye: () => "goodbye"
    };

    return subject;
}


function createProxy(subject) {
    const proto = Object.getPrototypeOf(subject);

    console.log(proto);

    function Proxy(subject) {
        this.subject = subject;
    }

    Proxy.prototype = Object.create(proto);


    Proxy.prototype.hello = function () {
        return this.subject.hello() + "world";
    }

    Proxy.prototype.goodbye = function () {
        return this.subject.goodbye.apply(this.subject, arguments);
    }

    return new Proxy(subject);
}

const p = createProxy(createSubject());
console.log(p.hello());
console.log(p.goodbye());

