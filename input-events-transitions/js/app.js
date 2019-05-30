new Vue({
    el: "#app",
    data: {
        msg: '',
        checked: false,
        checkedNames: [],
        radioPicks: '',
        selected: '',
        selectedOpt: '',
        options: [
            {text: 'One', value: 'A'},
            {text: 'Two', value: 'B'},
            {text: 'Three', value: 'C'}
        ],
        counter: 0
    },
    methods: {
        greet: function(greeting, event) {
            // alert(greeting);

            console.log(event.target.className);
        },
        keypress: function(event) {
            console.log("Pressed");

            console.log(event.target.value);
        },
        keySubmit: function(event) {
            console.log("Enter Hit....");
        },
        formSubmit: function() {
            alert(this.msg);
        }
    }
});
