<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <HelloWorld @addItem="addItem" msg="Welcome" mes="TypeScript"/>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
    addItem (e) {
        console.log(e)
    }
    @Provide() foo = 'foo'
    @Provide('bar') baz = 'bar'
}
</script>
