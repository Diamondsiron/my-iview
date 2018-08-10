<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/8/9
  Time: 18:14
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
	<script src="../js/vue.min.js"></script>
	<script src="../js/axios.min.js"></script>
	<script src="../js/axios.config.js"></script>
	<link rel="stylesheet" href="../css/bidingInfo.css">
</head>
<body>
<div id="main">
	<div>
		<div class="toast" id="toast">
			{{hint}}
		</div>
		<div class="card">
			<div>
				剩余可出借金额(元)
			</div>
			<div>
				{{objData.sell_limit_config.RestMoney}}
			</div>
			<div class="card-bottom">
				<div class="card-bottom-l">
					<div>预计利息</div>
					<div>{{interest}}</div>
				</div>
				<div class="card-bottom-r">
					<div>出借金额</div>
					<div>200000.00</div>
				</div>
			</div>
		</div>
	
		<div class="context">
			<div>出借金额(元)</div>
			<div class="context-input">
				<input id="text" class="context-input-text" type="text" pattern="[0-9]*"  v-model="count" v-on:input="dispear()"  v-on:blur="apear()" >
				<label id="label" class="context-input-lable" v-on:click="labelClick()" >{{text1}}</label>
			</div>
			<div>可出借金额(元):{{avail}}</div>
			<div><button ontouchstart="">充值</button></div>
		</div>
		<footer class="footer">

			<div class="foot-title">
				出借即表示同意<a href="javascript:void(0)">《出借咨询及信息管理服务协议》</a>、<a href="javascript:void(0)">《风险提示书》</a>

			</div>
			<div class="foot-content">
				<button ontouchstart="" class="foot-content-btn" @click="submit()" >确认出借<span v-if="count==''">0.00</span>{{count}}元</button>
			</div>
		</footer>
	</div>
</div>

