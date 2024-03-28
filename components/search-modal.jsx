import "@/styles/search-modal.css";

import { Search, X } from "lucide-react";

export const SearchModal = ({ closeModal }) => {
    const outsideClose = (event) => {
        if(event.target === event.currentTarget) {
            closeModal();
        }
    }

    const images = [
        "/cat-1.jpg",
        "/cat-2.jpg",
        "/cat-3.jpg",
        "/cat-4.png",
        "/cat-2.jpg",
        "/cat-1.jpg",
        "/cat-4.png",
        "/cat-3.jpg"
    ];

    return (
        <div className="search-modal-wrapper" onClick={outsideClose}>
            <div className="search-modal">
                <div className="search-modal-header">
                    <Search className="modal-search-icon" />

                    <input
                        type="text"
                        placeholder="Search backgrounds"
                        className="modal-search-input"
                    />

                    <button
                        className="search-modal-close-btn"
                        onClick={closeModal}    
                    >
                        <X className="modal-close-icon" />
                    </button>
                </div>

                <div className="search-modal-content">
                    {/* <p className="search-modal-default-result">
                        No recent searches
                    </p> */}

                    <div className="search-modal-result">
                        {images.map((img, index) => (
                            <div className="search-modal-image-container" key={index}>
                                <img
                                    src={img}
                                    alt="cats"
                                    className="search-modal-image"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}