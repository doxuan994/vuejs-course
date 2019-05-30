new Vue({
    el: "#app",
    data: {
        firstName: 'John',
        lastName: 'Doe'
    },
    // watch: {
    //     firstName: function(value) {
    //         this.fullName = value + ' ' + this.lastName;
    //     },
    //     lastName: function(value) {
    //         this.fullName = this.firstName + ' ' + value;
    //     }
    // },
    computed: {
        // fullName: function() {
        //     return this.firstName + ' ' + this.lastName;
        // }
        fullName: {
            get: function() {
                return this.firstName + ' ' + this.lastName;
            },
            set: function(value) {
                let names = value.split(' ');
                this.firstName = names[0];
                this.lastName = names[names.length - 1];
            }
        }
    }
});
