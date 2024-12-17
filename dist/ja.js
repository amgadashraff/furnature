let togmenu=document.querySelector(".toggle .togglebar ")
let totalmenu=document.querySelector(".navContent .links")
let heart=document.querySelector(".hrt")
let message=document.querySelector(".message")


togmenu.addEventListener("click",()=>{
    totalmenu.classList.toggle("shlnks") 
})

document.body.addEventListener("click",e=>{
    if(!(e.target.classList.value.includes("togglebar")) ){
        totalmenu.classList.remove("shlnks")
    }
})

heart.addEventListener("click",e=>{
    e.target.classList.toggle("fa-solid")
    if(e.target.classList.contains("fa-solid")){
        e.target.style.color="blue" 
        message.classList.add("msgshow")
        setTimeout(() => {
            message.classList.remove("msgshow")
        }, 1000);
    }else{
        e.target.style.color="black"
    }
})



document.querySelectorAll(".colorcontent button").forEach(e=>{
    e.addEventListener("click",(el)=>{
        document.querySelectorAll(".colorcontent button").forEach(e=>{
            e.classList.remove("bord")
        })
        el.target.classList.add("bord")
})
    
})


// shop products 

let choosen=document.querySelectorAll(".chooseimg img")
let backimg=document.querySelector(".productContent .left .backimg")

choosen.forEach(e=>{
    e.addEventListener("click",el=>{
        choosen.forEach(e=>{
            e.classList.remove("chossen")
        })
        el.target.classList.add("chossen")
        backimg.src=el.target.src
    })
})

let sze=document.querySelectorAll(".sze span")

sze.forEach(e=>{
    e.addEventListener("click",el=>{
        sze.forEach(e=>{
        e.classList.remove("szeprod")
        })
        el.target.classList.add("szeprod")
    })
})
let pluseorminus=document.querySelectorAll(".quantity .content div")
let number=document.querySelector(".quantity .content .number")

pluseorminus.forEach(e=>{
    e.addEventListener("click",el=>{
        let num=number.textContent
        if(num <=0) {
            num=0
        }
        if(e.id === "pluse"){
            number.textContent=+num + 1
        }else if(e.id === "minus"){
            number.textContent=+num - 1
        }
        

    })
})

let procnt=document.querySelectorAll(".productContent .chse ") 
let prolft=document.querySelectorAll(".productContent .left img") 

let cancl=document.querySelector(".cancel")
let parnt=document.querySelector(".loginorsignup")
let passie=document.querySelectorAll(".ie")


passie.forEach(el=>{
    el.addEventListener("click",e=>{
    let pass=e.target.parentElement.querySelector("input")
    if(pass.type==="password"){
        pass.type="text"
        e.target.classList.replace("fa-eye-slash","fa-eye")

    }else{
        pass.type="password"
        e.target.classList.replace("fa-eye","fa-eye-slash")
    }
})

})

let singup=document.querySelector(".snup")
let lgin=document.querySelector(".lgn")
let loginparent=document.querySelector(".login")
let signupparent=document.querySelector(".signUp")
let bxsinuplogn=document.querySelectorAll(".loginorsignup .cont")
let totlchangelogandsign=document.querySelectorAll(".loginorsignup .chge")
let logcontent=document.querySelector(".logContent")
let openlogin=document.querySelector(".login .oplg")

document.body.addEventListener("click",e=>{
    console.log(e.target)
})
singup.addEventListener("click",e=>{
    e.preventDefault()
    logcontent.classList.add("active")
})
lgin.addEventListener("click",e=>{
    e.preventDefault()
    logcontent.classList.remove("active")
})
openlogin.addEventListener("click",e=>{
    e.preventDefault()
    document.querySelector(".loginorsignup").classList.add("rmvhdn")
   
})
 cancl.addEventListener("click",e=>{
        parnt.classList.remove("rmvhdn")
    })



