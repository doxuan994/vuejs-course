new Vue({
    el: "#app",
    data: {
        msg: 'hello World',
        num: 5
    },
    filters: {
        uppercase(value) {
            if (!value) return '';
            value = value.toString();

            return value.toUpperCase();
        },
        capitalize(value) {
            if (!value) return '';
            value = value.toString();

            return value.charAt(0).toUpperCase() + value.slice(1);
        },
        double(value) {
            return value * 2;
        },
        currency(value) {
            return `$${value} USA`;
        }
    }
});
