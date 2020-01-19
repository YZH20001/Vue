<template>
  <section class="loginContainer">
      <div class="loginInner">
          <div class="login_header">
              <h2 class="login_logo">App</h2>
              <div class="login_header_title">
                  <a href="javascript:;">短信登录</a>
                  <a href="javascript:;">密码登陆</a>
              </div>
          </div>
      </div>
      <div class="login_content">
          <form>
              <div class="on">
                  <section class="login_message">
                      <input type="tel" maxlength="11" placeholder="手机号">
                      <button disabled="disabled">获取验证码</button>
                  </section>
                   <section class="login_verifcation">
                      <input type="tel" maxlength="8" placeholder="验证码">
                  </section>
                    <section class="login_hint">
                     温馨提示：未注册账号的手机号，登录时将自动注册，且代表已同意
                     <a href="javascript">《用户服务协议》</a>
                  </section>
              </div>
              <div>
                  <section>
                      <section>
                          <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名">
                      </section>
                        <section class="login_verifcation">
                          <input type="tel" maxlength="8" placeholder="密码">
                          <div class="switch_button off">
                              <div class="switch_circle"></div>
                              <span class="switch_text">...</span>
                          </div>
                      </section>
                  </section>
              </div>
              <button class="login_submit">登录</button>
          </form>
      </div>
  </section>
</template>
<script>
export default {
    
}
</script>