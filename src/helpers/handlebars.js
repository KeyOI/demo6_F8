const Handlebars = require('handlebars');

module.exports = {
    sum(a, b) {
        return a + b;
    },
    sortable: (field, sort) => {
        const sortType = field === sort.column ? sort.type : 'default';

        const icons = {
            default: 'bi bi-funnel-fill',
            asc: 'bi bi-sort-down',
            desc: 'bi bi-sort-up',
        };

        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc',
        };

        const icon = icons[sortType];
        const type = types[sortType];
        // html escaping
        // bảo vệ các tập lệnh chuyền đến trang thông qua đường url
        // ex; [http://localhost:3000/me/stored/courses?_sort&column=updatedAt&type=<script><a>autoAttack</a></script>]
        // [<script><a>autoAttack</a></script>] được truyền thông qua url tạo thẻ a
        const href = Handlebars.escapeExpression(
            `?_sort&column=${field}&type=${type}`,
        );
        const output = `<a href="${href}"><i class="${icon} " style="color: cornflowerblue;"></i> </a>`;

        return new Handlebars.SafeString(output);
    },
    // convert Eastern Standard Time (EST) to ('yyyy-MM-dd hh:mm:ss')
    prettifyDate(timestamp) {
        return new Date(timestamp);
    },
};
