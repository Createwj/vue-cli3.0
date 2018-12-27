<template>
  <div class="hello">
    <h1 class="col">{{ msg }}</h1>
    <h1>{{ mes }}</h1>
    <h1 @click="addItem">派发{{ computedMsg }}</h1>
    <h2 @click="popWindow">{{isNumber}}</h2>
    <p>{{bar}}</p>
    <p>{{foo}}</p>

    <p>{{doneTodos}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Inject, Emit, Watch, Prop, Vue } from 'vue-property-decorator';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
@Component({
  /**
   * 声明调用的组件
   * **/
  components: {
  },
  /**
   * 过滤器
   * **/
  filters: {
      // capitalize: function(e){
      //     console.log('过滤器')
      //     return e
      // }
  },
  computed:{
    ...mapGetters([
      'doneTodos'
    ])
  },
  methods: {
    // mapmutations
    // ...mapMutations([
    //   'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
    // ]),
    // ...mapMutations({
    //   add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    // })


    // action
    //   ...mapActions([
    //   'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
    //
    //   // `mapActions` 也支持载荷：
    //   'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
    // ]),
    // ...mapActions({
    //   add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    // })
  }

})
export default class HelloWorld extends Vue {
   @Inject () foo!:string
   @Inject () bar!:string // 接受父组件 传递的参数 提升的组件之间的耦合性  并非良策s

  /**
   *   接受父组件传递的参数
   * **/
  @Prop()
  private msg!: string;
  @Prop()
  private mes!: string;

  /**
   * 声明变量
   * **/
  isNumber:any = '123'   // data使用ts声明数据类型

  /**
   * 监听变化
   * **/
  @Watch('isNumber', { immediate: true, deep: true })
  onIsMemberChanged(val: String, oldVal: String) {
    console.log('会员信息发生变化')
  }

  /**
   *  vue钩子函数
   * **/
  mounted () {
      console.log('dom加载完成')
      setTimeout(()=>{
          this.isNumber = '字符串'
      },4000)
  }

  /**
   * 计算属性
   * **/
  get computedMsg () {
    return '计算属性 ' + this.msg
  }


  /**
   *  事件
   * **/
  popWindow () {
      confirm('触发事件')
  }

  @Emit()
  addItem(){
      this.isNumber = Math.random().toString(36).substr(2)
  }

}
</script>
<style scoped lang="stylus">
.col
    color: blue
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
