import { useEffect, useState } from "react";
import MapSkeleton from "./ui/MapSkeleton";
export default function GoogleMap() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <section className="w-full py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Visit Our Location
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Find us at Aruvithura. We're easily accessible and look forward to welcoming you.
                    </p>
                </div>
                {isLoading && <MapSkeleton />}
                <div className="relative">
                    <div className={`bg-white rounded-3xl shadow-xl overflow-hidden ${isLoading ? "hidden" : ""}`}>
                        <iframe
                            className="w-full h-[500px] sm:h-[400px] md:h-[450px] lg:h-[500px]"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1302.62336735169!2d76.77554519866518!3d9.685228745719803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07cb8ab62f7e73%3A0x63901da6d8f7373f!2sSt.George%20Sounds%20and%20Event%20Management!5e0!3m2!1sen!2sin!4v1754832316862!5m2!1sen!2sin"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="eager"
                            onLoad={() => setIsLoading(false)}

                            referrerPolicy="no-referrer-when-downgrade"
                            title="St.George Sounds and Event Management"
                        />
                        <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-20"></div>
                        <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-green-500 rounded-full opacity-20"></div>
                    </div>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                        <p className="text-gray-600">Aruvithura, Kottayam, Erattupetta, <br />Kerala 686122</p>
                    </div>
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                            <a href="tel: +919961020996"><svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg></a>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                        <a href="tel: +919961020996"><p className="text-gray-600">+91-9961020996</p></a>
                    </div>
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Hours</h3>
                        <p className="text-gray-600">Available 24 &times; 7 <br/>for our customers</p>
                    </div>
                </div>
            </div>
        </section>
    );
}