let tableaccout=[
    {
        click:[
            {class:"manage account" , appear:"rt1"},
        ]
    },
    {
        click:[
            {class:"profile information" , appear:"rt2"},
        ]
    },
    {
        click:[
            {class:"manage address " , appear:"rt3"},
        ]
    },
    {
        click:[
            {class:"change password" , appear:"rt4"},
        ]
    },
    ]

let clkbtn=document.querySelectorAll(".btlftbox .box div")

clkbtn.forEach(e=>{
    e.addEventListener("click",el=>{
        clkbtn.forEach(e=>{
            e.classList.remove("active")
            document.querySelectorAll(".accountContent .rghtbox").forEach(e=>{
                e.classList.remove("showright")
            })
        })
        el.target.classList.add("active")
        for(let i=0 ;i<clkbtn.length ;i++){
            if(e.innerHTML=== tableaccout[i].click[0].class){ 
                document.querySelector("."+tableaccout[i].click[0].appear).classList.add("showright")
            }
        }

    })
})


    // auto write 
    let autowrite=new Typed(".landingContent h3 span",{
        strings:["decoration" ],
        typeSpeed:80,
        backSpeed:50,
        loop:false
        
    }) 


let changingpages=[
    {
        click:[
            {class:"home" , appear:"hm"},
        ]
    },
    {
        click:[
            {class:"shop" , appear:"shop"},
        ]
    },
    {
        click:[
            {class:"about" , appear:"about"},
        ]
    },
    {
        click:[ 
            {class:"contact" , appear:"cnt"}, 
        ]
    },
    ]




let lnkshomes=document.querySelectorAll(".navContent .links a")



lnkshomes.forEach(e=>{
    e.addEventListener("click",el=>{
        el.preventDefault()
        lnkshomes.forEach(e=>{
            e.classList.remove("linkclk")
            document.querySelectorAll(".sitecontent1 .stc").forEach(em=>{
                em.classList.remove("showright") 
            })
        })
        el.target.classList.add("linkclk")
        for(let i=0 ;i<=lnkshomes.length ;i++){
            if(e.innerHTML=== changingpages[i].click[0].class){ 
                console.log(e.innerHTML)
                console.log(changingpages[i].click[0].class)
                document.querySelector("."+changingpages[i].click[0].appear).classList.add("showright")
            }
            
        }
        

    })
})

let serchproductlast=document.querySelectorAll(".arrivalContentent .icns i:last-child")

serchproductlast.forEach(e=>{
    e.addEventListener("click",el=>{
        document.querySelector(".typespage").classList.add("onlin")
        document.querySelector(".bkwrdarw").addEventListener("click",e=>{
            document.querySelector(".typespage").classList.remove("onlin")
        })
    })
})


let alrmnumber=document.querySelectorAll(".arrivalContentent .box button ")
let logomarkt=document.querySelectorAll(".mrktlogo span ")
let alrmnumberbox=document.querySelectorAll(".arrivalContentent .box")
let lgmarkt=document.querySelector(".mrktlogo  ")
let mrkpage=document.querySelector(".mrktorderpage  ")
let mrkpagecontent=document.querySelector(".mrktorderpage .contentmrkpge ")
let canclmrktpge=document.querySelector(".cancelmrktpge  ")

lgmarkt.addEventListener("click",e=>{
    mrkpage.classList.add("openmarktpge")
})

canclmrktpge.addEventListener("click",e=>{
    mrkpage.classList.remove("openmarktpge")
})

let serchproductfrst=document.querySelectorAll(".arrivalContentent .icns i:first-child")

let logolike=document.querySelectorAll(".lkelogo span ")

z=0
serchproductfrst.forEach(e=>{
    e.addEventListener("click",()=>{
        z++
        logolike.forEach(ele=>{
            ele.classList.add("inblk")
            ele.innerHTML=z
        })
    })
})



