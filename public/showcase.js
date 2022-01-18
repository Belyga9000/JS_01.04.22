Vue.component('showcase',
    {
        template: `
            <div class="goods-list">
                <card  v-for="item of list" :key="item.id" v-on:cardaction="onAdd" :good="item" :actionname="'Купить'"></card>
            </div>
        `,
        props: ['list'],
        methods: {
            onAdd(id) {
                console.log(id)
                this.$emit('addtocart', id)
            }
        },
    }
)