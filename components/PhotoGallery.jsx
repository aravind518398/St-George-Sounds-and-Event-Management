"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';
import PhotoSkeleton from './ui/PhotoSkeleton';

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
        return <PhotoSkeleton/>;
    }

    if (error) {
        return <div className="text-center py-8 text-red-500">Error: {error}</div>;
    }

    if (photos.length === 0) {
        return <div className="text-center py-8">No photos found</div>;
    }

return (
    <div className=" mx-4 py-8">
        <h1 className="text-3xl font-bold text-center text-purple-800/70" style={{ fontFamily: "Verdana, Geneva, sans-serif" }}>Event Management Photos</h1>
         <div className="flex justify-center pt-3 mb-10">
                            <Image src="/violet-design.svg" alt="violet-design" width={300} height={1} />
                        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 max-w-7xl mx-auto">
            {photos.map((photo) => (
                <div key={photo.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
                    <Image
                        src={photo.imageUrl}
                        alt={photo.name}
                        width={600}
                        height={400}
                        quality={100}
                        className="w-full h-80  md:h-90 object-cover cursor-pointer"
                    />
                </div>
            ))}
            
            
        </div>
        <div className="flex justify-center pt-10 mb-10">
                            <Image src="/violet-design.svg" alt="violet-design" width={300} height={1} />
                        </div>
    </div>
);
};

export default PhotoGallery;