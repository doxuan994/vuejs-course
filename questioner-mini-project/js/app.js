new Vue({
    el: "#app",
    data: {
        question: '',
        answer: '',
        image: ''
    },
    watch: {
        question: function(newQuestion) {
            this.answer = 'Waiting for you to start typing...';
            this.getAnswer();
        },
    },
    methods: {
        getAnswer: _.debounce(function() {
            let vm = this;

            if (this.question.indexOf('?') === -1) {
                vm.answer = 'Question usually have a questionmark';
                return;
            }
            vm.answer = 'Thinking...';
            axios.get('https://yesno.wtf/api').then(function(response) {
                vm.answer = _.capitalize(response.data.answer);
                vm.image = response.data.image;
            }).catch(function(err) {
                vm.answer = 'Error: ' + err;
            });
        }, 500),


    }
});
