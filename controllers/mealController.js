import { pool } from '../db.js';

export const getRandomDish = async(req, res) =>{
    const query = 'SELECT * FROM gerechten WHERE category != "Hapjes" AND category != "Dessert" ORDER BY RAND() LIMIT 1';
    try{
        const [result] = await pool.execute(query);
        res.status(200).json({
            status: 'success',
            data: result[0],
        })
    }catch(err){
        console.error('Error showing events : ', err);
        return res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
}
export const getRandomDishByCategory = async(req, res) =>{
    const {category} = req.params;

    const categoryMap = {
        'chicken':'Kip',
        'dessert' : 'Dessert',
        'pork':'Varken',
        'meat':'Gehakt',
        'vegan' :'Vegetarisch',
        'fish': 'Vis',
        'starter' : 'Hapjes'
    };

    const dbCategory = categoryMap[category];

    if(!dbCategory){
        return res.status(400).json({
            status:'error',
            message:'Invalid category'
        });
    }

    const id = Math.floor(Math.random()*11);
    const query = 'SELECT * FROM gerechten WHERE category = ? ORDER BY RAND() LIMIT 1';
    try{
        const [result] = await pool.execute(query, [dbCategory]);
        res.status(200).json({
            status: 'success',
            data: result[0],
        })
    }catch(err){
        console.error('Error showing events : ', err);
        return res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
}