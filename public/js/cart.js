
 const addToCartBtn = document.querySelector("#add-to-cart");
    addToCartBtn.addEventListener("click", async (e) =>{
        e.preventDefault();
        const productId = e.currentTarget.dataset.id;
        const response = await fetch("/api/user/cart",{
            method: "POST",
            body: JSON.stringify({product: productId}),
            headers: {"Content-Type":"application/json"}
        });
        if(response.ok){
            document.location.replace('/cart')
        } else {
            alert(response.statusText)
        }
    })
