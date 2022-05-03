<template>
    <div>
      user name: <input type="text" v-model="userForm.Name" placeholder="user name"/>
      <br/>
      passWord : <input type="password" v-model="userForm.Password" placeholder="password"/>
      <br/>
      <button @click="login">log in</button>
    </div>
</template>

<script>
import {encrypt} from '../utils/encrypt.js'

export default {
  name: 'Login',
  data () {
    return {
      userForm: {
        Name: '',
        Password: ''
      }
    }
  },
  methods: {
    login () {
      this.userForm.Password = encrypt(this.userForm.Password)
      this.$axios.post('http://localhost:8080/login', this.userForm).then((result) => {
        console.log(result)
        if (result.data.Code === 200) {
          this.$router.replace({path: '/HelloWorld'})
        } else {
          console.log('login error')
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
