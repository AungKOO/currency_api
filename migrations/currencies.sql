-- Table: public.currencies

-- DROP TABLE IF EXISTS public.currencies;

CREATE TABLE IF NOT EXISTS public.currencies
(
    id uuid DEFAULT uuid_generate_v4(),
    date timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    currency json
)