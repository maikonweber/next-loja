export async function queryProductsMainPage() {
    const response = await fetch(`http://localhost:3092/products`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    console.log(response)
    return await response.json();
  }
  
  