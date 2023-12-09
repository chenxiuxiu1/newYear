Vue.component('common-card', {
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    template: `
    <div class="common-card" >
    <div class="title" v-if="title">
    <van-icon name="hot" color="#b9242c" />
    <span class='text'>{{title}}</span>
    </div>
    <div class="card-body">
        <slot></slot>
    </div>
  </div>
    `
})

Vue.component('v-collapse', {
    props: {
        title: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: 'clock'
        }

    },
    data () {
        return {
            active: ""
        }
    },
    template: `
    <van-collapse v-model="active" accordion class="v-collapse">
    <van-collapse-item name="1">
        <template #title>
            <div class="custom-title">
                <van-icon :name="icon" color="#7a6dd6" />
                <span>
                   {{title}}
                </span>
            </div>
        </template>
        <div class="content">
          <slot></slot>
        </div>
    </van-collapse-item>
</van-collapse>
    `
})

Vue.directive('fix', {
    bind: function (el, binding, vnode) {
        // console.log(binding, 99999)
        const {
            direction,
            value
        } = binding.value
        el.style.position = 'sticky'
        el.style[direction] = value + 'px'
        el.style.zIndex = 999999999
    }
})