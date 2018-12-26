<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ mes }}</h1>
    <h1 @click="addItem">派发{{ computedMsg }}</h1>
    <h2 @click="popWindow">{{isNumber}}</h2>
    <p>{{bar}}</p>
    <p>{{foo}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Inject, Emit, Watch, Prop, Vue } from 'vue-property-decorator';

@Component({
  /**
   * 声明调用的组件
   * **/
  components: {
  },
})
export default class HelloWorld extends Vue {
   @Inject () foo!:string
   @Inject () bar!:string

  /**
   *  接受父组件传递的参数
   * **/
  @Prop()
  private msg!: string;
  @Prop()
  private mes!: string;

  /**
   * 声明变量
   * **/
  isNumber:any = '123'

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
