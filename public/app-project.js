var app = new Vue({
    el: '#app',
    data: {},
    computed: {},
    methods: {
        // initSelect2: function () {
            // $('.configuration__select').select2();
        // }
    },
    mounted() {
        $('.configuration__select_long').select2({
            minimumResultsForSearch: -1
        });
        $('.configuration__select_shot').select2({
            width: '105px',
            minimumResultsForSearch: -1
        });
    }
});