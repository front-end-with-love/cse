var app = new Vue({
    el: '#app',
    data: {},
    computed: {},
    methods: {},
    mounted() {
        $('.configuration__select_long').select2({
            minimumResultsForSearch: -1,
            // dropdownAutoWidth : true
        }).on('select2:open', function () {
            // console.log('хуй')
            $('.select2-results__options').perfectScrollbar({
                // useBothWheelAxes: true,
                // minScrollbarLength: 40,
                // maxScrollbarLength: 40
                // suppressScrollX: true,
                // useBothWheelAxes: true,
                // maxScrollbarLength: 40
            });
        });
        $('.configuration__select_shot').select2({
            width: '105px',
            minimumResultsForSearch: -1,
            // dropdownAutoWidth : true
        });
    }
});