import React, { useState, useEffect } from "react";
import StarRating from "../Components/StarRating";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CommentIcon from '@mui/icons-material/Comment';

const ReviewSection = () => {

    const [reviews, setReviews] = useState([]);
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(5);
    const [visibleReviews, setVisibleReviews] = useState(5);

    // LocalStorage'dan yorumları al
    useEffect(() => {
        const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
        setReviews(storedReviews);
    }, []);

    // Yeni yorum ekleme fonksiyonu
    const handleAddReview = () => {

        if (!name || !comment) return alert("Lütfen adınızı ve yorumunuzu girin!");

        const newReview = { name, comment, rating };
        const updatedReviews = [newReview, ...reviews];

        setReviews(updatedReviews);
        localStorage.setItem("reviews", JSON.stringify(updatedReviews));

        setName("");
        setComment("");
        setRating(5);
    };

    // Yorumları en yüksek puandan düşüğe sıralama
    const sortedReviews = reviews.sort((a, b) => b.rating - a.rating);

    // Görüntülenecek yorumları almak
    const reviewsToDisplay = sortedReviews.slice(0, visibleReviews);

    // Yorumları Göster/Gizle Fonksiyonu
    const toggleShowReviews = () => {

        if (visibleReviews < reviews.length) {
            setVisibleReviews(reviews.length); // Tüm yorumları göster
        } else {
            setVisibleReviews(5); // Başlangıçta 5 yorum göster
        }

    };

    return (
        <div className="h-auto w-[780px] bg-gray-700 p-6 mx-auto flex justify-center items-center rounded-sm ">

            <div className="w-[1000px]">

                <h2 className="flex justify-center text-3xl mt-7 font-serif mb-4 text-white ">Sizin Görüşleriniz <CommentIcon className="ml-2 mt-1" style={{ height: "35px", width: "35px" }} /></h2>

                <div className="flex flex-col gap-8 justify-center mt-10">

                    <div className="flex flex-col gap-4 w-full">

                        <div className="relative">

                            <input
                                type="text"
                                className="w-full p-2 border-none rounded bg-gray-800 text-white"
                                placeholder="Adınız"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <span
                                className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-600 transform scale-x-0 transition-all duration-300 focus:scale-x-100 focus:bottom-0"
                            ></span>

                        </div>

                        <textarea
                            className="w-full p-2 rounded mt-2 border-none bg-gray-800 text-white"
                            placeholder="Yorumunuz..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />

                        <StarRating rating={rating} setRating={setRating} />

                        <button
                            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 duration-300"
                            onClick={handleAddReview}
                        >
                            Yorumu Gönder
                        </button>

                    </div>

                    <div className="w-full">

                        {reviewsToDisplay.length === 0 ? (
                            <p className="text-white">Henüz yorum yok. İlk yorumu sen ekle! 😊</p>
                        ) : (

                            reviewsToDisplay.map((review, index) => (
                                <div key={index} className="p-3 border-b last:border-none bg-gray-800 rounded mb-2 transition-transform hover:translate-x-2">

                                    <div className="flex items-center mb-2">

                                        <h3 className="font-bold text-white">{review.name}</h3>
                                        <p className="text-yellow-500 ml-2">{"⭐".repeat(review.rating)}</p>

                                    </div>
                                    <p className="text-white">{review.comment}</p>

                                </div>
                            ))
                        )}

                        <h1
                            className="mt-4 w-[185px] text-white hover:text-neutral-400 p-2 rounded  duration-300 mb-10 cursor-pointer"
                            onClick={toggleShowReviews}
                        >
                            {visibleReviews < reviews.length ? (
                                <span>
                                    Daha Fazlasını Gör<KeyboardArrowDownIcon />
                                </span>
                            ) : (
                                <span >
                                    Daha Az Yorum Gör<KeyboardArrowUpIcon />
                                </span>
                            )}

                        </h1>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ReviewSection;
