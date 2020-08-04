// 只封装axios相关的代码
import axios from axios

// 全局配置
axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.timeout = 10000;
axios.defaults.header.post["Content-Type"] = "application/x-www-from-urlencoded;chartset=UTF-8";

// 拦截器
axios({
    url:"",
    methods:"",
    headers:{
        //自定义的请求头
        token:"sdfsdg"
    }
})
// 1.请求拦截器(请求之前要做什么事) 携带token给服
axios.interceptors.request.use(
    config=>{
        // 抓取本地token 携带在请求头里
        let user =window.localStorage.setItem("user");
        if(user){
            config.header.token = user  //把user放在请求头里
        }
        // 也可以是显示 loading
        return config
    },
    error =>{
        return Promise.reject(error)
    }
)




// 2.响应拦截器
axios.interceptors.response.use(
    response=>{
        const res = response.data
        // 2000状态码表示正确,下面进行错误处理
        if(res.msg == "fail"){
            //显示错误提示
            return Promise.reject(res.msg || "error")
        }else{
            return res
        }
    },
    error =>{
        return Promise.reject(error)
    }
)
