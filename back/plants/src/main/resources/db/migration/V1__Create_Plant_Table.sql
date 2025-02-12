CREATE TABLE IF NOT EXISTS plant (
    id UUID NOT NULL DEFAULT gen_random_uuid() ,
    name VARCHAR(250),
    height INTEGER,
    pot_change DATE,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    type VARCHAR(250), -- Enum for Type
    CONSTRAINT id_tbl PRIMARY KEY ( id )
);