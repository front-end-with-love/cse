var app = new Vue({
    el: '#app',
    data: {},
    computed: {},
    methods: {},
    mounted() {
        $('.configuration__select_long').select2({
            minimumResultsForSearch: -1,
        }).on("select2:open", function () {
            $('.select2-results__options').perfectScrollbar();
        });
        $('.configuration__select_shot').select2({
            width: '105px',
            minimumResultsForSearch: -1
        });
    }
});