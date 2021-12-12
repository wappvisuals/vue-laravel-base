<template>
  <p>{{count}}</p>
  <button @click="increate()">Increate</button>
  <button @click="decrease()">Descrease</button>
</template>

<script>

export default {
  data: function (){
    return {
      count: 0
    }
  },
  methods: {
    increate(){
      this.count++;
    },
    decrease(){
      this.count--;
    }
  },
}
</script>