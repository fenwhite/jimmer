<template>
    <div>
      user name: <input type="text" v-model="userForm.name" placeholder="user name"/>
      <br/>
      passWord : <input type="password" v-model="userForm.passWord" placeholder="password"/>
      <br/>
      <button @click="login">log in</button>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      userForm: {
        name: '',
        passWord: ''
      }
    }
  },
  methods: {
    login () {
      this.$axios.post('/api/login', this.userForm).then((result) => {
        if (result.data.code === 200) {
          this.$router.replace({path: '/HelloWorld'})
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
