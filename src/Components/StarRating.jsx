import StarBorderIcon from '@mui/icons-material/StarBorder';
// Yıldızlı Puanlama Bileşeni
const StarRating = ({ rating, setRating }) => {
    return (
        <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
                <StarBorderIcon
                    key={star}
                    size={32}
                    className={`cursor-pointer ${star <= rating ? "text-yellow-500" : "text-gray-300"}`}
                    onClick={() => setRating(star)}
                />
            ))}
        </div>
    );
};

export default StarRating;
