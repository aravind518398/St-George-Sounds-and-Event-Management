"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';

const PhotoGallery = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await fetch('/api/photos');
                if (!response.ok) {
                    throw new Error('Failed to fetch photos');
                }
                const data = await response.json();
                setPhotos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPhotos();
    }, []);

    if (loading) {
        return <div className="text-center py-8">Loading photos...</div>;
    }

    if (error) {
        return <div className="text-center py-8 text-red-500">Error: {error}</div>;
    }

    if (photos.length === 0) {
        return <div className="text-center py-8">No photos found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Google Drive Photos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos.map((photo) => (
                    <div key={photo.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <Image
                            src={photo.thumbnail || photo.imageUrl}
                            alt={photo.name}
                            width={600}
                            height={400}
                            quality={100}
                            className="w-full h-48 object-cover cursor-pointer"
                            onClick={() => window.open(photo.imageUrl, '_blank')}
                        />
                        <div className="p-3">
                            <p className="text-sm font-medium truncate">{photo.name}</p>
                            <p className="text-xs text-gray-500">
                                {new Date(photo.createdTime).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotoGallery;