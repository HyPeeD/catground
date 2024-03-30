"use client";

export const DownloadButton = ({ imageUrl }) => {
    const imageURL = `https://catground.vercel.app${imageUrl}`;

    const handleDownload = async () => {
        const response = await fetch(imageURL);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'image');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button className="download-btn" onClick={handleDownload}>
            Download 4K
        </button>
    );
}