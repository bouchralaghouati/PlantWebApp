CREATE TABLE IF NOT EXISTS plant (
   id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(250),
    height INTEGER,
    pot_change DATE,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    type ENUM('INTERIEUR', 'EXTERIEUR') -- Enum for Type
);