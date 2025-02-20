import './index.scss';

// images
import chair from "./assets/images/chair.jpg";

document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById('products');
///ioj i
    ///jjj
    ///fff
    const products = [
        { 
            name: 'Chair 1', 
            description: 'Incredible chair',
            image: chair, price: 10.99 
        },
        { 
            name: 'Chair 2', 
            description: 'Incredible chair',
            image: chair, price: 10.99
        },
        { 
            name: 'Chair 3', 
            description: 'Incredible chair', 
            image: chair, 
            price: 10.99 
        },
        { 
            name: 'Chair 4', 
            description: 'Incredible chair', 
            image: chair, 
            price: 10.99
        },
        { name: 'Chair 5', 
            description: 'Incredible chair', 
            image: chair, 
            price: 10.99 
    },
        { name: 'Chair 6', 
            description: 'Incredible chair', 
            image: chair, 
            price: 10.99 
        },
        { 
            name: 'Chair 7', 
            description: "Thiago's chair", 
            image: chair, 
            price: 10.99 
        },
        { 
            name: 'Chair 8', 
            description: 'Incredible chair',
             
            image: chair, 
            price: 10.99 
        },
        { 
            name: 'Chair 9', 
            description: 'Incredible chair', 
            image: chair,  
            price: 10.99 
        }
    ];

    products.forEach(product => {
        // column wrapper
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-4');
        colDiv.classList.add('mb-4');

        // Card container
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.style.width = '100%'; 

        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = product.image;
        img.alt = product.name;
        img.style.height = '200px';
        img.style.objectFit = 'cover';

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h4');
        title.classList.add('card-title');
        title.textContent = product.name;

        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = product.description;

        const price = document.createElement('p');
        price.classList.add('card-text', 'mb-3');
        price.textContent = 'Price: $' + product.price;

        const addToCart = document.createElement('button');
        addToCart.classList.add('btn', 'btn-primary', 'float-end'); 
        addToCart.textContent = "Add to cart";

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(price);
        cardBody.appendChild(addToCart);
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);

        // Add card inside Bootstrap column
        colDiv.appendChild(cardDiv);
        // Append column to the row container
        productsContainer.appendChild(colDiv);
    });
});
