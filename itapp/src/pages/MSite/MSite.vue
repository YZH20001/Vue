<template>
  <div class="msite">
    <!--头部搜索框-->
    <header>
      <div class="head-wrap">
        <div class="head-top">
          <HeaderTop title="云南省曲靖市">
            <span class="header_search" slot="left">
              <i class="iconfont icon-search1"></i>
            </span>
            <span class="header_login" slot="right">
              <router-link to="/login" class="header_login_text">登陆|注册</router-link>
            </span>
          </HeaderTop>
        </div>
      </div>
    </header>
    <!--滚动内容块-->
    <div class="scroll-wrap">
      <!--banner轮播-->
      <div class="swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide">
            <a href="#">
              <img src="./images/1.jpg" />
            </a>
          </li>
          <li class="swiper-slide">
            <a href="#">
              <img src="./images/2.jpg" />
            </a>
          </li>
          <li class="swiper-slide">
            <a href="#">
              <img src="./images/3.jpg" />
            </a>
          </li>
          <li class="swiper-slide">
            <a href="#">
              <img src="./images/4.jpg" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/5.jpg" />
            </a>
          </li>
          <li class="swiper-slide">
            <a href="#">
              <img src="./images/6.jpg" />
            </a>
          </li>
          <li class="swiper-slide">
            <a href="#">
              <img src="./images/7.jpg" />
            </a>
          </li>
          <li class="swiper-slide">
            <a href="#">
              <img src="./images/8.jpg" />
            </a>
          </li>
        </ul>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>

      <!--导航区域-->
      <section class="nav">
        <div class="content vertical-view">
          <div class="nav-content horizontal-view">
            <a href="#">
              <img src="./images/nav1.png" />
              <span>天猫</span>
            </a>
            <a href="#">
              <img src="./images/nav2.png" />
              <span>聚划算</span>
            </a>
            <a href="#">
              <img src="./images/nav3.png" />
              <span>到家</span>
            </a>
            <a href="#">
              <img src="./images/nav4.png" />
              <span>外卖</span>
            </a>
          </div>
          <div class="nav-bottom nav-content horizontal-view">
            <a href="#">
              <img src="./images/nav5.png" />
              <span>充值</span>
            </a>
            <a href="#">
              <img src="./images/nav6.png" />
              <span>阿里旅行</span>
            </a>
            <a href="#">
              <img src="./images/nav7.png" />
              <span>领金币</span>
            </a>
            <a href="#">
              <img src="./images/nav8.png" />
              <span>分类</span>
            </a>
          </div>
        </div>
      </section>
      <!--淘宝头条-->
      <section class="tb-hot">
        <div class="content hot">
          <div class="hot-content">
            <div class="item horizontal-view">
              <span></span>
              <span>最新</span>
              <span>Supreme 2016秋冬配件系列完整一览</span>
            </div>
            <div class="item horizontal-view">
              <span></span>
              <span>最新</span>
              <span>Supreme 2016秋冬配件系列完整一览</span>
            </div>
            <div class="item horizontal-view">
              <span></span>
              <span>最新</span>
              <span>Supreme 2016秋冬配件系列完整一览</span>
            </div>
            <div class="item horizontal-view">
              <span></span>
              <span>最新</span>
              <span>Supreme 2016秋冬配件系列完整一览</span>
            </div>
            <div class="item horizontal-view">
              <span></span>
              <span>最新</span>
              <span>Supreme 2016秋冬配件系列完整一览</span>
            </div>
            <div class="item horizontal-view">
              <span></span>
              <span>最新</span>
              <span>Supreme 2016秋冬配件系列完整一览</span>
            </div>
          </div>
        </div>
        <div class="content gray-line"></div>
      </section>
      <!--海抢购-->
      <section class="rushbuy">
        <div class="content horizontal-view">
          <div class="rushbuy-left rightLine">
            <div class="rushbuy-bg"></div>
            <div class="rushbuy-time">
              <span class="timeNum">00</span>
              <span>:</span>
              <span class="timeNum">00</span>
              <span>:</span>
              <span class="timeNum">00</span>
            </div>
          </div>
          <div class="rushbuy-right vertical-view">
            <div class="top horizontal-view">
              <div></div>
              <div></div>
            </div>
            <div class="bottom horizontal-view topLine">
              <div class="rightLine"></div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
      <!--超实惠-->
      <section class="boon">
        <div class="content vertical-view">
          <div class="title boon-title horizontal-view">
            <div></div>
            <div></div>
            <div>超实惠</div>
            <div></div>
          </div>
          <div class="boon-top horizontal-view">
            <div class="rightLine"></div>
            <div class="rightLine"></div>
            <div class="rightLine"></div>
            <div></div>
          </div>
          <div class="boon-bottom horizontal-view topLine">
            <div class="rightLine"></div>
            <div class="rightLine"></div>
            <div class="rightLine"></div>
            <div></div>
          </div>
        </div>
      </section>
      <!--好品质-->
      <section class="quality">
        <div class="content vertical-view">
          <div class="title quality-title horizontal-view">
            <div></div>
            <div></div>
            <div>好品质</div>
            <div></div>
          </div>
          <div class="quality-top horizontal-view">
            <div class="rightLine"></div>
            <div></div>
          </div>
          <div class="quality-bottom horizontal-view topLine">
            <div class="rightLine"></div>
            <div class="rightLine"></div>
            <div class="rightLine"></div>
            <div class="rightLine"></div>
            <div></div>
          </div>
        </div>
      </section>
      <!--有特色-->
      <section class="feature">
        <div class="content vertical-view">
          <div class="title feature-title horizontal-view">
            <div></div>
            <div></div>
            <div>有特色</div>
            <div></div>
          </div>
          <div class="feature-top horizontal-view">
            <div class="rightLine"></div>
            <div class="rightLine"></div>
            <div class="rightLine"></div>
            <div></div>
          </div>
          <div class="feature-bottom horizontal-view topLine">
            <div class="rightLine"></div>
            <div class="rightLine"></div>
            <div class="rightLine"></div>
            <div></div>
          </div>
        </div>
      </section>
      <!-- 广告位置 -->
      <div class="banner2">
        <div></div>
      </div>
      <!--热门市场-->
      <section class="market">
        <div class="content vertical-view">
          <div class="title market-title horizontal-view">
            <div></div>
            <div></div>
            <div>热门市场</div>
            <div></div>
            <div>更多</div>
            <div></div>
          </div>
          <div class="market-top horizontal-view">
            <div class="rightLine">
              <p>品质穿搭</p>
              <p>质造品味</p>
              <p></p>
            </div>
            <div>
              <p>品质穿搭</p>
              <p>质造品味</p>
              <p></p>
            </div>
          </div>
          <div class="market-center horizontal-view topLine">
            <div>
              <p>品质穿搭</p>
              <p>质造品味</p>
              <p></p>
            </div>
            <div class="rightLine">
              <p>品质穿搭</p>
              <p>质造品味</p>
              <p></p>
            </div>
            <div class="rightLine">
              <p>品质穿搭</p>
              <p>质造品味</p>
              <p></p>
            </div>
            <div>
              <p>品质穿搭</p>
              <p>质造品味</p>
              <p></p>
            </div>
          </div>
          <div class="market-bottom horizontal-view topLine">
            <div>
              <p>品质穿搭</p>
              <p>质造品味</p>
              <p></p>
            </div>
            <div class="rightLine">
              <p>品质穿搭</p>
              <p>质造品味</p>
              <p></p>
            </div>
            <div class="rightLine">
              <p>品质穿搭</p>
              <p>质造品味</p>
              <p></p>
            </div>
            <div>
              <p>品质穿搭</p>
              <p>质造品味</p>
              <p></p>
            </div>
          </div>
        </div>
      </section>
      <!-- 广告位置 -->
      <div class="banner2 banner3">
        <div></div>
      </div>
      <!-- 每日好店 -->
      <section class="shop">
        <div class="content vertical-view">
          <div class="shop-title horizontal-view">
            <div></div>
            <div>每日好店</div>
            <div class="horizontal-view">
              <p>更新50个好店</p>
              <p></p>
            </div>
          </div>
          <div class="shop-pro">
            <ul class="horizontal-view">
              <li class="horizontal-view">
                <div class="shop-left vertical-view">
                  <div class="top horizontal-view">
                    <div></div>
                    <div class="vertical-view">
                      <p></p>
                      <p></p>
                    </div>
                  </div>
                  <div class="txt">今日推荐-1天3波</div>
                </div>
                <div class="shop-right vertical-view">
                  <div class="top horizontal-view">
                    <div></div>
                    <div class="vertical-view">
                      <p></p>
                      <p></p>
                    </div>
                  </div>
                  <div class="txt">吃吃吃</div>
                </div>
              </li>
              <li class="horizontal-view">
                <div class="shop-left vertical-view">
                  <div class="top horizontal-view">
                    <div></div>
                    <div class="vertical-view">
                      <p></p>
                      <p></p>
                    </div>
                  </div>
                  <div class="txt">今日推荐-1天3波</div>
                </div>
                <div class="shop-right vertical-view">
                  <div class="top horizontal-view">
                    <div></div>
                    <div class="vertical-view">
                      <p></p>
                      <p></p>
                    </div>
                  </div>
                  <div class="txt">吃吃吃</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="shop-icon">
            <span class="active"></span>
            <span></span>
          </div>
        </div>
      </section>
      <!--猜你喜欢-->
      <section class="guessYou">
        <div class="content">
          <div class="guess-title horizontal-view">
            <div></div>
            <div>猜你喜欢</div>
            <div></div>
          </div>
          <div class="guess-pro">
            <div class="guess-pro-con fl">
              <div></div>
              <div>[为你推荐]出口原单法式乡村纯实木双层床美式复古高低子母床儿童上下床直销</div>
              <div>￥4980.0</div>
            </div>
            <div class="guess-pro-con fr">
              <div></div>
              <div>[为你推荐]北欧风格家具 实木真皮小户型1.8米韩式双人婚床简约软床皮艺</div>
              <div>￥4980.0</div>
            </div>
            <div class="guess-pro-con fl">
              <div></div>
              <div>[为你推荐]出口原单法式乡村纯实木双层床美式复古高低子母床儿童上下床直销</div>
              <div>￥4980.0</div>
            </div>
            <div class="guess-pro-con fr">
              <div></div>
              <div>[为你推荐]北欧风格家具 实木真皮小户型1.8米韩式双人婚床简约软床皮艺</div>
              <div>￥4980.0</div>
            </div>
            <div class="guess-pro-con fl">
              <div></div>
              <div>[为你推荐]出口原单法式乡村纯实木双层床美式复古高低子母床儿童上下床直销</div>
              <div>￥4980.0</div>
            </div>
            <div class="guess-pro-con fr">
              <div></div>
              <div>[为你推荐]北欧风格家具 实木真皮小户型1.8米韩式双人婚床简约软床皮艺</div>
              <div>￥4980.0</div>
            </div>
            <div class="guess-pro-con fl">
              <div></div>
              <div>[为你推荐]出口原单法式乡村纯实木双层床美式复古高低子母床儿童上下床直销</div>
              <div>￥4980.0</div>
            </div>
            <div class="guess-pro-con fr">
              <div></div>
              <div>[为你推荐]北欧风格家具 实木真皮小户型1.8米韩式双人婚床简约软床皮艺</div>
              <div>￥4980.0</div>
            </div>
            <div class="guess-pro-con fl">
              <div></div>
              <div>[为你推荐]出口原单法式乡村纯实木双层床美式复古高低子母床儿童上下床直销</div>
              <div>￥4980.0</div>
            </div>
            <div class="guess-pro-con fr">
              <div></div>
              <div>[为你推荐]北欧风格家具 实木真皮小户型1.8米韩式双人婚床简约软床皮艺</div>
              <div>￥4980.0</div>
            </div>
            <div class="guess-pro-con fl">
              <div></div>
              <div>[为你推荐]出口原单法式乡村纯实木双层床美式复古高低子母床儿童上下床直销</div>
              <div>￥4980.0</div>
            </div>
            <div class="guess-pro-con fr">
              <div></div>
              <div>[为你推荐]北欧风格家具 实木真皮小户型1.8米韩式双人婚床简约软床皮艺</div>
              <div>￥4980.0</div>
            </div>
            <div class="guess-pro-con fl">
              <div></div>
              <div>[为你推荐]出口原单法式乡村纯实木双层床美式复古高低子母床儿童上下床直销</div>
              <div>￥4980.0</div>
            </div>
            <div class="guess-pro-con fr">
              <div></div>
              <div>[为你推荐]北欧风格家具 实木真皮小户型1.8米韩式双人婚床简约软床皮艺</div>
              <div>￥4980.0</div>
            </div>
            <div class="guess-pro-con fl">
              <div></div>
              <div>[为你推荐]出口原单法式乡村纯实木双层床美式复古高低子母床儿童上下床直销</div>
              <div>￥4980.0</div>
            </div>
            <div class="guess-pro-con fr">
              <div></div>
              <div>[为你推荐]北欧风格家具 实木真皮小户型1.8米韩式双人婚床简约软床皮艺</div>
              <div>￥4980.0</div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div class="link horizontal-view">
          <a href="#">登录</a>
          <a href="#">注册</a>
          <a href="#">电脑版</a>
          <a href="#">用户反馈</a>
        </div>
        <div class="copyright">
          2016 浙 B2-20080224
          <a>服务中心</a>
        </div>
      </footer>
    </div>
    <div class="fixNav horizontal-view">
      <a href="#">
        <span class="iconfont">&#x3478;</span>
        <span>首页</span>
      </a>
      <a href="#">
        <span class="iconfont">&#xe6ad;</span>
        <span>物流</span>
      </a>
      <a href="#">
        <span class="iconfont">&#xe66d;</span>
        <span>购物车</span>
      </a>
      <a href="#">
        <span class="iconfont">&#xe60c;</span>
        <span>我的淘宝</span>
      </a>
      <a href="#">
        <span class="iconfont">&#xf0013;</span>
        <span>更多</span>
      </a>
    </div>
    <div class="goTop">
      <span class="iconfont">&#xe629;</span>
      顶部
    </div>
  </div>
