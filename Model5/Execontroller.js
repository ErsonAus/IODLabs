// …controller functions for the friends routes

const friends = require('./Friends');   // in‑memory array

/**
 * return the complete list of friends
 */
function getAll(req, res) {
    res.json(friends);
}

/**
 * apply query‑string filters: gender and/or letter
 * e.g. /friends/filter?gender=male&letter=R
 */
function filter(req, res) {
    const { gender, letter } = req.query;
    let matches = [...friends];

    if (gender) {
        matches = matches.filter(f => f.gender == gender);
    }
    if (letter) {
        const lc = letter.toLowerCase();
        matches = matches.filter(f => f.name && f.name[0].toLowerCase() === lc);
    }

    if (matches.length > 0) {
        res.status(200).json(matches);
    } else {
        let msg = 'No friends';
        if (gender) msg += ` matching gender ${gender}`;
        if (letter) msg += ` starting with ${letter}`;
        res.status(404).json({ error: msg.trim() });
    }
}

/**
 * return only the user‑agent, content‑type and accept headers
 */
function info(req, res) {
    const { 'user-agent': ua, 'content-type': contentType, accept } = req.headers;
    res.json({ 'user-agent': ua, 'content-type': contentType, accept });
}

/**
 * look up a single friend by numeric id
 */
function getById(req, res) {
    const id = parseInt(req.params.id, 10);
    const friend = friends.find(f => f.id === id);
    if (friend) {
        res.json(friend);
    } else {
        res.status(404).json({ error: `Friend with id ${id} not found` });
    }
}

/**
 * add a new friend (used by POST /friends/)
 */
function add(req, res) {
    const newFriend = req.body;
    if (!newFriend.name || !newFriend.gender) {
        return res.status(500).json({ error: 'Friend object must contain a name and gender' });
    }
    if (!newFriend.id) {
        newFriend.id = friends.length + 1;
    }
    friends.push(newFriend);
    res.status(200).json(newFriend);
}

/**
 * update an existing friend (used by PUT /friends/:id)
 */
function update(req, res) {
    const id = parseInt(req.params.id, 10);
    const updatedData = req.body;

    const index = friends.findIndex(f => f.id === id);
    if (index === -1) {
        return res.status(404).json({ error: `Friend with id ${id} not found` });
    }
    const updatedFriend = Object.assign(friends[index], updatedData);
    friends[index] = updatedFriend;
    res.json(updatedFriend);
}

module.exports = {
    getAll,
    filter,
    info,
    getById,
    add,
    update
};