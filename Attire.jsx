import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import image1 from "../images/image1.png"; 
import image2 from "../images/image2.png"; 
import image3 from "../images/image3.png"; 
import image4 from "../images/image4.png";
import image5 from "../images/image5.png"; 
import image6 from "../images/image6.png"; 
import image7 from "../images/image7.png"; 
import image8 from "../images/image8.png"; 
import image9 from "../images/image9.png"; 
import image10 from "../images/image10.png"; 
import image11 from "../images/image11.png"; 
import image12 from "../images/image12.png";
import image13 from "../images/image13.png"; 
import image14 from "../images/image14.png"; 
import image15 from "../images/image15.png"; 

const Attire = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    
    const [showModal, setShowModal] = useState(false); // State to control the modal visibility

    const currentPage = parseInt(searchParams.get('page')) || 1;
    const itemsPerPage = 5; // Adjusted to show 5 items per page

    // Sample product data with placeholder images
    const products = [
        { id: 1, src: image1, name: "WOMEN KURTA", description: "SLIK NETTED", quantity: 10, price: "₹3300", oldPrice: "₹5800" },
        { id: 2, src: image2, name: "FULL SLEEVEE KURTA", description: "A NEAT AND TIDY ONE", quantity: 11, price: "₹3400", oldPrice: "₹4800" },
        { id: 3, src: image3, name: "ROUND NECK KURTA", description: "CUTE KURTA WITH SILK ATTACHMENT", quantity: 12, price: "₹2150", oldPrice: "₹6800" },
        { id: 4, src: image4, name: "CUTE KURTA", description: "RETINED NET AND GEROGEMATTE", quantity: 13, price: "₹2000", oldPrice: "₹7800" },
        { id: 5, src: image5, name: "NEAT KURTA", description: "KURTA MATERIAL", quantity: 14, price: "₹3000", oldPrice: "₹8800" },
        { id: 6, src: image6, name: "NEAT KURTA", description: "A beautiful ONE", quantity: 15, price: "₹2100", oldPrice: "₹9800" },
        { id: 7, src: image7, name: "Cute ONE", description: "CUTE AND CHIK", quantity: 16, price: "₹2200", oldPrice: "₹11800" },
        { id: 8, src: image8, name: "NEAT ONE", description: "outfits", quantity: 17, price: "₹2300", oldPrice: "₹2800" },
        { id: 9, src: image9, name: "BEAUTIFUL KURTA", description: "combo of cute", quantity: 18, price: "₹2400", oldPrice: "₹2500" },
        { id: 10, src: image10, name: "KURTA ONE", description: "kurta with cute embroidery", quantity: 19, price: "₹2500", oldPrice: "₹3500" },
        { id: 11, src: image11, name: "GOOD KURTA", description: "cute and neat kurta", quantity: 20, price: "₹2600", oldPrice: "₹4500" },
        { id: 12, src: image12, name: "BLACK KURTA", description: "black kurta with cute sleeve", quantity: 21, price: "₹2700", oldPrice: "₹5500" },
        { id: 13, src: image13, name: "BIG SALE", description: "big day make a way with this outfit", quantity: 22, price: "₹2800", oldPrice: "₹6500" },
        { id: 14, src: image14, name: "BANJARAASS KURTA", description: "banjaraass border", quantity: 23, price: "₹2900", oldPrice: "₹7500" },
        { id: 15, src: image15, name: "COMBO ONE", description: "hitted altime", quantity: 25, price: "₹1000", oldPrice: "₹8500" }
    ];

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => {
        setSearchParams({ page: pageNumber });
    };

    const handleAddToCartClick = () => {
        setShowModal(true); // Show the modal
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', background: '#f8f9fa' }}>
            {/* Modal */}
            <div style={{
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.5)',
                display: showModal ? 'flex' : 'none',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000 // Ensure the modal is on top of other content
            }}>
                <div style={{
                    background: 'white',
                    padding: '20px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    width: '300px',
                    zIndex: 1001 // Modal content should be above the modal background
                }}>
                    <div style={{ fontSize: '40px', color: '#28a745' }}>✔</div>
                    <h2 style={{ fontSize: '18px', fontWeight: '600' }}>Added to Cart Successfully!</h2>
                    <p>Your product has been added to the cart.</p>
                    <button
                        style={{
                            backgroundColor: '#007bff',
                            color: 'white',
                            padding: '10px 20px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            border: 'none'
                        }}
                        onClick={handleCloseModal}
                    >
                        Okay
                    </button>
                </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', padding: '16px', gap: '16px', flexGrow: 1, justifyContent: 'center' }}>
                {currentProducts.map((product) => (
                    <div key={product.id} style={{ width: '250px', height: 'auto', border: '1px solid #ddd', borderRadius: '15px', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', background: 'white', display: 'flex', flexDirection: 'column' }}>
                        <img src={product.src} alt={product.name} style={{ width: '100%', height: '60%', objectFit: 'cover', borderRadius: '15px 15px 0 0' }} />
                        <div style={{ padding: '8px 16px', textAlign: 'center', flexGrow: 1 }}>
                            <div style={{ fontSize: '1em', marginBottom: '10px' }}>{product.name}</div>
                            <div style={{ color: 'gray', fontSize: '0.9em', marginBottom: '10px' }}>{product.description}</div>
                            <div style={{ color: 'green', fontWeight: 'bold', marginBottom: '5px' }}>{product.price}</div>
                            <div style={{ textDecoration: 'line-through', color: 'red', marginBottom: '10px' }}>{product.oldPrice}</div>
                            <div style={{ color: 'gray', marginBottom: '10px' }}>Quantity Available: {product.quantity}</div>
                        </div>
                        <button 
                            style={{ backgroundColor: '#007bff', color: 'white', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', border: 'none', alignSelf: 'center', marginBottom: '8px' }}
                            onClick={handleAddToCartClick}
                        >
                            Add to cart
                        </button>
                    </div>
                ))}
            </div>

            <div style={{ padding: '16px' }}>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        style={{
                            padding: '8px 16px',
                            margin: '0 4px',
                            borderRadius: '4px',
                            border: '1px solid #007bff',
                            backgroundColor: currentPage === page ? '#007bff' : 'white',
                            color: currentPage === page ? 'white' : '#007bff',
                            cursor: 'pointer'
                        }}
                    >
                        {page}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Attire;
