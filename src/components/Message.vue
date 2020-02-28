<template>
  <dir>
    <p>{{ message }} - {{ title }}</p>
    <span> My name is {{ name }} and I am {{ age }} years ols </span>
    <span> With computed propreties {{ fullname }} </span>
  </dir>
</template>

<script lang="ts">
import http from '../core/http'
import { Component, Prop, Vue, Watch, Emit } from 'vue-property-decorator'

@Component
export default class Message extends Vue {
  // Props
  @Prop({ type: String, default: '' }) message!: string;
  @Prop({ type: String, default: 'there is no title' }) title!: string;

  // Data
  name: string = 'Silas'
  lastName: string = 'Brasil'
  age: number = 28

  async created() {
    const json = await http.get('http://ip.jsontest.com/')
    console.log(json)
  }

  // Computed Properties
  get fullname () {
    return `${this.name} ${this.lastName}`
  }

}
</script>