new Vue({
    el: "#app",
    data: {
        msg: 'Hello World',
        htmlTxt: '<h2>I am a h2</h2>',
        age: 4,
        user: {
            name: "John Doe",
            email: 'jon@gmail.com'
        },
        url: 'https://www.google.com/',
        foo: true,
        users: [
            {name: "John Doe", email: "jon@gmail.com"},
            {name: "Bababa", email: "ba@gmail.com"},
            {name: "Mango", email: "mango@gmail.com"}
        ],
        user: {
            name: "John Doe", email: "jon@gmail.com"
        },
        status: false,
        active: 'expired',
        isActive: true,
        activeClass: 'active',
        errorClass: 'error',
        baseStyles: {
            activeColor: 'gold',
            fontSize: 30
        },
        errorStyles: {
            color: 'red',
            fontSize: '5em',
            textDecoration: 'underline'
        },
    },
    methods: {

    }
});
