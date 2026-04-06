const axios = require('axios');

exports.getDataById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await axios.get(`https://api.example.com/data/${id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data', error: error.message });
    }
};

exports.getDataByQuery = async (req, res) => {
    const { queryParam } = req.query;
    try {
        const response = await axios.get(`https://api.example.com/data`, { params: { queryParam } });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data', error: error.message });
    }
};