Vue.component('cart',
    {
        template: `
            <div class="modal">
                <button v-on:click="onClick">close</button>
                <div class="cart-list"></div>
                    <card  v-for="item of list" v-on:click="onClick" v-on:cardaction="onRemove" :good="item" :key="item.id" :actionname="'Удалить'"></card>
            </div>
        `,
        props: ['list'],
        methods: {
            onClick() {
                this.$emit('cart-close')
            },
            onRemove(id) {
                this.$emit('removefromcart', id)
            }
        }
    }
)