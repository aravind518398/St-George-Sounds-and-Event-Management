"use client";

import { useState } from "react";
import supabase from "../../../config/supabaseClient";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function AdminGallery() {
    const [activeTab, setActiveTab] = useState("homepage");
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    const [homepageVideo, setHomepageVideo] = useState(null);
    const [loadingHomepage, setLoadingHomepage] = useState(true);

    // Photo upload
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [previewUrls, setPreviewUrls] = useState([]);

    // Video/Shorts/Albums upload
    const [videoTitle, setVideoTitle] = useState("");
    const [videoUrl, setVideoUrl] = useState("");

    const showMessage = (msg, type) => {
        setMessage(msg);
        setMessageType(type);
        setTimeout(() => setMessage(""), 4000);
    };

    // Fetch homepage video on load
    useEffect(() => {
        const fetchHomepageVideo = async () => {
            try {
                const { data, error } = await supabase
                    .from("home-page-youtube-video")
                    .select("*")
                    .limit(1);

                if (error) throw error;
                if (data && data.length > 0) {
                    setHomepageVideo(data[0]);
                    setVideoUrl(data[0].url);
                }
                setLoadingHomepage(false);
            } catch (error) {
                console.error("Error fetching homepage video:", error);
                setLoadingHomepage(false);
            }
        };

        fetchHomepageVideo();
    }, []);

    // Fetch videos when tab changes
    useEffect(() => {
        if (activeTab !== "photos" && activeTab !== "homepage") {
            const tableName = activeTab === "videos" ? "youtube-videos" : 
                             activeTab === "shorts" ? "youtube-shorts" : "wedding-albums";
            fetchExistingVideos(tableName);
        }
    }, [activeTab]);

    // Handle photo selection
    const handlePhotoSelect = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles(files);

        const previews = files.map(file => URL.createObjectURL(file));
        setPreviewUrls(previews);
    };

    // Upload photos to storage
    const handlePhotoUpload = async () => {
        if (!selectedFiles.length) {
            showMessage("Please select at least one photo", "error");
            return;
        }

        setUploading(true);
        try {
            for (const file of selectedFiles) {
                const fileName = `${Date.now()}-${file.name}`;
                const { error } = await supabase.storage
                    .from("photo-gallery")
                    .upload(fileName, file);

                if (error) throw error;
            }

            showMessage(`${selectedFiles.length} photos uploaded successfully!`, "success");
            setSelectedFiles([]);
            setPreviewUrls([]);
        } catch (error) {
            showMessage(`Upload failed: ${error.message}`, "error");
        } finally {
            setUploading(false);
        }
    };

    // Upload video/shorts/albums to database
   const handleVideoUpload = async () => {
    if (!videoUrl.trim()) {
        showMessage("Please fill in the URL field", "error");
        return;
    }

    // Extract YouTube video ID from URL
    let videoId = videoUrl;
    const youtubeRegex = /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = videoUrl.match(youtubeRegex);
    if (match) {
        videoId = match[1];
    }

    setUploading(true);
    setVideoTitle("");
    try {
        const tableName = activeTab === "videos" ? "youtube-videos" : 
                         activeTab === "shorts" ? "youtube-shorts" : "wedding-albums";

        const { error } = await supabase
            .from(tableName)
            .insert([{ url: videoId }]);

        if (error) throw error;

        showMessage(`${activeTab} uploaded successfully!`, "success");
        setVideoUrl("");
        // Refresh the list
        fetchExistingVideos(tableName);
    } catch (error) {
        showMessage(`Upload failed: ${error.message}`, "error");
    } finally {
        setUploading(false);
    }
};

    // Fetch existing videos
    const fetchExistingVideos = async (tableName) => {
        try {
            
            const { data, error } = await supabase
                .from(tableName)
                .select("*")
                .order("id", { ascending: false });

            if (error) throw error;
           
        } catch (error) {
            console.error("Error fetching videos:", error);
        } finally {
            // setLoadingVideos(false);
        }
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <div className="w-full min-h-screen bg-white text-[#674188]">
            {/* Header */}
            <div className="w-full bg-white border-b border-gray-300 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold text-[#674188]"
                    >
                       St.George Event Management<br></br>Gallery Admin Panel
                    </motion.h1>
                    <p className="text-gray-600 mt-2">Manage your gallery content</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Message Display */}
                {message && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`mb-6 p-4 rounded-lg border ${
                            messageType === "success"
                                ? "bg-green-50 border-green-300 text-green-800"
                                : "bg-red-50 border-red-300 text-red-800"
                        }`}
                    >
                        {message}
                    </motion.div>
                )}

                {/* Tabs */}
                <div className="flex gap-4 mb-8 flex-wrap">
                    {[ "homepage", "photos", "videos", "shorts", "albums"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => {
                                setActiveTab(tab);
                                setSelectedFiles([]);
                                setPreviewUrls([]);
                                setVideoTitle("");
                                setVideoUrl("");
                            }}
                            className={` border border-[#674188] px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                                activeTab === tab
                                    ? "bg-[#674188] text-white"
                                    : "bg-white text-[#674188] hover:bg-gray-100"
                            }`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Upload Section */}
                {activeTab !== "homepage" && (
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="bg-gray-50 border border-gray-300 rounded-2xl p-8"
                >
                    {activeTab === "photos" ? (
                        <>
                            <h2 className="text-2xl font-bold mb-6 text-[#674188]">Upload Photos</h2>

                            {/* File Input */}
                            <motion.div variants={item} className="mb-6">
                                <label className="block mb-3 text-lg font-semibold text-[#674188]">
                                    Select Photos
                                </label>
                                <input
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    onChange={handlePhotoSelect}
                                    disabled={uploading}
                                    className="w-full px-4 py-3 bg-white border border-gray-400 rounded-lg text-gray-500 focus:outline-none focus:border-[#674188] disabled:opacity-50"
                                />
                                <p className="text-sm text-purple-950 mt-2">
                                    You can select multiple images at once
                                </p>
                            </motion.div>

                            {/* Preview */}
                            {previewUrls.length > 0 && (
                                <motion.div variants={item} className="mb-6">
                                    <h3 className="text-lg font-semibold text-[#674188] mb-4">
                                        Preview ({previewUrls.length})
                                    </h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                        {previewUrls.map((url, idx) => (
                                            <div
                                                key={idx}
                                                className="relative w-full aspect-square rounded-lg overflow-hidden border border-gray-400"
                                            >
                                                <img
                                                    src={url}
                                                    alt={`Preview ${idx}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Upload Button */}
                            <motion.button
                                variants={item}
                                onClick={handlePhotoUpload}
                                disabled={uploading || !selectedFiles.length}
                                className="w-full bg-[#674188] hover:bg-purple-950 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                            >
                                {uploading ? "Uploading..." : `Upload ${selectedFiles.length} Photos`}
                            </motion.button>
                        </>
                    ) : (
                        <>
                            <h2 className="text-2xl font-bold mb-6 text-[#674188]">
                                Upload {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                            </h2>

                            {/* Title Input */}
                            <motion.div variants={item} className="mb-6">
                                <label className="block mb-3 text-lg font-semibold text-[#674188]">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    value={videoTitle}
                                    onChange={(e) => setVideoTitle(e.target.value)}
                                    placeholder="Enter title"
                                    disabled={uploading}
                                    className="w-full px-4 py-3 bg-white border border-gray-400 rounded-lg text-black focus:outline-none focus:border-[#674188] disabled:opacity-50"
                                />
                            </motion.div>

                            {/* URL Input */}
                            <motion.div variants={item} className="mb-6">
                                <label className="block mb-3 text-lg font-semibold text-[#674188]">
                                    YouTube URL or Video ID
                                </label>
                                <input
                                    type="text"
                                    value={videoUrl}
                                    onChange={(e) => setVideoUrl(e.target.value)}
                                    placeholder="Paste YouTube URL or Video ID"
                                    disabled={uploading}
                                    className="w-full px-4 py-3 bg-white border border-gray-400 rounded-lg text-black focus:outline-none focus:border-[#674188] disabled:opacity-50"
                                />
                                <p className="text-sm text-purple-950 mt-2">
                                    Example: https://youtube.com/watch?v=dQw4w9WgXcQ or dQw4w9WgXcQ
                                </p>
                            </motion.div>

                            {/* Upload Button */}
                            <motion.button
                                variants={item}
                                onClick={handleVideoUpload}
                                disabled={uploading || !videoTitle.trim() || !videoUrl.trim()}
                                className="w-full bg-[#674188] hover:bg-purple-950 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                            >
                                {uploading ? "Uploading..." : `Upload ${activeTab}`}
                            </motion.button>
                        </>
                    )}
                </motion.div>
                )}

                {/* Homepage Video Section */}
                {activeTab === "homepage" && (
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="bg-gray-50 border border-gray-300 rounded-2xl p-8"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-[#674188]">Homepage Video</h2>

                        {loadingHomepage ? (
                            <p className="text-gray-600">Loading current video...</p>
                        ) : (
                            <>
                                {/* Current Video Display */}
                                {homepageVideo && (
                                    <motion.div variants={item} className="mb-8">
                                        <h3 className="text-lg font-semibold text-[#674188] mb-4">
                                            Current Video
                                        </h3>
                                        <div className="bg-white border border-gray-400 rounded-lg p-4">
                                            <div className="aspect-video rounded-lg overflow-hidden mb-4">
                                                <iframe
                                                    className="w-full h-full"
                                                    src={`https://www.youtube.com/embed/${homepageVideo.url}`}
                                                    title="Homepage Video"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                            <p className="text-gray-700 text-sm">
                                                <strong>Video ID:</strong> {homepageVideo.url}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Update Video Form */}
                                <motion.div variants={item} className="mb-6">
                                    <h3 className="text-lg font-semibold text-[#674188] mb-4">
                                        Update Homepage Video
                                    </h3>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block mb-3 text-lg font-semibold text-[#674188]">
                                                YouTube URL or Video ID
                                            </label>
                                            <input
                                                type="text"
                                                value={videoUrl}
                                                onChange={(e) => setVideoUrl(e.target.value)}
                                                placeholder="Paste YouTube URL or Video ID"
                                                disabled={uploading}
                                                className="w-full px-4 py-3 bg-white border border-gray-400 rounded-lg text-gray-500 focus:outline-none focus:border-[#674188] disabled:opacity-50"
                                            />
                                            <p className="text-sm text-purple-950 mt-2">
                                                Example: https://youtube.com/watch?v=dQw4w9WgXcQ or dQw4w9WgXcQ
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Update Button */}
                                <motion.button
                                    variants={item}
                                    onClick={async () => {
                                        if (!videoUrl.trim()) {
                                            showMessage("Please enter a video URL or ID", "error");
                                            return;
                                        }

                                        let videoId = videoUrl;
                                        const youtubeRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/;
                                        const match = videoUrl.match(youtubeRegex);
                                        if (match) {
                                            videoId = match[1];
                                        }

                                        setUploading(true);
                                        try {
                                            if (homepageVideo) {
                                                // Update existing
                                                const { error } = await supabase
                                                    .from("home-page-youtube-video")
                                                    .update({ url: videoId })
                                                    .eq("id", homepageVideo.id);

                                                if (error) throw error;
                                            } else {
                                                // Create new
                                                const { error } = await supabase
                                                    .from("home-page-youtube-video")
                                                    .insert([{ url: videoId }]);

                                                if (error) throw error;
                                            }

                                            setHomepageVideo({ ...homepageVideo, url: videoId } || { id: 1, url: videoId });
                                            showMessage("Homepage video updated successfully!", "success");
                                        } catch (error) {
                                            showMessage(`Update failed: ${error.message}`, "error");
                                        } finally {
                                            setUploading(false);
                                        }
                                    }}
                                    disabled={uploading || !videoUrl.trim()}
                                    className="w-full bg-[#674188] hover:bg-purple-950 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                                >
                                    {uploading ? "Updating..." : "Update Homepage Video"}
                                </motion.button>
                            </>
                        )}
                    </motion.div>
                )}

                {/* Info Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-8 bg-gray-50 border border-gray-300 rounded-2xl p-6"
                >
                    <h3 className="text-xl font-bold text-[#674188] mb-4">Upload Guidelines</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li>📸 Photos: Upload JPG, PNG, GIF, or WebP images</li>
                        <li>🎥 Videos: Use YouTube links (full URL or Video ID)</li>
                        <li>📱 Shorts: Use YouTube Shorts links (full URL or Video ID)</li>
                        <li>💒 Albums: Use YouTube video links for albums</li>
                        <li>🏠 Homepage: Set the main YouTube video for homepage</li>
                        <li>✅ All files are automatically processed and optimized</li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
}