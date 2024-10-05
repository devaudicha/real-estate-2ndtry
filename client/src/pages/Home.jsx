import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import ListingItem from '../components/ListingItem';
import Spinner from '../components/Spinner';
import './animations.css'; // Ensure this file exists

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferListings();
  }, []);

  return (
    <div> {/* No specific background color class applied */}
      {/* Top Section */}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto text-center">
        <h1 className="text-navy-900 font-extrabold text-5xl lg:text-7xl tracking-wide leading-tight animate-fade-in">
          Discover Your Dream <span className="text-gold-500">Home</span> Today
        </h1>
        <p className="text-gray-500 text-md lg:text-lg max-w-lg mx-auto mt-4 animate-fade-in">
          Welcome to <span className="font-bold text-navy-600">VastuVilla</span>, your gateway to premium properties.
          Let us help you find your perfect living space, tailored to your needs.
        </p>
        <Link
          to={'/search'}
          className="inline-block text-gray-800 text-lg bg-gradient-to-r from-gold-600 to-gold-700 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
          style={{ textShadow: '1px 1px 2px rgba(255, 255, 255, 0.7)' }} // Adds a subtle white shadow to the text
        >
          Explore Listings
        </Link>
      </div>

      {/* Swiper Section for Offers */}
      <div className="my-10">
        <Swiper
          navigation
          loop={offerListings.length > 1} // Enable loop only if more than one listing
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1} // Ensure this is manageable given the number of slides
          slidesPerGroup={1} // Set group size for sliding
        >
          {offerListings.length > 0 ? (
            offerListings.map((listing) => (
              <SwiperSlide key={listing._id}>
                <div
                  style={{
                    background: `url(${listing.imageUrls[0]}) center no-repeat`,
                    backgroundSize: 'cover',
                  }}
                  className="h-[500px] w-full flex items-end"
                >
                  <div className="bg-gradient-to-t from-black via-transparent to-transparent h-full flex items-end p-6">
                    <div className="text-white">
                      <h2 className="text-2xl font-bold">{listing.title}</h2>
                      <p className="mt-2">{listing.description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <Spinner />
          )}
        </Swiper>
      </div>

      {/* Listings Section */}
      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        {offerListings.length > 0 && (
          <div className="col-span-full">
            <h2 className="text-3xl font-semibold text-navy-800 mb-4">Hot Offers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings.length > 0 && (
          <div className="col-span-full">
            <h2 className="text-3xl font-semibold text-navy-800 mb-4">For Rent</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings.length > 0 && (
          <div className="col-span-full">
            <h2 className="text-3xl font-semibold text-navy-800 mb-4">For Sale</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
