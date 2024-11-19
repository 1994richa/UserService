const User = require('../models/user');

// Create a new user
const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        const saveduser = await user.save();
        res.status(201).json(saveduser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error creating user' });
    }
};

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users' });
    }
};

// Get a user by ID
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'user not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching user' });
    }
};

// Update user by ID
const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const updates = req.body;  // Get the data to update from request body

        // Validate if the user ID exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'user not found' });
        }

        // Update the user with new data
        const updateduser = await user.findByIdAndUpdate(userId, updates, { new: true });
        
        // Respond with updated user
        res.status(200).json(updateduser);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Delete user by ID

const deleteUser = async (req, res) => {

    try {
        const userId = req.params.id;
        // Find the user by ID and delete it
        const deleteduser = await User.findByIdAndDelete(userId);

        if (!deleteduser) {
            return res.status(404).json({ message: 'user not found' });
        }

        res.status(200).json({ message: 'user deleted successfully', deleteduser });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'An error occurred while deleting the user', error });
    }
}

module.exports = { createUser, getAllUsers, getUserById, updateUser, deleteUser };
