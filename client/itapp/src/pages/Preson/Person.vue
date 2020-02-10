<template>
  <section class="profile">
    <HeaderTop title="我的" />
    <section class="profile-number">
      <router-link to="/login" class="profile-link">
        <div class="profile_image">
          <i class="iconfont icon-person"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top">登录/注册</p>
          <p>
            <span class="user-icon">
              <i class="iconfont icon-shouji icon-mobile"></i>
            </span>
            <span class="icon-mobile-number">暂无绑定手机号</span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont icon-jiantou1"></i>
        </span>
      </router-link>
    </section>
    <section class="profile_info_data">
      <ul class="info_data_list">
        <a href="javascript:;" class="info_data_link">
          <span class="info_data_top">
            <span class="yuan">0.00</span>元
          </span>
          <br />
          <span>我的余额</span>
        </a>
        <a href="javascript:;" class="info_data_link">
          <span class="info_data_top">
            <span class="num">0</span>个
          </span>
          <br />
          <span>我的优惠</span>
        </a>
        <a href="javascript:;" class="info_data_link">
          <span class="info_data_top">
            <span class="minute">0</span>分
          </span>
          <br />
          <span>我的积分</span>
        </a>
      </ul>
      <ul class="info_list">
        <li>
          <a href="javascript:;">
            <span>我的订单</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span>积分商城</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span>会员卡</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span>服务中心</span>
          </a>
        </li>
      </ul>
    </section>
  </section>
</template>
<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import "./person.css";
export default {
  components: {
    HeaderTop
  }
};
</script>