let product=[
    {
        id:0,
        image:'./imgs/product10.jpg',
        title:'oldable mobile',
        price:120,

    },
    {
        id:1,
        image:'./imgs/product6.jpg',
        title:'air pods pro',
        price:60,
    
    },
    {
        id:2,
        image:'./imgs/product7.jpg',
        title:'air pods pro',
        price:230,
    
    },
    {
        id:3,
        image:'./imgs/product8.jpg',
        title:'air pods pro',
        price:100,
    
    },
    {
        id:4,
        image:'./imgs/product8.jpg',
        title:'ods pro',
        price:170,
    
    },
    {
        id:5,
        image:'./imgs/product8.jpg',
        title:'air',
        price:110,
    
    },
    {
        id:6,
        image:'./imgs/product9.jpg',
        title:'chair',
        price:400,
    
    },
    {
        id:7,
        image:'./imgs/product8.jpg',
        title:'bed',
        price:820,
    
    },
    {
        id:8,
        image:'./imgs/product8.jpg',
        title:'phosphore',
        price:30,
    
    },
    {
        id:9,
        image:'./imgs/product8.jpg',
        title:'table',
        price:99,
    
    },
    {
        id:10,
        image:'./imgs/product11.jpg',
        title:'pen',
        price:25,
    
    },
    {
        id:11,
        image:'./imgs/product8.jpg',
        title:'antarie',
        price:1100,
    
    },
    {
        id:12,
        image:'./imgs/product8.jpg',
        title:'blankt',
        price:200,
    
    },
    {
        id:13,
        image:'./imgs/product8.jpg',
        title:'air pods pro',
        price:100,
    
    },
    {
        id:14,
        image:'./imgs/product8.jpg',
        title:'choose',
        price:70,
    
    },
    {
        id:15,
        image:'./imgs/product8.jpg',
        title:'yellow',
        price:110,
    
    },
    {
        id:16,
        image:'./imgs/product8.jpg',
        title:'abajora',
        price:80,
    
    },
    {
        id:17,
        image:'./imgs/product8.jpg',
        title:'metal chair',
        price:270,
    
    },
    ]
    let catgory=[...new Set(product.map((item)=>{
        return item
    }))]

            
    var cart=[]
    function addtocart(a){
        cart.push({...catgory[a-1]});
         displaycart()
    }

    function delelment(a){
        cart.splice(a,1)
        displaycart()
    }
    
    function displaycart(a){
        let j=0
        let total=0
        logomarkt.forEach(ele=>{ 
            ele.classList.add("inblk")
            ele.innerHTML=cart.length
            

        if(cart.length===0){
            mrkpagecontent.innerHTML="your cart is empty" 
            document.querySelector(".totalprce span:last-child ").innerHTML="$"+0+".00";
            ele.classList.remove("inblk")
    
        }
        else{
            mrkpagecontent.innerHTML=cart.map((items)=>{
                var{image,title,price}=items
                total+=price
                document.querySelector(".totalprce span:last-child ").innerHTML="$"+total+".00";
                return(
                    ` <div class="box">
                        <img src=${image}  >
                    <div class="text">
                        <h2  >${title}</h2>
                        <p >available in stack</p> 
                       </div> 
                    <div class="price">
                        $${price}.00
                       </div> 
                       `+
                       "<i class='fa-solid fa-trash del' onclick='delelment("+(j++)+")'></i>" + `
                   </div>
                `
                )
            }).join(" ")
        }
     })
    }
    // contact 
let contcontactboxa=document.querySelectorAll(".contactContent .box:not(:first-child) a")

contcontactboxa.forEach(e=>{
    e.addEventListener("click",el=>{
        el.preventDefault()
    })
})


let spninner=document.querySelectorAll(".arrivalContentent .box .price span")
let delinner=document.querySelectorAll(".arrivalContentent .box .price del")
for(let k=0 ; k<product.length ; k++){
for(let f=0 ; f<spninner.length;f++){
    spninner[f].innerHTML=product[f].price
    delinner[f].innerHTML=+product[f].price+.2*(product[f].price)
} 
}
