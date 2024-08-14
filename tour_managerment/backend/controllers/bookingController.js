
import Booking from "../models/Booking.js"

//create new booking
export const createBooking = async (req, res) => {
    const newBooking = new Booking(req.body);
    try {
        const savedBooking = await newBooking.save();

        res.status(200).json({
            success: true,
            messege: "Your tour is booked",
            data: savedBooking,
        });
        
    } catch (err) {
        res.status(500).json({ success: true, messege: "Internal server error!" });
    }
};
// get single booking tour
export const getBooking = async (req, res) => {
    const id = req.params.id;
    try {
        const book = await Booking.findById(id);
        res.status(200).json({
            success: true,
            messege: "Successful",
            data: book,
        });


    } catch (err) {
        res.status(404).json({ success: true, messege: "Not found!" });
    }
}

// get all booking tour
export const getAllBooking = async (req, res) => {
  
    try {
        const book = await Booking.find();
        res.status(200).json({
            success: true,
            messege: "Successful",
            data: books,
        });


    } catch (err) {
        res.status(500).json({ success: true, messege: "Internal server error!" });
    }
}