import React from 'react';
import TourCard from '../shared/TourCard';
import { Col } from 'reactstrap';
import useFetch from './../../hooks/useFetch';
import { BASE_URL } from './../../components/utils/config';
const FeaturedTourlist = () => {
  const { data: FeaturedTours,loading,error } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);
  
  return (
    <>
      {
        loading && <h4>Loading...............</h4>
      }
      {
        error && <h4>{error}</h4>
      }
      {!loading &&
        !error &&
        FeaturedTours?.map(tour => (
            <Col lg='3' className='mb-4' key={tour._id}>
                <TourCard tour = {tour}/>
            </Col>
        ))}
    </>
  )
}

export default FeaturedTourlist