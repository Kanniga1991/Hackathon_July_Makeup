async function getData(url){
    try{
        const apidata = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json`,{
            method:"GET"
        });
        const data = await apidata.json();
        console.log(data);
        loaddata(data);
    }
    catch(error)
    {
        throw console.log("NOT FOUND",error);
    }
}
getData();


function loaddata(data)
{var second =document.getElementById("second")
  
  data.forEach((makeup)=>{
    
    var getname =document.createElement('h1');
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
    
    var getimage =document.createElement('div');
    getimage.className ="getimage";
    getimage.src=makeup.image_link;
    content.append(getimage);
    
    var getproductlink =document.createElement('h5');
    getproductlink.className ="getproductlink";
    getproductlink.innerText=('Product_link : ' + makeup.product_link);
    content.append(getproductlink);
    
    var getdescription =document.createElement('h6');
    getdescription.className ="getdescription";
    getdescription.innerText=('Description : ' + makeup.description);
    content.append(getdescription);         
      second.append(content);
    
  })
  
 
}