<script>
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 1242*100 + 'px';
	var vm = new Vue({
		el:"#main",
		data(){
			return{
				avail:"",
				interest:"",
				count:"",
				hint:"",
				h1:"",
				h2:"",
				text1:"",
				objData:{
					sell_info: {
						ImproveRate: "",
						InvestMaxTimes: "",
						EndTime: "",
						MinInvestMoney: "",
						SellLimitConfigId: "",
						ProductId: "",
						OrderNo: "",
						ProductMaxMoney: null,
						InComeType: "",
						ProductFirstAwardRate: "",
						ProductConfigId: "",
						AdvanceWay: "",
						IntorduceLimit: "",
						LabelText: "",
						ActivityRuleIds: null,
						AdvanceWayValue: "",
						ActivateIntegralRate: "",
						IntorduceInvestRate: "",
						Status: "",
						ExpectedYearYield: "",
						SellName: "",
						InvestMaxMoney: "",
						InputPerson: "",
						AccountFeeRate: "",
						InputTime: "",
						StartTime: "",
						RatingLevelId: "",
						IncrementMoney: "",
						SelfInvestRate: "",
						ProductTypeId: "",
						PromptText: "",
						AdvanceDays: "",
						Intro: "",
						ProductMaxTimes: null,
						ImproveYearRate: "",
						ExpiresDays: "",
						Id: "",
						ExpectedYield: "",
						SellConfigId: "",
						SendIntegralRate: "",
						LastTime: null
					},
					sell_limit_config: {
						Status: "",
						SellAmount: "",
						InputPerson: "",
						SellStatus: "",
						InputTime: "",
						GroupId: null,
						BuyKey: null,
						SellCreateDate: "",
						Type: "",
						ProductConfigId: "",
						SellDate: "",
						Id: "",
						RestMoney: ""
					},
					keyong: "",
					display: "",
					buy_status: "",
					limit_status: "",
					return_code: "",
					return_msg: ""
				},
				RNmessage:{},


			}
		},
		watch:{
			count:function(){
				if(this.count>200000){

					//alert(this.h1+"h2:"+this.h2)
					this.showToastZoom("出借金额不能大于200000元。")
					this.count=200000
					return
				}
			}
		},
		methods:{
			submit(){
				if(this.count<100){
					//1
					this.showToast("出借金额不能小于100元。")
					//this.count=""
					return
				}else if(this.count>this.objData.sell_limit_config.RestMoney){
					//2
					this.showToast("出借金额不能大于剩余可出借金额。")
					//this.count=""
					return
				}else if(this.count>this.avail){
					this.showToast("可用余额不足，请先充值。")
					//this.count=""
					return
				}else if((this.count%100)!==0){
					this.showToast("出借金额需为100的整数倍。")
					//this.count=""
					return
				}else if(this.count>200000){
					this.showToast("出借金额不能大于200000元。")
					//this.count=""
					return
				}else if((this.objData.sell_limit_config.RestMoney-this.count)<100){
					this.showToast("输入后剩余可出借金额小于最低出借金额，请重新输入。")
					//this.count=""
					return
				}else{
					if(this.objData.sell_info.InvestMaxMoney==null){

					}else if(this.count>this.objData.sell_info.InvestMaxMoney) {
						this.showToast("出借金额不能大于限参与金额。")
					}
				}
				console.log(this.count)
				this.submitData();
			},
			submitData(){
				let vms = this;
				let req ={
					"tel_phone": "15822753827",
					"sell_id": "JE0602018072001",
					"amount": "10000",
					"buy_key": "LLL",
					"jyd_pubData": {
						"user_id": this.RNmessage.jyd_pubData.user_id,
						"source_type":this.RNmessage.jyd_pubData.source_type,
						"system_id": this.RNmessage.jyd_pubData.system_id,
						"network_type": this.RNmessage.jyd_pubData.network_type,
						"token_id": this.RNmessage.jyd_pubData.token_id
					}
				}
				axios.post(axiosBaseUrl+"personProLend/confirmLend",req).then(res=>{

				}).catch(err=>{

				})


			},
			dispear(){
				document.getElementById("label").style.display = 'none';
			},
			apear(){
				if(this.count == ""){
					document.getElementById("label").style.display = 'block';
				}

			},
			labelClick(){
				document.getElementById("text").focus();
			},
			showToast(text){
				this.hint = text
				document.getElementById("toast").style.display="block"
				setTimeout(function(){
					document.getElementById("toast").style.display="none"
				},2000)
			},
			showToastZoom(text){
				this.hint = "出借金额不能大于200000元。"
          document.getElementById("text").blur();
          document.getElementById("toast").style.display="block"
          setTimeout(function(){
            document.getElementById("toast").style.display="none"
          },2000) 
			},
			initData(){
				let vms = this
				let req =  {
					"tel_phone": this.RNmessage.tel_phone,
					"sell_id": this.RNmessage.sell_id,
					"jyd_pubData": {
						"user_id": this.RNmessage.jyd_pubData.user_id,
						"source_type":this.RNmessage.jyd_pubData.source_type,
						"system_id": this.RNmessage.jyd_pubData.system_id,
						"network_type": this.RNmessage.jyd_pubData.network_type,
						"token_id": this.RNmessage.jyd_pubData.token_id
					}
				}

				axios.post(axiosBaseUrl+"personProLend",req).then(res=>{
					//document.getElementById('datas').textContent = "111111"+res.data.return_code+res.data.return_msg
					vms.objData = res.data
					vms.text1 = "最低出借"+vms.objData.sell_info.MinInvestMoney+"元"
					vms.interest = (((Math.floor(200000/100)*100*(vms.objData.sell_info.ImproveYearRate + vms.objData.sell_info.ExpectedYearYield)*vms.objData.sell_info.ExpiresDays)/365).toFixed(2));
					console.log("vms.objData",vms.objData)
				}).catch(err=>{
					//document.getElementById('datas').textContent = "222222"
					console.log(err)
				})
				let req1 = {
					"tel_phone": this.RNmessage.tel_phone,
					"jyd_pubData": {
						"user_id": this.RNmessage.jyd_pubData.user_id,
						"source_type":this.RNmessage.jyd_pubData.source_type,
						"system_id": this.RNmessage.jyd_pubData.system_id,
						"network_type": this.RNmessage.jyd_pubData.network_type,
						"token_id": this.RNmessage.jyd_pubData.token_id
					}
				}

				axios.post(axiosBaseUrl+"balanceQuery",req1).then(res=>{
					//document.getElementById('data').textContent = "111111"+res.data.return_code+res.data.return_msg
					vms.avail = res.data.keyong
					//vms.avail = 700

					console.log("vms.avail",vms.avail)
				}).catch(err=>{
					//document.getElementById('data').textContent = "222222"
					console.log(err)
				})
			},







			init(){
				let vms = this
        var str = {
					"tel_phone": "<%=request.getAttribute("telPhone")%>",
					"sell_id": "<%=request.getAttribute("sellId")%>",
					"jyd_pubData": {
						"user_id": "<%=request.getAttribute("userId")%>",
						"source_type":"<%=request.getAttribute("sourceType")%>",
						"system_id": "<%=request.getAttribute("systemId")%>",
						"network_type": "<%=request.getAttribute("networkType")%>",
						"token_id": "<%=request.getAttribute("tokenId")%>"
					}
				}
				//var str = {"tel_phone":"15822753827","tel_code":"","tel_pwd":"","refer_code":"","jyd_pubData":{"user_id":"39","user_name":"","source_type":"0001","system_id":"Apple ios 11.4","network_type":"wifi","token_id":"123235h5e3"},"PageNum":"1","sell_id":"JE0902018072001"}
				this.RNmessage = JSON.parse(JSON.stringify(str))
				if(this.RNmessage.tel_phone!=="null"){
					vms.initData()
				}
        
        window.onload = function () {
            document.addEventListener('message', function (e) {
								vms.RNmessage = JSON.parse(e.data)
							
								//alert(this.RNmessage)
                vms.initData()
            })
            
        }
        var refreshIntervalId = setInterval(function(){
            if (window.originalPostMessage) {
              
                stop();
            } 
        }, 500);

        function stop(){
            window.postMessage("");
            clearInterval(refreshIntervalId);
        }
			}
		},
		mounted() {
			this.init();
			this.h1=window.innerHeight
		},
	})
</script>
</body>
</html>
