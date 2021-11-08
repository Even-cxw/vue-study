(function(w) {
	var htmlElement = `
	<!--容器部分-->
	<div class="question_wrapper_even" @click.stop.prevent @touchmove.prevent.stop>
		<!--星标-->
		<transition name="slide">
		<div class="star_mark_even" 
			v-show="isStarMark"
			@click.stop.prevent="clickStarMark" 
			@touchmove.prevent>
			<div class="star_mark_bg f-c-c">
				<div class="icon_left f-c-c">
					<img class="icon_left_arrow" src="./images/icon_left.png">
				</div>
				<div class="star_mark_right mr_10">
					<img class="star_mark_star" src="./images/nullStar.png">
					<div class="star_mark_text">
						评分
					</div>
				</div>
			</div>
		</div>
		</transition>
		<!--内容区域-->
		<transition name="slide">
		<div class="question_content_even" 
			v-show="!isStarMark">
			<div class="question_content_inner">                                                                                                                                      
				<div class="left_even f_t_t" ref="link">
					<div class="link_even f_t_t mb_5" @click="clickLink">
						<img v-if="isGreyLink" class="link_img_even mr_5" src="./images/grey_link.png">
						<img v-else class="link_img_even mr_5" src="./images/link.png">
						<span>答问卷</span>
					</div>
					<div class="link_msg f_t_t" @click="clickLink">{{linkText}}</div>
				</div>
				<div class="right_even f_t_t ">
					<div class="rate_msg_even mb_10">{{rateTip}}</div>
					<div class="rate_content_even rate_flipInY" v-show="isRate">
						<div class="star-cont" v-if="stars.length">
							<span class="fs_12px">{{rateTextLeft}}</span>
							<div
								style="display:flex"
								@touchmove="handleTouchmove($event)">
								<div v-for="(option, index) in stars.length" 
									:key="index" class="star mr_2 star_info" 
									:class="stars[index].class" 
									@click="clickStar">
								</div>
							</div>
						
							<span class="fs_12px">{{rateTextRight}}</span>
						</div>
					</div>
					<div class="rate_btns_even rate_flipInY" v-show="!isRate">
						<div class="reset_btn_even f_t_t mr_15" @click="clickReset">重新选择</div>
						<div class="confirm_btn_even f_t_t" @click="clickConfirm">确认提交</div>
					</div>
				</div>
			</div>
			<img class="icon_right" src="./images/icon_right.png" @click="handleIconRight">
		</div>
		</transition>
	</div>`
	
	var timer = null;
	var defaultObj = {
		isStarMark: false,
		isRate: true,
		stars: [],
		isLock: false, // 锁评分
		isGreyLink: true,
		isConfirmBtn: false,
		isGreyLink: true,
	}
	var paramsObj = {
		rateTip: '请您对"高端权益"评分：',
		rateTextLeft: '非常不满意',
		rateTextRight: '非常满意',
		linkText: '赢好礼',
		// linkUrl: null,
		// uuid: null,
		bizSceneCode: null,
		isAnimation: true,
		isStarAnimation: false,
	}
	var isApp = /spdb/i.test(w.navigator.userAgent);
	/**
	 * @desc 问卷调查弹窗
	 * @params el 插入对象{String|HTMLElement},
	 * 
	 */
	
	class Question {
		constructor(options) {
			// this.uuid = null;
			// this.bizSceneCode = null;
			this.options = Object.assign(defaultObj, paramsObj, options);
			if (!options.linkUrl) {
				console.error('linkUrl参数不能为空！！')
				return;
			}
			var el = options.el;
			if (typeof el == 'string') {
				this._target = document.querySelector(el);
			} else if (el){
				this._target = el;
			} else {
				this._target = document.body;
			}
			this.initImag();
			this.initVue();
			this.addElement();
		}
		initVue() {
			var Q_that = this;
			var vueConstructor = Vue.extend({
				template: htmlElement,
				created: function() {
					this.initStar();
				},
				mounted () {
					var that = this;
					this.$nextTick(function() {
						that.initTouch();
					})
				},
				methods: {
					initStar() {
						this.stars = [];
						let maxSize = 10
						for(let i=0;i<Math.ceil(maxSize/2);i++){
							this.stars.push({
								class:'nullStar'
							})
						}
					},
					initTouch() {
						this.starList = document.getElementsByClassName('star_info');
						for(var i = 0; i < this.starList.length; i++ ) {
							var rectObj = {}
							rectObj.elIndex = i;
							rectObj.halfScore = i*2 + 1;
							rectObj.fullScore = i*2 + 2;
							rectObj.width = this.starList[i].clientWidth;
							this.starList[i].rectObj = rectObj;
						}
					},
					handleTouchmove(event) {
						var clientX = event.targetTouches[0].clientX;
						var clientY = event.targetTouches[0].clientY;
						var myLocation = document.elementFromPoint(clientX, clientY);
						if (!myLocation.rectObj) return;
						var targetObj = myLocation.getBoundingClientRect();
						var disX = clientX - targetObj.x;
						if (disX > targetObj.width/2) {
							this.rate(myLocation.rectObj.fullScore)
						} else {
							this.rate(myLocation.rectObj.halfScore)
						}
					},
					clickStar(event) {
						var clientX = event.clientX;
						var targetObj = event.target.getBoundingClientRect();
						var disX = clientX - targetObj.x;
						if (disX > targetObj.width/2) {
							this.rate(event.target.rectObj.fullScore)
						} else {
							this.rate(event.target.rectObj.halfScore)
						}
					},
					clickStarMark() {
						let V_that = this;
						if (!this.isAnimation) {
							V_that.isStarMark = false;
							// this.scrollView(200);
							return;
						}
						// this.scrollView(800);
						this.isStarAnimation = false;
						setTimeout(function() {
							V_that.isStarMark = false;
						},300)
					},
					scrollView(timer) {
						setTimeout(() => {
							var questionContent = document.querySelector('.question_content_even');
							questionContent.scrollIntoView({block: 'center', behavior: 'smooth'});
							// questionContent.scrollIntoView();
						}, timer)
					},
					strinkStarMark() {
						if (!this.isStarMark){
							let V_that = this;
							if (!this.isAnimation) {
								V_that.isStarMark = true;
								return;
							}
							this.isStarAnimation = true;
							setTimeout(function() {
								V_that.isStarMark = true;
							},300)
						}
						// this.clearTimer();
						// this.initStar();
					},  
					rate(index) {
						if (this.isLock) return;
						this.rateIndex = index;
						var V_that = this;
						var rem = index%2 
						if(rem === 0){
							this.stars.forEach(function(el,ind){
								if(ind < Math.floor(index/2)){
									this.stars[ind].class = 'fullStar'
								}else{
									this.stars[ind].class = 'nullStar'
								}
							},this)
						}else{
							 this.stars.forEach(function(el,ind){
								if(ind < Math.floor(index/2)){
									this.stars[ind].class = 'fullStar'
								}else if(ind == Math.floor(index/2)){
									this.stars[ind].class = 'halfStar'
								}else{
									this.stars[ind].class = 'nullStar'
								}
							},this)
						}
						this.clearTimer();
						timer = setTimeout(function() {
							V_that.isRate = false;
						}, 1000);
					},
					clearTimer() {
						if (timer) {
							clearTimeout(timer)
						}
					},
					clickReset() {
						this.isRate = true;
						this.initStar();
					},
					clickConfirm() {
						var V_this = this;
						this.rateTip = '感谢您对本次"高端权益"评分：';
						this.isRate = true;
						setTimeout(function() {
							Q_that.wave(V_this.$refs.link);
							V_this.isGreyLink = false;
							V_this.isLock = true;
						}, 900)
						Q_that.options.confirmBtn && Q_that.options.confirmBtn({
							rateScore: V_this.rateIndex,
						})
					},
					handleIconRight() {
						var V_this = this;
						V_this.isStarMark = true;
					},
					clickLink() {
						var V_this = this;
						if(!this.isLock) return;
						if (!Q_that.options.uuid) {
							console.error('uuid参数不能为空！！')
							return;
						}
						if (!Q_that.options.bizSceneCode) {
							console.error('bizSceneCode参数不能为空！！')
							return;
						}
						let params = 'bizSceneCode=' + Q_that.options.bizSceneCode + '&uuid=' + Q_that.options.uuid;
						let url = this.linkUrl.includes('?') ? this.linkUrl + '&' + params : this.linkUrl + '?' + params;
						if (isApp) {
							if(window.jsspdb){
								window.jsspdb.openNewPage(url,"小浦聆听坊");
							}else{
								window.webkit.messageHandlers.jsspdb.postMessage({"method":"openNewPage::","arguments":[url,"小浦聆听坊"]});
							}
						} else {
							window.location.href = url;
						}
					},
				},
			})
			this.instance = new vueConstructor({
				el:document.createElement('div'),
				data: Q_that.options,
			});
		}
		addElement() {
			this._target.style.position = 'relative';
			if (this._target.classList.contains('question_wrapper_quanyi')){
				console.error('不可多次插入组件')
				return;
			}
			this._target.classList.add('question_wrapper_quanyi')
			this._target.appendChild(this.instance.$el);
			var Q_that = this;
			document.addEventListener('click', function() {
				Q_that.instance.strinkStarMark();
			})
			
			// document.addEventListener('touchStart', function() {
			// 	Q_that.instance.strinkStarMark();
			// })
			
			// document.addEventListener('touchmove', function() {
			// 	Q_that.instance.strinkStarMark();
			// })
		}
		wave(el) {
			el.classList.add('fc_fff')
			const opts = Object.assign({
				ele: el,
				type: 'center',
				color: '#fff' // 波纹颜色
			});
			const target = opts.ele;
			if (target) {
				target.style.position = 'relative';
				target.style.overflow = 'hidden';
				const rect = target.getBoundingClientRect();
				let ripple = target.querySelector('.waves-ripple');
				if (!ripple) {
					ripple = document.createElement('span');
					ripple.className = 'waves-ripple';
					ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
					target.appendChild(ripple);
				}
				else {
					ripple.className = 'waves-ripple';
				}
				ripple.style.top = rect.height / 2 - ripple.offsetHeight / 2 + 'px';
				ripple.style.left = rect.width / 2 - ripple.offsetWidth / 2 + 'px';
				ripple.style.backgroundColor = opts.color;
				ripple.className = 'waves-ripple z-active';
			}
		}
		initImag() {
			var imgArr = [
				'./images/confirm_btn.png',
				'./images/fullStar.png',
				'./images/grey_link.png',
				'./images/halfStar.png',
				'./images/link.png',
				'./images/nullStar.png',
				'./images/question_bg.png',
				'./images/reset_btn.png',
				'./images/star_mark.png',
			]
			imgArr.forEach(function(item) {
				var img = new Image();
				img.src = item;
			})
		}
	}
	w.Question = Question;
})(window)

