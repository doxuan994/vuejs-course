Vue.component('simple-counter', {
    template: '<button v-on:click="counter += 1">{{counter}}</button>',
    data: function() {
        return {
            counter: 0
        }
    }
});


let Hello = {
    name: 'hello',
    props: {
        msg: {
            type: String,
            default: 'Hello World'
        },
        msg2: {
            type: [Number, String],
            default: 3
        },
        msg3: {
            type: Object,
            default: function() {
                return {
                    text: 'Goodbye'
                }
            }
        },
        msg4: {
            default: function() {
                return ' I am a funtion!'
            }
        }
    },
    template: '<h1>{{msg4}}</h1>',
    data() {
        return {

        }
    }
}


new Vue({
    el: "#app",
    components: {
        Hello
    },
    data: {

    },
});
