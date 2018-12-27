### vue-property-decorator 基本使用

##### @Emit
    派发事件
##### @Inject

##### @Model

##### @Prop
    接受父组件的参数
##### @Provide

##### @Watch
    监听变化
    高级用法 immediate deep
    immediate  最初绑定的时候就去执行
    deep  深度检测 对象的属性是否发生变化
##### @Component
    声明组件

### vue-property-decorator 和 vue-class-component 有什么区别？

vue class component 是vue 官方出的
vue property decorator 是社区出的


其中vue class component 提供了 vue component 等等
vue property decorator 深度依赖了 vue class component 拓展出了很多操作符 @Prop @Emit @Inject 等等 可以说是 vue class component 的一个超集

正常开发的时候 你只需要使用 vue property decorator 中提供的操作符即可 不用再从vue class componen 引入vue component


### @Provide  @Inject  @Model

父组件中使用@Provide声明变量
```
父组件
@Provide() foo = 'foo'
@Provide('bar') baz = 'bar'

子组件
@Inject () foo!:string
@Inject () bar!:string
```
子组件中使用@Inject来使用变量(不论子组件都多深)


linux部署 githook 进行本地代码自动化部署
