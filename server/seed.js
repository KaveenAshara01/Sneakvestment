import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';
import User from './models/User.js';
import bcrypt from 'bcryptjs';

dotenv.config();

const products = [
    {
        name: 'Air Jordan 1 Retro High OG',
        brand: 'Jordan',
        price: 140,
        minOrder: 12,
        images: ['https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2670&auto=format&fit=crop'],
        description: 'Classic silhouette in premium leather.',
        inStock: true
    },
    {
        name: 'Yeezy Boost 350 V2',
        brand: 'Adidas',
        price: 180,
        minOrder: 10,
        images: ['https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=2565&auto=format&fit=crop'],
        description: 'Iconic aesthetic and comfort.',
        inStock: true
    },
    {
        name: 'Nike Dunk Low Retro',
        brand: 'Nike',
        price: 90,
        minOrder: 20,
        images: ['https://images.unsplash.com/photo-1636188448574-e847cd6b4f70?q=80&w=2669&auto=format&fit=crop'],
        description: 'Streetwear staple.',
        inStock: true
    },
    {
        name: 'New Balance 550',
        brand: 'New Balance',
        price: 85,
        minOrder: 15,
        images: ['https://images.unsplash.com/photo-1662580749006-2591636735be?q=80&w=2371&auto=format&fit=crop'],
        description: 'Vintage basketball style.',
        inStock: true
    }
];

const seedAdmin = async () => {
    try {
        await User.deleteMany({});

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('admin123', salt);

        const adminUser = new User({
            username: 'admin',
            email: 'admin@sneakvestment.com',
            password: hashedPassword,
            isAdmin: true
        });

        await adminUser.save();
        console.log('Admin User Created: admin / admin123');
    } catch (error) {
        console.error('Error seeding admin:', error);
    }
};

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log('MongoDB Connected');

        // Seed Products
        await Product.deleteMany({});
        await Product.insertMany(products);
        console.log('Products Seeded');

        // Seed Admin
        await seedAdmin();

        console.log('All Data Seeded Successfully');
        process.exit();
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });
