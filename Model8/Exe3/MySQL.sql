--
-- Logical Model:
--
-- Table: users
--   - id (Primary Key)
--   - username (Unique)
--   - email (Unique)
--   - password_hash
--   - created_at
--   - updated_at
--
-- Table: posts
--   - id (Primary Key)
--   - user_id (Foreign Key to users.id)
--   - title
--   - description
--   - image_url
--   - created_at
--   - updated_at
--
-- Table: comments
--   - id (Primary Key)
--   - post_id (Foreign Key to posts.id)
--   - user_id (Foreign Key to users.id)
--   - comment_text
--   - created_at
--   - updated_at
--
-- Table: likes
--   - id (Primary Key)
--   - post_id (Foreign Key to posts.id)
--   - user_id (Foreign Key to users.id)
--   - created_at
--   - Unique constraint on (post_id, user_id) to prevent duplicate likes
--

--
-- Physical Model (MySQL Implementation):
--

-- Create the database
CREATE DATABASE IF NOT EXISTS blogging_app;

-- Use the created database
USE blogging_app;

-- Table for users
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table for posts
CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Table for comments
CREATE TABLE IF NOT EXISTS comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    comment_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Table for likes
CREATE TABLE IF NOT EXISTS likes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE (post_id, user_id) -- Ensures a user can only like a post once
);

