var app = new Vue({
    el: "#app",
    data: {
        list: [
            { id: 1, name: 'AirBus320neo', price: 12343435454, count: 1 },
            { id: 2, name: 'Boeing787X', price: 12332445545, count: 1 },
            { id: 3, name: 'AirBus748', price: 12332445545, count: 1 }
        ]
    },
    computed: {
        totalPrice: function() {
            var total = 0;
            for (var i = 0; i < this.list.length; i++) {
                var item = this.list[i];
                total += item.price * item.count;
            }
            //千位分隔符转换
            return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
        }
    },
    methods: {
        handleReduce: function(index) {
            if (this.list[index].count === 1) {
                return;
            } else {
                this.list[index].count--;
            }
        },
        handleAdd: function(index) {
            this.list[index].count++;
        },
        handleRemove: function(index) {
            this.list.splice(index, 1); //删除指定位置的元素
        }
    }
})