<template>
  <div class="home">
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
  @Provide() public foo = 'foo';
  @Provide('bar') public baz = 'bar';
  public addItem(e: any) {
      console.log(e);
  }
}
</script>
