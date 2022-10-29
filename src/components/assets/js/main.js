(function ($) {
    // Dynamic selected items
    function dynamicSelect() {
        $('#input-tags, #recommended').selectize({
            delimiter: ',',
            persist: false,
            create: function (input) {
                return{
                    value: input,
                    text: input
                }
            },
            render: {
                option_create: function (data, escape) {
                    return '<div class="create">أضف <strong>' + escape(data.input) + '</strong>&hellip;</div>';
                }
            }
        });
    }
    if ($('body').is('.new-branch, .new-kind')) {
        dynamicSelect();
    }

    // Sorting items by
    function sortItems() {
        let toggler = $('.sort-by .dropdown-toggle');
        let togglerText  = toggler.text();
        let sortList  = $('.sort-by .dropdown-item');
        let defaultText = $(sortList).first().text();
        toggler.text(togglerText + defaultText);
        $(sortList).on('click', function (e) {
            if (sortList.length != 0) {
                let nthChild = sortList.index(this) + 1;
                let childText = $('.sort-by .dropdown-item:nth-child(' + nthChild + ')').text();
                $(toggler).text(togglerText + childText);
            }
            e.preventDefault();
        });
    }(sortItems());

    function sortOrders() {
        let toggler = $('.orders-sort .dropdown-toggle');
        let togglerText  = toggler.text();
        let sortList  = $('.orders-sort .dropdown-item');
        let defaultText = $(sortList).first().text();
        toggler.text(togglerText + defaultText);
        $(sortList).on('click', function (e) {
            if (sortList.length != 0) {
                let nthChild = sortList.index(this) + 1;
                let childText = $('.orders-sort .dropdown-item:nth-child(' + nthChild + ')').text();
                $(toggler).text(togglerText + childText);
            }
            e.preventDefault();
        });

    }(sortOrders());

    function sortReservation() {
        let toggler = $('.reservation-sort .dropdown-toggle');
        let togglerText  = toggler.text();
        let sortList  = $('.reservation-sort .dropdown-item');
        let defaultText = $(sortList).first().text();
        toggler.text(togglerText + defaultText);
        $(sortList).on('click', function (e) {
            if (sortList.length != 0) {
                let nthChild = sortList.index(this) + 1;
                let childText = $('.reservation-sort .dropdown-item:nth-child(' + nthChild + ')').text();
                $(toggler).text(togglerText + childText);
            }
            e.preventDefault();
        });

    }(sortReservation());

})(jQuery);
