CREATE TABLE IF NOT EXISTS plant (
   id INTEGER PRIMARY KEY,
    name VARCHAR(250),
    height INTEGER,
    pot_change DATE,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    type  VARCHAR(250)-- Enum for Type
);