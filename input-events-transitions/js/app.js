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
        ]
    }
});
