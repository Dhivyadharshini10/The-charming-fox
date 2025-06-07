fetch('https://fakestoreapi.com/products')
    .then(response => response.json()) // Convert the response to JSON
    .then(data => console.log(data))   // Log data for debugging
    .catch(error => console.error('Error:', error)); // Handle errors
document.addEventListener('DOMContentLoaded', () => {
  const productGrid = document.getElementById('product-grid');
  const loadingMessage = document.getElementById('loading-message');
  const errorMessage = document.getElementById('error-message');

  // Check if required elements exist
  if (!productGrid || !loadingMessage || !errorMessage) {
    console.error('Required DOM elements are missing!');
    return;
  }

  // Show loading message
  function showLoading() {
    loadingMessage.style.display = 'block';
    errorMessage.style.display = 'none';
  }

  // Hide loading message
  function hideLoading() {
    loadingMessage.style.display = 'none';
  }

  // Show error message
  function showError() {
    errorMessage.style.display = 'block';
  }

  // Fetch products from FakeStore API
  async function fetchProducts() {
    const API_URL = 'https://fakestoreapi.com/products';
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  }

  // Create a product card element
  function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    // Image with lazy loading
    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.title;
    img.loading = 'lazy'; // lazy loading attribute

    const title = document.createElement('div');
    title.className = 'product-title';
    title.textContent = product.title;

    const price = document.createElement('div');
    price.className = 'product-price';
    price.textContent = `₹${product.price.toFixed(2)}`;

    const desc = document.createElement('p');
    desc.textContent = product.description;
    desc.style.fontSize = '0.9rem';
    desc.style.color = '#555';
    desc.style.flexGrow = '1';

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(desc);

    return card;
  }

  // Main function to load & display products
  async function displayProducts() {
    try {
      showLoading();

      const products = await fetchProducts();

      productGrid.innerHTML = ''; // clear grid

      products.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
      });
    } catch (error) {
      showError();
      console.error('Error fetching/displaying products:', error);
    } finally {
      hideLoading();
    }
  }

  displayProducts();
});
