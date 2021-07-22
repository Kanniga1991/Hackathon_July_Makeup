async function getData(){
    
          const apidata = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json`,{
            method:"GET"
        })
        const data = await apidata.json();
        console.log(data);
        loaddata(data);
    }

   

getData();


 function loaddata(data)
{
    var title=document.createElement('div');
    title.className ="title";
    title.innerText="BEAUTY & GLOW PRODUCTS"
       content.append(title);
       var kanniga=document.createElement('div');
    kanniga.className ="kanniga";
    kanniga.innerText="- Designed by Kanniga Manivannan"
       content.append(kanniga);
       
  
  data.forEach((makeup)=>{
      if((makeup.id <=1048) &&(makeup.id>=1000) )
     
    //   container.innerHTML=`<h1 class ="getname">Name :${makeup.name}</h1>
    //   <h2 class = "getbrand">Brand : ${makeup.brand}</h2>
    //   <h3 class = "getprice">Price :$ ${makeup.price}</h3>
    //   <img class = "getimage" src=${makeup.image_link}>
    //   <h4 class = "getproductlink">Product_Link :$ ${makeup.product_link}</h4>
    //   <p class = "getdescription">Description :$ ${makeup.description}</p>`
    //   makeuplist.append(container);
      

   {var getname =document.createElement('h1');
   getname.className ="getname";
   getname.innerText=('Name : ' + makeup.name);
   content.append(getname);
   
   var getbrand =document.createElement('h2');
   getbrand.className ="getbrand";
   getbrand.innerText=('Brand : ' + makeup.brand);
   content.append(getbrand);
   
   var getprice =document.createElement('h3');
   getprice.className ="getprice";
   getprice.innerText=('Price : $f' + makeup.price);
   content.append(getprice);
   
   var image =document.createElement('img');
   image.className ="getimage";
   image.src=makeup.image_link;
   content.append(image);
   
   
  var getproductlink=document.createElement("button")
   getproductlink.innerText="Visit the link for more info";
   var button=document.createElement('a')
   button.href=makeup.product_link;
   getproductlink.append(button)
   content.append(getproductlink);
  
   
     var getdescription =document.createElement('h6');
   getdescription.className ="getdescription";
   getdescription.innerText=('Description : ' + makeup.description);
   content.append(getdescription);         
     } 
    
    });
     
}