</template>
<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import "./msite.css";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  components: {
    HeaderTop
  },
  mounted() {
    //创建一个swiper对象实现轮播
    new Swiper(".swiper-container", {
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      },
      slidesPerView: "auto",
      // loopedSlides: _this.bannerList.length,
      speed: 300,
      autoplay: {
        disableOnInteraction: false, //手动滑动之后不打断播放
        delay: 2000
      },
      observer: true //监听，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
    });
  }
};
(function(win) {
  var docEl = win.document.documentElement;
  var timer = "";
  function changeRem() {
    var width = docEl.getBoundingClientRect().width;
    if (width > 540) {
      //最大宽度，若果兼容到ipad的话把这个去掉就行
      width = 540;
    }
    var fontS = width / 10; //把设备宽度10等分 等同于用vw来做
    docEl.style.fontSize = fontS + "px";
  }
  //页面尺寸发生改变的时候就再执行changeRem
  win.addEventListener(
    "resize",
    function() {
      clearTimeout(timer);
      timer = setTimeout(changeRem, 30);
    },
    false
  );
  //页面加载的时候，若果是调用缓存的话就再执行changeRem
  win.addEventListener(
    "pageshow",
    function(e) {
      if (e.persisted) {
        //缓存
        clearTimeout(timer);
        timer = setTimeout(changeRem, 30);
      }
    },
    false
  );
  changeRem();
})(window);
</script>
<style>
.msite {
  width: 100%;
  margin-top: -6px;
}
.header_login_text{
  color: white;
  
}
</style>>