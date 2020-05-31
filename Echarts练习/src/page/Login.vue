<template>
  <div class="login_container">
    <table class="table_container">
      <tr>
        <td align="right">用户名：</td>
        <td>
          <input v-model="name" type="text" />
        </td>
      </tr>
      <tr>
        <td align="right">密码：</td>
        <td>
          <input v-model="password" type="password" />
        </td>
      </tr>
      <tr>
        <td align="center" colspan="2">
          <button @click="toLogin">登录</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { bus } from "../network/index";
export default {
  data() {
    return {
      name: "admin",
      password: "admin"
    };
  },
  methods: {
    toLogin() {
      bus
        .login({
          username: this.name,
          password: this.password
        })
        .then(res => {
          if(res.data.status == 0){
              alert(res.data.msg);
              this.$router.push('/')
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.login_container {
  width: 40vw;
  height: 30vh;
  min-width: 500px;
  min-height: 250px;
  background-color: lightcoral;
  display: inline-flex;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 20%;
  margin-left: -25vw;
  justify-content: center;
  background: radial-gradient(
      circle at 50% 0,
      rgba(255, 0, 0, 0.5),
      rgba(255, 0, 0, 0) 70.71%
    ),
    radial-gradient(
      circle at 6.7% 75%,
      rgba(0, 0, 255, 0.5),
      rgba(0, 0, 255, 0) 70.71%
    ),
    radial-gradient(
        circle at 93.3% 75%,
        rgba(0, 255, 0, 0.5),
        rgba(0, 255, 0, 0) 70.71%
      )
      beige;
}
.table_container {
  width: 50%;
  height: 50%;
  background: radial-gradient(
      circle at 50% 0,
      rgba(255, 0, 0, 0.5),
      rgba(255, 0, 0, 0) 70.71%
    ),
    radial-gradient(
      circle at 6.7% 75%,
      rgba(0, 0, 255, 0.5),
      rgba(0, 0, 255, 0) 70.71%
    ),
    radial-gradient(
        circle at 93.3% 75%,
        rgba(0, 255, 0, 0.5),
        rgba(0, 255, 0, 0) 70.71%
      )
      beige;
}
</style>