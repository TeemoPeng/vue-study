export default {
    // 最终渲染的结果： <a href='#/'>xxx</a>
    props: {
        to: {
            type: String,
            required: true
        }
    },
    render(createElement) {
        return createElement('a', { attrs: { href: '#' + this.to } }, this.$slots.default)
    }
}