--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE admin;
ALTER ROLE admin WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:LKsKUVGZsTZ/06R3lC9qAw==$FVrcBUmp9WoFlbCl/KpwXJ3sgkL7tPI26F3cmaWWH3M=:y/ohoTjESgER+p3UFscn9U4GvWP7xMiT694zX8nnGdU=';






--
-- Databases
--

--
-- Database "template1" dump
--

\connect template1

--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1 (Debian 14.1-1.pgdg110+1)
-- Dumped by pg_dump version 14.1 (Debian 14.1-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

\connect postgres

--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1 (Debian 14.1-1.pgdg110+1)
-- Dumped by pg_dump version 14.1 (Debian 14.1-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- PostgreSQL database dump complete
--

--
-- Database "test" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1 (Debian 14.1-1.pgdg110+1)
-- Dumped by pg_dump version 14.1 (Debian 14.1-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: test; Type: DATABASE; Schema: -; Owner: admin
--

CREATE DATABASE test WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE test OWNER TO admin;

\connect test

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: dancer; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.dancer (
    id integer NOT NULL,
    first_name_en character varying NOT NULL,
    last_name_en character varying NOT NULL,
    description character varying NOT NULL,
    image_url character varying NOT NULL,
    created_at timestamp(0) without time zone DEFAULT now() NOT NULL,
    updated_at timestamp(0) without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.dancer OWNER TO admin;

--
-- Name: dancer_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.dancer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.dancer_id_seq OWNER TO admin;

--
-- Name: dancer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.dancer_id_seq OWNED BY public.dancer.id;


--
-- Name: performance; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.performance (
    id integer NOT NULL,
    title character varying NOT NULL,
    description character varying NOT NULL,
    image_url character varying NOT NULL,
    start_at character varying NOT NULL,
    created_at timestamp(0) without time zone DEFAULT now() NOT NULL,
    updated_at timestamp(0) without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.performance OWNER TO admin;

--
-- Name: performance_dancers_dancer; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.performance_dancers_dancer (
    "performanceId" integer NOT NULL,
    "dancerId" integer NOT NULL
);


ALTER TABLE public.performance_dancers_dancer OWNER TO admin;

--
-- Name: performance_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.performance_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.performance_id_seq OWNER TO admin;

--
-- Name: performance_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.performance_id_seq OWNED BY public.performance.id;


--
-- Name: typeorm_metadata; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.typeorm_metadata (
    type character varying NOT NULL,
    database character varying,
    schema character varying,
    "table" character varying,
    name character varying,
    value text
);


ALTER TABLE public.typeorm_metadata OWNER TO admin;

--
-- Name: dancer id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.dancer ALTER COLUMN id SET DEFAULT nextval('public.dancer_id_seq'::regclass);


--
-- Name: performance id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.performance ALTER COLUMN id SET DEFAULT nextval('public.performance_id_seq'::regclass);


--
-- Data for Name: dancer; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.dancer (id, first_name_en, last_name_en, description, image_url, created_at, updated_at) FROM stdin;
1	Yuma	Sumi	元ジョージア国立バレエ団。エンジニア。	https://en.wikipedia.org/wiki/Mikhail_Baryshnikov#/media/File:Mikhail_Baryshnikov.jpg	2022-04-09 07:41:47	2022-04-09 07:41:47
2	Daigo	Tanaka	地主薫バレエ団。エンジニア。	https://en.wikipedia.org/wiki/Mikhail_Baryshnikov#/media/File:Mikhail_Baryshnikov.jpg	2022-04-09 07:42:39	2022-04-09 07:42:39
3	Ryo	Takaya	元スターダンサーズバレエ団。エンジニア。	https://en.wikipedia.org/wiki/Mikhail_Baryshnikov#/media/File:Mikhail_Baryshnikov.jpg	2022-04-09 07:42:57	2022-04-09 07:42:57
\.


--
-- Data for Name: performance; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.performance (id, title, description, image_url, start_at, created_at, updated_at) FROM stdin;
1	白鳥の湖	鬼才アダム・クーパー振付、男性だけの白鳥の湖。	https://en.wikipedia.org/wiki/Swan_Lake#/media/File:Swan_Lake_prodution_2008_at_the_Royal_Swedish_Opera.jpg	2022-04-09T19:00+09:00	2022-04-09 07:45:03	2022-04-09 07:45:03
2	くるみ割り人形	クリスマスといえば、くるみ割り人形。	https://en.wikipedia.org/wiki/The_Nutcracker#/media/File:Nutcracker_design_(cropped).jpg	2022-04-16T19:00+09:00	2022-04-09 07:46:17	2022-04-09 07:46:17
3	眠れる森の美女	チャイコフスキーの一大スペクタクル。	https://en.wikipedia.org/wiki/Sleeping_Beauty#/media/File:Henry_Meynell_Rheam_-_Sleeping_Beauty.jpg	2022-04-30T19:00+09:00	2022-04-09 07:47:31	2022-04-09 07:47:31
\.


--
-- Data for Name: performance_dancers_dancer; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.performance_dancers_dancer ("performanceId", "dancerId") FROM stdin;
1	1
1	2
1	3
2	3
3	2
3	3
\.


--
-- Data for Name: typeorm_metadata; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.typeorm_metadata (type, database, schema, "table", name, value) FROM stdin;
\.


--
-- Name: dancer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.dancer_id_seq', 3, true);


--
-- Name: performance_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.performance_id_seq', 3, true);


--
-- Name: dancer PK_4c65b963266e69582401249dd08; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.dancer
    ADD CONSTRAINT "PK_4c65b963266e69582401249dd08" PRIMARY KEY (id);


--
-- Name: performance PK_bd775d560f1a8d8e0e2e43fc57f; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.performance
    ADD CONSTRAINT "PK_bd775d560f1a8d8e0e2e43fc57f" PRIMARY KEY (id);


--
-- Name: performance_dancers_dancer PK_f7750832a9cbc001ebf623ed901; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.performance_dancers_dancer
    ADD CONSTRAINT "PK_f7750832a9cbc001ebf623ed901" PRIMARY KEY ("performanceId", "dancerId");


--
-- Name: IDX_418c35460dee271f7171e7a002; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX "IDX_418c35460dee271f7171e7a002" ON public.performance_dancers_dancer USING btree ("performanceId");


--
-- Name: IDX_ace318637f0972d3090a1d3fec; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX "IDX_ace318637f0972d3090a1d3fec" ON public.performance_dancers_dancer USING btree ("dancerId");


--
-- Name: performance_dancers_dancer FK_418c35460dee271f7171e7a0028; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.performance_dancers_dancer
    ADD CONSTRAINT "FK_418c35460dee271f7171e7a0028" FOREIGN KEY ("performanceId") REFERENCES public.performance(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: performance_dancers_dancer FK_ace318637f0972d3090a1d3fec3; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.performance_dancers_dancer
    ADD CONSTRAINT "FK_ace318637f0972d3090a1d3fec3" FOREIGN KEY ("dancerId") REFERENCES public.dancer(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--

