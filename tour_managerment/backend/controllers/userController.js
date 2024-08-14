import User from '../models/User.js'



//create new User
export const createUser = async (req, res) => {
    const newUser = new User(req.body);
    try {
        const savedUser = await newUser.save();
        res.status(200).json({
            success: true,
            messege: 'Successfully created',
            data: savedUser,
        });

    } catch (err) {
        res
            .status(500)
            .json({success: false, messege: 'Unsuccessfully created.Try again!'});
    }
};

//update User
export const updateUser = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            {
                $set: req.body,
            },
            { new: true }
        );

        res.status(200).json({
            success: true,
            messege: "Successfully updated",
            data: updatedUser,
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            messege: "Unsuccessfully update.Try again!",

        });
    }
};
//delete User
export const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        await User.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            messege: "Successfully deleted",

        });

    } catch (err) {
        res.status(500).json({
            success: false,
            messege: "Unsuccessfully delete.Try again!",

        });
    }
};
//getSingle User
export const getSingleUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);

        res.status(200).json({
            success: true,
            messege: "Successfully found",
            data: user,
        });

    } catch (err) {
        res.status(404).json({
            success: false,
            messege: "Not found!",

        });
    }
};
//getAll User
export const getAllUser = async (req, res) => {

    try {
        const users = await User.find({})
        res.status(200).json({
            success: true,
            messege: "Successfully found",
            data: users,
        });

    } catch (err) {
        res.status(404).json({
            success: false,
            messege: "Not found!",

        });
    }
};